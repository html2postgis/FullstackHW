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


// tmp marker used for onclick event
var marker = null;
// flags for chosing if we should gecode/revergeocode data for pickup or delivery
var pickupbtnClicked = false;
var deliverybtnClicked = false;

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
    "<span style='color: lightgreen'>Pickups</span>": pickUpmarkers,
    "<span style='color: red'>Delivery<br />&emsp; roads</span>": deliveryRoads,
    "<span style='color: pink'>Deliveries</span>": deliverymarkers
};



// reverse geocoding service
var geocodeService1 = L.esri.Geocoding.geocodeService();
// geocoding service
var geocodeService2 = L.esri.Geocoding.geocodeService();

// map submit display
mapSubmit.invalidateSize();
L.control.layers(baseLayers2, overlays2).addTo(mapSubmit);
mapSubmit.invalidateSize();

// popup map display
L.control.layers(baseLayers1, overlays1).addTo(map);
//map on click handle
map.on('click', onMapClick1);

// geocoding and address filling 
function geocodingAddressFiller() {
    if (pickupbtnClicked == true) {
        if ($('#pstreet').val() && $('#ppostcode').val() && $('#pcity').val()) {
            geocodeService2.geocode().address($('#pstreet').val()).city($('#pcity').val()).postal($('#ppostcode').val()).run(function (err, results, response) {
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
            geocodeService2.geocode().address($('#dstreet').val()).city($('#dcity').val()).postal($('#dpostcode').val()).run(function (err, results, response) {
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

    {
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


}

// button handlers
$("#submit-button").click(function () {
    var person = { f_name: "Karol", l_name: "Malinowski", email: "karol.mal@gmail.com", phone: "+48608192913" };
    var address = { City: $('#pcity').val(), StreetAddress: $('#pstreet').val(), Postcode: $('#ppostcode').val(), Person: person };
    $.ajax({
        method: "POST",
        url: "FormSubmit/AddAddress",
        data: JSON.stringify(address),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            console.log('Send - success', response);
        },
        error: function (response) {
            console.warn('Send - error', response);
        }
    });
});
$("#obtain-button").click(function () {

    $.ajax({
        url: "FormSubmit/GetAddress",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log('GetAddress - success', response);
            if (response == null) {
                console.log("Response is null");
                return;
            }
            $('#dcity').val(response.city);
            $('#dstreet').val(response.streetAddress);
            $('#dpostcode').val(response.postcode);
            //$('#sfname').val(response.person.f_name);
            //$('#slname').val(response.person.l_name);
            //$('#semail').val(response.person.email);
            //$('#sphone').val(response.person.phone);
        },
        error: function (response) {
            console.warn('GetAddress - error', response);
        }
    });
    //$.getJSON("FormSubmit/GetAddress")
    //    .done(function (data) {
    //        console.log("Start" + data+ "end");
    //        // On success, 'data' contains a list of addresses.
    //        if (data == null) return;
    //        $('#dcity').val(data.City);
    //        console.log("Here 2");

    //        //$.each(data, function (key, item) {
    //        //    console.log(item);
    //        //});
    //    });
});



//$(document).ready(function () {
//    // Send an AJAX request
//    //$.getJSON(uri)
//    //    .done(function (data) {
//    //        // On success, 'data' contains a list of addresses.
//    //        if (data == null) return;
//    //        $('#dcity').val(data[PICKUP].City);
//    //        //$('#pstreet').val(data[PICKUP].StreetAddress);
//    //        //$('#ppostcode').val(data[PICKUP].Postcode);
//    //        //$('#sfname').val(data[PICKUP].person.f_name);
//    //        //$('#slname').val(data[PICKUP].person.l_name);
//    //        //$('#semail').val(data[PICKUP].person.email);
//    //        //$('#sphone').val(data[PICKUP].person.phone);

//    //        //$('#dcity').val(data[DELIVERY].City);
//    //        //$('#dstreet').val(data[DELIVERY].StreetAddress);
//    //        //$('#dpostcode').val(data[DELIVERY].Postcode);
//    //        //$('#rfname').val(data[DELIVERY].person.f_name);
//    //        //$('#rlname').val(data[DELIVERY].person.l_name);
//    //        //$('#remail').val(data[DELIVERY].person.email);
//    //        //$('#rphone').val(data[DELIVERY].person.phone);
//    //        //$.each(data, function (key, item) {
//    //        //    console.log(item);
//    //        //});
//    //    });
//});
//function formatItem(item) {
//    return item.Name + ': $' + item.Price;
//}

//function find() {
//    var id = $('#prodId').val();
//    $.getJSON(uri + '/' + id)
//        .done(function (data) {
//            $('#product').text(formatItem(data));
//        })
//        .fail(function (jqXHR, textStatus, err) {
//            $('#product').text('Error: ' + err);
//        });
//}
//function getSuccess(data, textStatus, jqXHR) {

//    alert(data.Response);

//}
//function loadJsonData() {
//    var postdata = JSON.stringify(
//        {
//            "City": document.getElementById("pcity").value,
//            "StreetAddress": document.getElementById("pstreet").value,
//            "Postcode": document.getElementById("ppostcode").value
//        });
//    try {
//        $.ajax({
//            type: "POST",
//            url: uri,
//            cache: false,
//            data: postdata,
//            dataType: "json",
//            success: getSuccess,
//            error: getFail
//        });
//    } catch (e) {
//        alert(e);
//    }
//    function getSuccess(data, textStatus, jqXHR) {
//        alert(data.Response);
//    };
//    function getFail(jqXHR, textStatus, errorThrown) {
//        alert(jqXHR.status);
//    };
//};