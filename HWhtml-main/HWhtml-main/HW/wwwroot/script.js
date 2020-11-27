



//1
var sender = { f_name: "Adam", l_name: "Nowak", email: "domain@example.com", phone: "+12345678900" };
var receiver = { f_name: "Jan", l_name: "Kowalski", email: "domain@example.com", phone: "+12345678900" };
var address = {
    City: "Warszawa", StreetAddress: "Kredytowa 4", Postcode: "00-062", Lat: 52.238528245262124, Lng: 21.01046561012541, person: sender
};
var address2 = {
    City: "Kraków", StreetAddress: "Reymonta 22", Postcode: "31-409", Lat: 50.066407456055416, Lng: 19.909681208763097, person: receiver
};
var order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1 };
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
//2
sender = { f_name: "Joanna", l_name: "Maj", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Mikołaj", l_name: "Kwiecień", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Częstochowa", StreetAddress: "ul.o.A.Kordeckiego 2", Postcode: "42-225", Lat: 50.81272448245279, Lng: 19.09705407797141, person: sender
};
address2 = {
    City: "Warszawa", StreetAddress: "Siedmiogrodzka 5", Postcode: "01-204", Lat: 52.232013010825796, Lng: 20.97292065614859, person: receiver
};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 2 };

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
//3
sender = { f_name: "Olga", l_name: "Polak", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Maria", l_name: "Kalinowska", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Warszawa", StreetAddress: "Górczewska 56", Postcode: "01-189", Lat: 52.238795162169154, Lng: 20.95423377149595, person: sender
};
address2 = {
    City: "Płock", StreetAddress: "Piękna 6", Postcode: "09-402", Lat: 52.54741994123815, Lng: 19.699410125665082, person: receiver
};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 2 };

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
//4
sender = { f_name: "Helena", l_name: "Jolant", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Olga", l_name: "Wesoły", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Kraków", StreetAddress: "Przewóz 14", Postcode: "30-716", Lat: 50.0443136346423, Lng: 19.988123393407285, person: sender
};
address2 = {
    City: "Płock", StreetAddress: "Bielska 14", Postcode: "09-402", Lat: 52.54786933472654, Lng: 19.688589271692777, person: receiver
};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 3 };


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
//5
sender = { f_name: "Bartosz", l_name: "Mirosławski", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Aleksander", l_name: "Hobbit", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Płock", StreetAddress: "Tysiąclecia 1", Postcode: "09-400", Lat: 52.55285187534909, Lng: 19.692460371695994, person: sender
};
address2 = { City: "Kraków", StreetAddress: "Piaszczysta 8", Postcode: "31-226", Lat: 50.09798549594688, Lng: 19.928819547412694, person: receiver };
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 3 };


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
//6
sender = { f_name: "Zofia", l_name: "Znudzona", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Milena", l_name: "Miła", email: "domain@example.com", phone: "+12345678900" };
address = { City: "Kraków", StreetAddress: "Bursztynowa 76", Postcode: "31-213", Lat: 50.09300581958679, Lng: 19.944902146862027, person: sender };
address2 = {
    City: "Szczecin", StreetAddress: "Aleja Piastów 30", Postcode: "71-899", Lat: 53.41845440099098, Lng: 14.531434218827657, person: receiver
};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1 };

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
//7
sender = { f_name: "Helena", l_name: "Bednarska", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Marek", l_name: "Łazarz", email: "domain@example.com", phone: "+12345678900" };
address = { City: "Gdańsk", StreetAddress: "aleja Grunwaldzka 72", Postcode: "80-244", Lat: 54.377470718441806, Lng: 18.609584026848975, person: sender };
address2 = {
    City: "Lublin", StreetAddress: "Ignacego Rzeckiego 21", Postcode: "20-400", Lat: 51.23708579070312, Lng: 22.529983211370205, person: receiver
};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1 };

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
//8
sender = { f_name: "Tomasz", l_name: "Adamiak", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Krystyna", l_name: "Kunegunda", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Katowice", StreetAddress: "Mariacka 1", Postcode: "40-014", Lat: 50.25775535874447, Lng: 19.024704954909147, person: sender
};
address2 = {
    City: "Kraków", StreetAddress: "Zdrowa 32", Postcode: "31-215", Lat: 50.08777776474257, Lng: 19.946214477543894, person: receiver
};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1 };


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
//9
sender = { f_name: "Maja", l_name: "Kuna", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Wojciech", l_name: "Wilk", email: "domain@example.com", phone: "+12345678900" };
address = { City: " Zielona Góra", StreetAddress: "Generała Władysława Sikorskiego 10", Postcode: "65 - 454", Lat: 51.936608895464204, Lng: 15.50667663267349, person: sender };
address2 = { City: "Gdynia", StreetAddress: "aleja Jana Pawła II 13A", Postcode: "81-345", Lat: 52.23284292236503, Lng: 20.99852302491627, person: receiver };
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1 };


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
//10
sender = {
    f_name: "Bartosz", l_name: "Wiosna", email: "domain@example.com", phone: "+12345678900"
};
receiver = { f_name: "Antoni", l_name: "Lato", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Białystok", StreetAddress: "Jerzego Waszyngtona 24a", Postcode: "15-274", Lat: 52.239587514944176, Lng: 21.05865368683821, person: sender
};
address2 = {
    City: "Łódź", StreetAddress: "Piotrkowska 282", Postcode: "93-034", Lat: 51.745578418072625, Lng: 19.461758240497808, person: receiver
};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1 };

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
var marker12 = null;
var marker21 = null;
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
    "<span style='color: pink'>Deliveries</span>": deliverymarkers
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




// popup map display
L.control.layers(baseLayers1, overlays1).addTo(map);
//map on click handle
map.on('click', onMapClick1);

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

$("#submit-button").click(function () {
    
    if ($('#dstreet').val() && $('#dpostcode').val() && $('#dcity').val()) {

        geocodeService2.geocode().address($('#dstreet').val()).city($('#dcity').val()).postal($('#dpostcode').val()).run(function (err, results, response) {
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
                geocodeService3.geocode().address($('#pstreet').val()).city($('#pcity').val()).postal($('#ppostcode').val()).run(function (err, results, response) {
                    
                    if (err) {
                        console.log(err);
                        return;
                    }


                    arrayOfPoints.push(results.results[0].latlng.lat);
                    arrayOfPoints.push(results.results[0].latlng.lng);
                    lacik1 = arrayOfPoints[0];
                    console.log(lacik1);
                    lacik2 =arrayOfPoints[1];
                    console.log(lacik2);
                    lacik3 = arrayOfPoints[2];
                    console.log(lacik3);
                   
                    lacik4 = arrayOfPoints[3];
                    console.log(lacik4);

                    var address = { City: $('#pcity').val(), StreetAddress: $('#pstreet').val(), Postcode: $('#ppostcode').val(),Lat: lacik1, Lng: lacik2 };
                    var address2 = { City: "HelloCity", StreetAddress: "Helloaddress", Postcode: "hfoslkfds", Lat: lacik3, Lng: lacik4};
                    var order = { PickupAddress: address, DeliveryAddress: address2 };
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
                });

            }
        });

    }
    
   
   
    //$.ajax({
    //    url: "FormSubmit/Action2",
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    data: JSON.stringify(order),
    //    dataType: "json",
    //    success: function (response) {
    //        console.log('Action2 - success', response);
    //        //if (response == null) {
    //        //    console.log("Response is null");
    //        //    return;
    //        //}
    //        //$('#dcity').val(response.city);
    //        //$('#dstreet').val(response.streetAddress);
    //        //$('#dpostcode').val(response.postcode);
    //        //$('#sfname').val(response.person.f_name);
    //        //$('#slname').val(response.person.l_name);
    //        //$('#semail').val(response.person.email);
    //        //$('#sphone').val(response.person.phone);
    //    },
    //    error: function (response) {
    //        console.warn('GetAddress - error', response);
    //    }
    //});
});
// button handlers
//$("#submit-button").click(function () {
//    var person = { f_name: "Karol", l_name: "Malinowski", email: "karol.mal@gmail.com", phone: "+48608192913" };
//    var address = { City: $('#pcity').val(), StreetAddress: $('#pstreet').val(), Postcode: $('#ppostcode').val(), Person: person };
//    $.ajax({
//        method: "POST",
//        url: "FormSubmit/AddAddress",
//        data: JSON.stringify(address),
//        contentType: "application/json",
//        dataType: "json",
//        success: function (response) {
//            console.log('Send - success', response);
//        },
//        error: function (response) {
//            console.warn('Send - error', response);
//        }
//    });
//});
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
            console.log(response);
            for (let i = 0; i < response.length; ++i) {
              marker12= L.marker([response[i].deliveryAddress.lat, response[i].deliveryAddress.lng]).addTo(deliverymarkers).bindPopup("Delivery " + response[i].id + ": " + response[i].deliveryAddress.streetAddress);
                marker21 = L.marker([response[i].pickupAddress.lat, response[i].pickupAddress.lng]).addTo(pickUpmarkers).bindPopup("Pickup " + response[i].id + ": " + response[i].pickupAddress.streetAddress);
            }
        },
        error: function (response) {
            console.warn('GetOrders - error', response);
        }
    });

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