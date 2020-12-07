var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
    streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });


//var cities = L.layerGroup()


var uri = 'api/address';

var lngp;
var latp;

var lngd;
var latd;

$(document).ready(function () {
    const PICKUP0 = 0;
    const DELIVERY1 = 1;
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            // On success, 'data' contains a list of addresses.
            if (data == null) return;
            $('#pcity').val(data[PICKUP0].City);
            $('#pstreet').val(data[PICKUP0].StreetAddress);
            $('#ppostcode').val(data[PICKUP0].Postcode);
            $('#sfname').val(data[PICKUP0].person.f_name);
            $('#slname').val(data[PICKUP0].person.l_name);
            $('#semail').val(data[PICKUP0].person.email);
            $('#sphone').val(data[PICKUP0].person.phone);
            //$.each(data, function (key, item) {
            //    console.log(item);
            //});

            latp = data[PICKUP0].lat;
            lngp = data[PICKUP0].lng;

            latd = data[DELIVERY1].lat;
            lngd = data[DELIVERY1].lng;

            var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

            var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
                streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });


            var cities = L.layerGroup()


            var map = L.map('map', {
                center: [52.237049, 21.017532],
                zoom: 13,
                layers: [grayscale, cities]
            });



            var baseLayers = {
                "Grayscale": grayscale,
                "Streets": streets
            };

           

            var geocodeService = L.esri.Geocoding.geocodeService();

            L.control.layers(baseLayers).addTo(map);

            var marker = L.marker([latp, lngp]).addTo(map).bindPopup("Pickup");
            var marker1 = L.marker([latd, lngd]).addTo(map).bindPopup("Delivery");
            console.log(latp);
            console.log(lngp);
        });
});



//var baseLayers = {
//    "Grayscale": grayscale,
//    "Streets": streets
//};

//var overlays = {
//    "Markers": cities
//};

//var geocodeService = L.esri.Geocoding.geocodeService();

//map.on('click', onMapClick);

//var results = cities.addTo(map);
//var searchControl = L.esri.Geocoding.geosearch().addTo(map);

//searchControl.on('results', function (data) {
//    for (var i = data.results.length - 1; i >= 0; i--) {
//        results.addLayer(L.marker(data.results[i].latlng));
//    }
//});

//function onMapClick(e) {
//    if (map.hasLayer(cities)) {
//        geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
//            if (error) {
//                return;
//            }

//            var marker = new L.marker(e.latlng, { draggable: true }).addTo(cities).bindPopup(result.address.Match_addr).openPopup();
//            console.log(result.address.Match_addr)
//            var full_address = result.address.Match_addr;
//            var address_array = full_address.split(",");
//            console.log(address_array);

//            // marker.on('mouseover', function (e) {
//            //     this.openPopup();
//            // });

//            marker.on('contextmenu', function (e) {
//                var mypopup = this.getPopup();
//                if (mypopup.isOpen) {
//                    map.removeLayer(this);
//                    cities.removeLayer(this);
//                }
//            });
//            // marker.on('drag', function (e) {
//            //   this.setLatLng(e.latlng);
//            //   geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
//            //     if (error) {
//            //       return;
//            //     }
//            //     marker._popup.setContent(result.address.Match_addr).openPopup();


//            //   });
//            //   // document.getElementById('outlat').innerHTML = latlng.lat;
//            //   // document.getElementById('outlon').innerHTML = latlng.lng;
//            // });
//        });
//    }
//}









