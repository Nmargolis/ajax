"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
   // go to the /fortune route and do 

  $.get('/fortune', function(result) {
    $('#fortune-text').html(result);
    // console.log(result);
  });
  
}
$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, function(result) {
         var forecast = result['forecast'];
         $('#weather-info').html(forecast);      
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        'qty': $('#qty-field').val(),
        'melon_type': $('#melon-type-field').val()
    };

    // TODO: show the result message after your form
    $.post('/order-melons.json', formInputs, function(result) {
        var statusMessage = result['msg'];
        var statusCode = result['code'];
        $('#order-status').html(statusMessage);
        // alert('this worked');
    });

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


