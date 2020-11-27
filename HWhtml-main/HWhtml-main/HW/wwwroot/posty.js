
//1
var sender = { f_name: "Adam", l_name: "Nowak", email: "domain@example.com", phone: "+12345678900"};
var receiver = { f_name: "Jan", l_name: "Kowalski", email: "domain@example.com", phone: "+12345678900"};
var address = {
    City: "Warszawa", StreetAddress: "Kredytowa 4", Postcode: "00-062", Lat: 52.238528245262124, Lng:21.01046561012541  , person: sender};
var address2 = {
    City: "Kraków", StreetAddress: "Reymonta 22", Postcode: "31-409", Lat: 50.066407456055416, Lng: 19.909681208763097,person:receiver};
var order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1};
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
receiver = { f_name: "Mikołaj", l_name: "Kwiecień", email: "domain@example.com", phone: "+12345678900"};
address = {
    City: "Częstochowa", StreetAddress: "ul.o.A.Kordeckiego 2", Postcode: "42-225", Lat: 50.81272448245279, Lng: 19.09705407797141 , person: sender};
address2 = {
    City: "Warszawa", StreetAddress: "Siedmiogrodzka 5", Postcode: "01-204", Lat: 52.232013010825796, Lng: 20.97292065614859, person: receiver};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 2};

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
receiver = { f_name: "Maria", l_name: "Kalinowska", email: "domain@example.com", phone: "+12345678900"};
address = {
    City: "Warszawa", StreetAddress: "Górczewska 56", Postcode: "01-189", Lat: 52.238795162169154, Lng: 20.95423377149595 , person: sender};
address2 = {
    City: "Płock", StreetAddress: "Piękna 6", Postcode: "09-402", Lat: 52.54741994123815, Lng: 19.699410125665082 , person: receiver};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 2};

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
    City: "Kraków", StreetAddress: "Przewóz 14", Postcode: "30-716", Lat: 50.0443136346423, Lng: 19.988123393407285  , person: sender};
address2 = {
    City: "Płock", StreetAddress: "Bielska 14", Postcode: "09-402", Lat: 52.54786933472654, Lng: 19.688589271692777, person: receiver};
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
receiver = { f_name: "Aleksander", l_name: "Hobbit", email: "domain@example.com", phone: "+12345678900"};
address = {
    City: "Płock", StreetAddress: "Tysiąclecia 1", Postcode: "09-400", Lat: 52.55285187534909, Lng: 19.692460371695994, person: sender};
address2 = { City: "Kraków", StreetAddress: "Piaszczysta 8", Postcode: "31-226", Lat: 50.09798549594688, Lng: 19.928819547412694, person: receiver};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 3};


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
sender = { f_name: "Zofia", l_name: "Znudzona", email: "domain@example.com", phone: "+12345678900"};
receiver = { f_name: "Milena", l_name: "Miła", email: "domain@example.com", phone: "+12345678900"};
address = { City: "Kraków", StreetAddress: "Bursztynowa 76", Postcode: "31-213", Lat: 50.09300581958679, Lng: 19.944902146862027 , person: sender};
address2 = {
    City: "Szczecin", StreetAddress: "Aleja Piastów 30", Postcode: "71-899", Lat: 53.41845440099098, Lng: 14.531434218827657, person: receiver};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1};

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
sender = { f_name: "Helena", l_name: "Bednarska", email: "domain@example.com", phone: "+12345678900"};
receiver = { f_name: "Marek", l_name: "Łazarz", email: "domain@example.com", phone: "+12345678900"};
address = { City: "Gdańsk", StreetAddress: "aleja Grunwaldzka 72", Postcode: "80-244", Lat: 54.377470718441806, Lng: 18.609584026848975 , person: sender};
address2 = {
    City: "Lublin", StreetAddress: "Ignacego Rzeckiego 21", Postcode: "20-400", Lat: 51.23708579070312, Lng: 22.529983211370205, person: receiver};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1};

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
sender = { f_name: "Tomasz", l_name: "Adamiak", email: "domain@example.com", phone: "+12345678900"};
receiver = { f_name: "Krystyna", l_name: "Kunegunda", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Katowice", StreetAddress: "Mariacka 1", Postcode: "40-014", Lat: 50.25775535874447, Lng:19.024704954909147 , person: sender};
address2 = {
    City: "Kraków", StreetAddress: "Zdrowa 32", Postcode: "31-215", Lat: 50.08777776474257, Lng: 19.946214477543894, person:receiver};
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
receiver = { f_name: "Wojciech", l_name: "Wilk", email: "domain@example.com", phone: "+12345678900"};
address = { City: " Zielona Góra", StreetAddress: "Generała Władysława Sikorskiego 10", Postcode: "65 - 454", Lat: 51.936608895464204, Lng: 15.50667663267349, person: sender};
address2 = { City: "Gdynia", StreetAddress: "aleja Jana Pawła II 13A", Postcode: "81-345", Lat: 52.23284292236503 ,Lng:20.99852302491627, person: receiver};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1};


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
    f_name: "Bartosz", l_name: "Wiosna", email: "domain@example.com", phone: "+12345678900" };
receiver = { f_name: "Antoni", l_name: "Lato", email: "domain@example.com", phone: "+12345678900" };
address = {
    City: "Białystok", StreetAddress: "Jerzego Waszyngtona 24a", Postcode: "15-274", Lat: 52.239587514944176, Lng:21.05865368683821 , person:sender};
address2 = {
    City: "Łódź", StreetAddress: "Piotrkowska 282", Postcode: "93-034", Lat: 51.745578418072625, Lng: 19.461758240497808, person: receiver};
order = { PickupAddress: address, DeliveryAddress: address2, PackageWeight: 1};

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