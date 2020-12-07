
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


// some variables and constants
var uri = 'api/address';
let PICKUP = 0;
let DELIVERY = 1;

// map attribute
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

// popup map layers
var grayscale1 = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
    streets1 = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
// submit map layers
var grayscale2 = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
    streets2 = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });



// pickUp marker from form 
var leftMarker = [];
// delivery marker from form
var rightMarker = [];
// data for all pickups
var pickUpsData = [];
// data for all pickups
var deliveriesData = [];

// markers for popup map(could be deleted cause we use one on a time)
var markers1 = L.layerGroup();
// displaying pickup roads(idk if this gonna work)
var pickUpRoads = L.layerGroup();
// displaying delivery roads(idk if this gonna work)
var deliveryRoads = L.layerGroup();
// markers for all pickups
var pickUpmarkers = L.layerGroup();
// markers for all deliveries 
var deliverymarkers = L.layerGroup();

var trucksmarkers = L.layerGroup();
// tmp marker used for onclick event
var marker = null;
var marker12 = null;
var marker21 = null;
var markerleftId = null;
var markerrightID = null;
// flags for chosing if we should gecode/revergeocode data for pickup or delivery
var pickupbtnClicked = false;
var deliverybtnClicked = false;

var markeronSubmitClicked = false;
// popup map
var map = L.map('map', {
    center: [52.237049, 21.017532],
    zoom: 13,
    layers: [grayscale1, markers1]
});

// map for displaying data
var mapSubmit = L.map('mapid', {
    center: [52.237049, 21.017532],
    zoom: 13,
    layers: grayscale2
});

// function on clicking left "red marker" button
function on1() {
    pickupbtnClicked = true;
    deliverybtnClicked = false;
    if (marker !== null) {
        markers1.removeLayer(marker);
    }
    document.getElementById("overlay1").style.display = "flex";
    document.getElementById("mapid").style.zIndex = 1;
    map.invalidateSize();
    geocodingAddressFiller();

}
// function on clicking right "red marker" button
function on2() {

    pickupbtnClicked = false;
    deliverybtnClicked = true;
    if (marker !== null) {
        markers1.removeLayer(marker);
    }
    document.getElementById("overlay1").style.display = "flex";
    map.invalidateSize();
    geocodingAddressFiller();

}
// function on closing popup map
function off1() {
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("mapid").style.zIndex = 2;

}

// layers for popup map
var baseLayers1 = {
    "Grayscale": grayscale1,
    "Streets": streets1
};
var overlays1 = {
    "Markers": markers1
};

// layers for submit map
var baseLayers2 = {
    "Grayscale": grayscale2,
    "Streets": streets2
};
var overlays2 = {
    "<span style='color: green'>Pickup<br />&emsp; roads</span>": pickUpRoads,
    "<span style='color: red'>Delivery<br />&emsp; roads</span>": deliveryRoads,
    "<span style='color: lightgreen'>Pickups</span>": pickUpmarkers,
    "<span style='color: pink'>Deliveries</span>": deliverymarkers,
    "<span style='color: black'>Trucks</span>": trucksmarkers
};



// reverse geocoding service
var geocodeService1 = L.esri.Geocoding.geocodeService();
// geocoding service
var geocodeService2 = L.esri.Geocoding.geocodeService();

var geocodeService3 = L.esri.Geocoding.geocodeService();
// map submit display
mapSubmit.invalidateSize();
L.control.layers(baseLayers2, overlays2).addTo(mapSubmit);

// create custom icon
var depotIcon = L.icon({
    iconUrl: 'Graphics/depot.png',
    iconSize: [50, 50], // size of the icon
});

// create marker object, pass custom icon as option, add to map         
var depotMarker = L.marker([52.232015398127395, 21.006037913359265], { icon: depotIcon }).addTo(mapSubmit).bindPopup("Depot");

//const depotCoords = [52.232015398127395, 21.006037913359265];


// popup map display
L.control.layers(baseLayers1, overlays1).addTo(map);
//map on click handle
map.on('click', onMapClick1);

function getPackageSize() {
    if ($("#small_box:checked").length == 1) {
        return 5;
    }
    else if ($("#medium_box:checked").length == 1) {
        return 15;
    }
    else
        return 25;
}
function getPickUpPoints(callback) {

    if ($('#pstreet').val() && $('#ppostcode').val() && $('#pcity').val()) {
        geocodeService2.geocode().address($('#pstreet').val()).city($('#pcity').val()).postal($('#ppostcode').val()).run(function (err, results, response) {
            var arrayOfPoints = new Array();
            if (err) {
                console.log(err);
                return;
            }


            getDeliveryPoints(function (arrayOfPoints) {

                arrayOfPoints.push(arrayOfPoints[0]);
                arrayOfPoints.push(arrayOfPoints[1]);
                arrayOfPoints.push(results.results[0].latlng.lat);
                arrayOfPoints.push((results.results[0].latlng.lng));
                callback(arrayOfPoints);
            });

        });

    }
}
function getDeliveryPoints(callback) {
    if ($('#dstreet').val() && $('#dpostcode').val() && $('#dcity').val()) {
        geocodeService2.geocode().address($('#dstreet').val()).city($('#dcity').val()).postal($('#dpostcode').val()).run(function (err, results, response) {
            if (err) {
                console.log(err);
                return;
            }
            var arrayOfPoints = [];
            arrayOfPoints.push(results.results[0].latlng.lat);
            arrayOfPoints.push(results.results[0].latlng.lng);


            callback(arrayOfPoints);
        });

    }

}
// geocoding and address filling 
function geocodingAddressFiller() {
    if (pickupbtnClicked == true) {
        if ($('#pstreet').val() && $('#ppostcode').val() && $('#pcity').val()) {
            geocodeService2.geocode().city($('#pcity').val()).address($('#pstreet').val()).postal($('#ppostcode').val()).run(function (err, results, response) {
                if (err) {
                    console.log(err);
                    return;
                }
                leftMarker = [];
                leftMarker.push(results.results[0].latlng);
                leftMarker.push($('#pstreet').val());
                leftMarker.push($('#ppostcode').val());
                leftMarker.push($('#pcity').val());
                console.log(leftMarker);
                //console.log("latitude",results.results[0][0]);

                if (marker !== null) {
                    markers1.removeLayer(marker);
                }

                console.log(results.results[0]);
                marker = L.marker(results.results[0].latlng, { draggable: 'true' }).addTo(markers1).bindPopup($('#pstreet').val()).openPopup().update();
                marker.on('contextmenu', function (e) {
                    var mypopup = this.getPopup();
                    if (mypopup.isOpen) {
                        map.removeLayer(this);
                        markers1.removeLayer(this);
                        leftMarker = [];
                        $('#pstreet').val('');
                        $('#pcity').val('');
                        $('#ppostcode').val('');
                    }
                });
                marker.on('dragend', function (e) {

                    //console.log("You dragged to: " + e.target._latlng);
                    marker.setLatLng(e.target._latlng).update(marker);
                    geocodeService1.reverse().latlng(e.target._latlng).run(function (error, result) {


                        var streetname = result.address.Address;
                        if (streetname == "") { }
                        marker._popup.setContent(streetname);
                        if (pickupbtnClicked == true) {
                            document.getElementById('pstreet').value = result.address.Address;
                            document.getElementById('ppostcode').value = result.address.Postal;
                            document.getElementById('pcity').value = result.address.City;
                        } else if (deliverybtnClicked == true) {
                            document.getElementById('dstreet').value = result.address.Address;
                            document.getElementById('dpostcode').value = result.address.Postal;
                            document.getElementById('dcity').value = result.address.City;
                        }
                    });
                });
            });

        }
    } else if (deliverybtnClicked == true) {
        if ($('#dstreet').val() && $('#dpostcode').val() && $('#dcity').val()) {
            geocodeService2.geocode().city($('#dcity').val()).address($('#dstreet').val()).postal($('#dpostcode').val()).run(function (err, results, response) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(results.results[0]);
                rigthMarker = [];
                rightMarker.push(results.results[0].latlng);
                rightMarker.push($('#dstreet').val());
                rightMarker.push($('#dpostcode').val());
                rightMarker.push($('#dcity').val());
                console.log(rightMarker);
                if (marker !== null) {
                    markers1.removeLayer(marker);
                }

                console.log(results.results[0]);
                marker = L.marker(results.results[0].latlng, { draggable: 'true' }).addTo(markers1).bindPopup($('#dstreet').val()).openPopup().update();
                marker.on('contextmenu', function (e) {
                    var mypopup = this.getPopup();
                    if (mypopup.isOpen) {
                        map.removeLayer(this);
                        markers1.removeLayer(this);
                        rightMarker = [];
                        $('#dstreet').val('');
                        $('#dcity').val('');
                        $('#dpostcode').val('');

                    }
                });
                marker.on('dragend', function (e) {

                    //console.log("You dragged to: " + e.target._latlng);
                    marker.setLatLng(e.target._latlng).update(marker);
                    geocodeService1.reverse().latlng(e.target._latlng).run(function (error, result) {


                        var streetname = result.address.Address;
                        if (streetname == "") { }
                        marker._popup.setContent(streetname);
                        if (pickupbtnClicked == true) {
                            document.getElementById('pstreet').value = result.address.Address;
                            document.getElementById('ppostcode').value = result.address.Postal;
                            document.getElementById('pcity').value = result.address.City;
                        } else if (deliverybtnClicked == true) {
                            document.getElementById('dstreet').value = result.address.Address;
                            document.getElementById('dpostcode').value = result.address.Postal;
                            document.getElementById('dcity').value = result.address.City;
                        }
                    });
                });
            });

        }

    }
}
// reverse geocoding and address filling
function onMapClick1(e) {


    geocodeService1.reverse().latlng(e.latlng).run(function (error, result) {
        if (error) {
            return;
        }
        var streetname = result.address.Address;
        if (streetname == "") {

        } else {

            console.log(result.address);
            if (pickupbtnClicked == true) {
                leftMarker = [];
                leftMarker.push(result.latlng);
                leftMarker.push(result.address.Address);
                leftMarker.push(result.address.Postal);
                leftMarker.push(result.address.City);
                console.log(leftMarker);
                if (marker !== null) {
                    markers1.removeLayer(marker);
                }
                marker = L.marker(leftMarker[0], { draggable: 'true' }).addTo(markers1).bindPopup(leftMarker[1]).openPopup().update();
                document.getElementById('pstreet').value = leftMarker[1];
                document.getElementById('ppostcode').value = leftMarker[2];
                document.getElementById('pcity').value = leftMarker[3];
            } else if (deliverybtnClicked == true) {
                rightMarker = [];
                rightMarker.push(result.latlng);
                rightMarker.push(result.address.Address);
                rightMarker.push(result.address.Postal);
                rightMarker.push(result.address.City);
                console.log(rightMarker);
                if (marker !== null) {
                    markers1.removeLayer(marker);
                }
                marker = L.marker(result.latlng, { draggable: 'true' }).addTo(markers1).bindPopup(result.address.Address).openPopup().update();
                document.getElementById('dstreet').value = result.address.Address;
                document.getElementById('dpostcode').value = result.address.Postal;
                document.getElementById('dcity').value = result.address.City;
            }
            marker.on('contextmenu', function (e) {
                var mypopup = this.getPopup();
                if (mypopup.isOpen) {
                    map.removeLayer(this);
                    markers1.removeLayer(this);
                    if (pickupbtnClicked == true) {
                        leftMarker = [];
                        $('#pstreet').val('');
                        $('#pcity').val('');
                        $('#ppostcode').val('');

                    } else {
                        rightMarker = [];
                        $('#dstreet').val('');
                        $('#dcity').val('');
                        $('#dpostcode').val('');

                    }
                }
            });
            marker.on('dragend', function (e) {

                console.log("You dragged to: " + e.target._latlng);
                marker.setLatLng(e.target._latlng).update(marker);
                geocodeService1.reverse().latlng(e.target._latlng).run(function (error, result) {


                    var streetname = result.address.Address;
                    if (streetname == "") { }
                    marker._popup.setContent(streetname);
                    if (pickupbtnClicked == true) {
                        document.getElementById('pstreet').value = result.address.Address;
                        document.getElementById('ppostcode').value = result.address.Postal;
                        document.getElementById('pcity').value = result.address.City;
                        leftMarker = [];
                        leftMarker.push(result.latlng);
                        leftMarker.push(result.address.Address);
                        leftMarker.push(result.address.Postal);
                        leftMarker.push(result.address.City);
                    } else if (deliverybtnClicked == true) {
                        document.getElementById('dstreet').value = result.address.Address;
                        document.getElementById('dpostcode').value = result.address.Postal;
                        document.getElementById('dcity').value = result.address.City;
                        rightMarker = [];
                        rightMarker.push(result.latlng);
                        rightMarker.push(result.address.Address);
                        rightMarker.push(result.address.Postal);
                        rightMarker.push(result.address.City);
                    }
                });


            });
        }


    });



}
$("#route-button").click(function () {
    colors = ['red', 'blue', 'green'];
    var truckIcon = L.icon({
        iconUrl: 'Graphics/truck.png',
        iconSize: [50, 50], // size of the icon
    });
    $.ajax({
        url: "Vehicle/GetVehicles",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log('GetTrucks - success', response);
            if (response == null) {
                console.log("GetRoutes - Response is null");
                return;
            }
            for (let i = 0; i < response.length; ++i) {

                if (response[i].lat == depotCoords[0] && response[i].lng == depotCoords[1]) {
                    continue;
                }
                else
                    var truckmarker = L.marker([response[i].lat, response[i].lng], { icon: truckIcon }).addTo(trucksmarkers).bindPopup("Truck " + response[i].id);
            }
        },
        error: function (response) {
            console.warn('GetRoutes - error', response);
        }
    });

});
$("#submit-button").click(function () {


    if ($('#dstreet').val() && $('#dpostcode').val() && $('#dcity').val()) {

        geocodeService2.geocode().city($('#dcity').val()).address($('#dstreet').val()).postal($('#dpostcode').val()).run(function (err, results, response) {
            if (err) {
                console.log(err);
                return;
            }
            var arrayOfPoints = [];
            arrayOfPoints.push(results.results[0].latlng.lat);
            arrayOfPoints.push(results.results[0].latlng.lng);
            var lacik1;
            var lacik2;
            var lacik3;
            var lacik4;


            if ($('#pstreet').val() && $('#ppostcode').val() && $('#pcity').val()) {
                geocodeService3.geocode().city($('#pcity').val()).address($('#pstreet').val()).postal($('#ppostcode').val()).run(function (err, results, response) {

                    if (err) {
                        console.log(err);
                        return;
                    }


                    arrayOfPoints.push(results.results[0].latlng.lat);
                    arrayOfPoints.push(results.results[0].latlng.lng);
                    lacik1 = arrayOfPoints[0];
                    console.log(lacik1);
                    lacik2 = arrayOfPoints[1];
                    console.log(lacik2);
                    lacik3 = arrayOfPoints[2];
                    console.log(lacik3);

                    lacik4 = arrayOfPoints[3];
                    console.log(lacik4);
                    var sender = { f_name: $('#sfname').val(), l_name: $('#slname').val(), email: $('#semail').val(), phone: $('#sphone').val() };
                    var receiver = { f_name: $('#rfname').val(), l_name: $('#rlname').val(), email: $('#remail').val(), phone: $('#rphone').val() };
                    var address = { City: $('#pcity').val(), StreetAddress: $('#pstreet').val(), Postcode: $('#ppostcode').val(), Lat: lacik3, Lng: lacik4, person: sender };
                    var address2 = { City: $('#dcity').val(), StreetAddress: $('#dstreet').val(), Postcode: $('#dpostcode').val(), Lat: lacik1, Lng: lacik2, person: receiver };
                    var order = { PickupAddress: address, DeliveryAddress: address2 };
                    if (!markeronSubmitClicked) {
                        $.ajax({
                            method: "POST",
                            url: "FormSubmit/Action1",
                            data: JSON.stringify(order),
                            contentType: "application/json",
                            dataType: "json",
                            success: function (response) {
                                console.log('Action1 - success', response);
                            },
                            error: function (response) {
                                console.warn('Send - error', response);
                            }
                        });
                        $.ajax({
                            method: "POST",
                            url: "Vehicle/AddOrder",
                            data: JSON.stringify(order),
                            contentType: "application/json",
                            dataType: "json",
                            success: function (response) {
                                console.log('AddOrder - success', response);
                            },
                            error: function (response) {
                                console.warn('AddOrder - error', response);
                            }
                        });
                    } else if (markerleftId != null) {
                        var sender = { f_name: $('#sfname').val(), l_name: $('#slname').val(), email: $('#semail').val(), phone: $('#sphone').val() };
                        var receiver = { f_name: $('#rfname').val(), l_name: $('#rlname').val(), email: $('#remail').val(), phone: $('#rphone').val() };
                        var address = { City: $('#pcity').val(), StreetAddress: $('#pstreet').val(), Postcode: $('#ppostcode').val(), Lat: lacik3, Lng: lacik4, person: sender };
                        var address2 = { City: $('#dcity').val(), StreetAddress: $('#dstreet').val(), Postcode: $('#dpostcode').val(), Lat: lacik1, Lng: lacik2, person: receiver };
                        var order = { PickupAddress: address, DeliveryAddress: address2, Id: markerleftId };
                        $.ajax({
                            url: 'FormSubmit/Update/' + markerleftId,
                            type: 'PUT',
                            data: JSON.stringify(order),
                            dataType: "json",
                            contentType: "application/json;charset=utf-8",
                            success: function (data) {
                                alert('Load was performed.');
                                console.log("order", data);
                            }
                        });
                    }
                });

            }
        });

    }





});

$("#obtain-button").click(function () {

    $.ajax({
        url: "FormSubmit/GetAddress",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log('GetOrders - success', response);
            if (response == null) {
                console.log("Response is null");
                return;
            }
            pickUpmarkers.clearLayers();
            // markers for all deliveries 
            deliverymarkers.clearLayers();
            for (let i = 0; i < response.length; ++i) {
                marker12 = L.marker([response[i].deliveryAddress.lat, response[i].deliveryAddress.lng], { icon: redIcon }).addTo(deliverymarkers).bindPopup("Delivery " + response[i].id + ": " + response[i].deliveryAddress.streetAddress);
                marker12.on('click', function (e) {
                    markeronSubmitClicked = true;
                    markerleftId = response[i].id;

                    document.getElementById('pstreet').value = response[i].pickupAddress.streetAddress;
                    document.getElementById('ppostcode').value = response[i].pickupAddress.postcode;
                    document.getElementById('pcity').value = response[i].pickupAddress.city;
                    document.getElementById('sfname').value = response[i].pickupAddress.person.f_name;
                    document.getElementById('slname').value = response[i].pickupAddress.person.l_name;
                    document.getElementById('semail').value = response[i].pickupAddress.person.email;
                    document.getElementById('sphone').value = response[i].pickupAddress.person.phone;
                    console.log("semail", document.getElementById('semail').value);

                    document.getElementById('dstreet').value = response[i].deliveryAddress.streetAddress;
                    document.getElementById('dpostcode').value = response[i].deliveryAddress.postcode;
                    document.getElementById('dcity').value = response[i].deliveryAddress.city;
                    document.getElementById('rfname').value = response[i].deliveryAddress.person.f_name;
                    document.getElementById('rlname').value = response[i].deliveryAddress.person.l_name;
                    document.getElementById('remail').value = response[i].deliveryAddress.person.email;
                    document.getElementById('rphone').value = response[i].deliveryAddress.person.phone;

                });

                marker21 = L.marker([response[i].pickupAddress.lat, response[i].pickupAddress.lng], { icon: greenIcon }).addTo(pickUpmarkers).bindPopup("Pickup " + response[i].id + ": " + response[i].pickupAddress.streetAddress);
                marker21.on('click', function (e) {
                    markeronSubmitClicked = true;
                    markerleftId = response[i].id;
                    document.getElementById('pstreet').value = response[i].pickupAddress.streetAddress;
                    document.getElementById('ppostcode').value = response[i].pickupAddress.postcode;
                    document.getElementById('pcity').value = response[i].pickupAddress.city;
                    document.getElementById('sfname').value = response[i].pickupAddress.person.f_name;
                    document.getElementById('slname').value = response[i].pickupAddress.person.l_name;
                    document.getElementById('semail').value = response[i].pickupAddress.person.email;
                    document.getElementById('sphone').value = response[i].pickupAddress.person.phone;
                    console.log("semail", document.getElementById('semail').value);

                    document.getElementById('dstreet').value = response[i].deliveryAddress.streetAddress;
                    document.getElementById('dpostcode').value = response[i].deliveryAddress.postcode;
                    document.getElementById('dcity').value = response[i].deliveryAddress.city;
                    document.getElementById('rfname').value = response[i].deliveryAddress.person.f_name;
                    document.getElementById('rlname').value = response[i].deliveryAddress.person.l_name;
                    document.getElementById('remail').value = response[i].deliveryAddress.person.email;
                    document.getElementById('rphone').value = response[i].deliveryAddress.person.phone;

                });

            }
            $.ajax({
                method: "GET",
                url: "Vehicle/GetPickupRoads",
                contentType: "application/json",
                dataType: "json",
                success: function (response) {
                    console.log('GetPickupRoads - success', response);
                },
                error: function (response) {
                    console.warn('GetPickupRoads - error', response);
                }
            });
            console.log("After Pickup");
            $.ajax({
                method: "GET",
                url: "Vehicle/GetDeliveryRoads",
                contentType: "application/json",
                dataType: "json",
                success: function (response) {
                    console.log('GetDeliveryRoads - success', response);
                },
                error: function (response) {
                    console.warn('GetDeliveryRoads - error', response);
                }
            });
        },
        error: function (response) {
            console.warn('GetOrders - error', response);
        }
    });

});

$("#orders-button").click(function () {
    $.ajax({
        url: "Vehicle/GetRoutesP",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log('GetRoutesP - success', response);
            if (response == null) {
                console.log("GetRoutes - Response is null");
                return;
            }
            console.log(response);
            var points = [];
            for (let i = 0; i < response.length; ++i) {
                var pointsA = [];
                for (let j = 0; j < response[i].length; ++j) {
                    var point = new L.LatLng(response[i][j].x, response[i][j].y);
                    pointsA.push(point);
                }
                points.push(pointsA);
            }
            for (let i = 0; i < points.length; ++i) {
                var firstpolyline = new L.Polyline(points[i], {
                    color: "green",
                    weight: 3,
                    opacity: 0.5,
                    smoothFactor: 1
                });
                firstpolyline.addTo(mapSubmit);
            }
        },
        error: function (response) {
            console.warn('GetRoutes - error', response);
        }
    });
    $.ajax({
        url: "Vehicle/GetRoutesD",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log('GetRoutesD - success', response);
            if (response == null) {
                console.log("GetRoutes - Response is null");
                return;
            }
            console.log(response);
            var points = [];
            for (let i = 0; i < response.length; ++i) {
                var pointsA = [];
                for (let j = 0; j < response[i].length; ++j) {
                    var point = new L.LatLng(response[i][j].x, response[i][j].y);
                    pointsA.push(point);
                }
                points.push(pointsA);
            }
            for (let i = 0; i < points.length; ++i) {
                var firstpolyline = new L.Polyline(points[i], {
                    color: "red",
                    weight: 3,
                    opacity: 0.5,
                    smoothFactor: 1
                });
                firstpolyline.addTo(mapSubmit);
            }
        },
        error: function (response) {
            console.warn('GetRoutes - error', response);
        }
    });
})