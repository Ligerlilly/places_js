$(document).ready(function() {
  $('#show-location').hide();
  $('form#places').submit(function(event) {
    event.preventDefault();

    var inputLocation = $('input#location').val();
    // var inputLandmark = $('input#landmarks').val();
    var inputNote = $('input#notes').val();

    var newLocation = { location: inputLocation, landmarks: [], note: inputNote };

    $(".new-landmark").each(function(){
      var inputLandmark = $(this).find("input#landmark").val();

      newLocation.landmarks.push(inputLandmark);
    });


    $('ul.locations').append("<li class='location'>" + inputLocation  + "</li>");

    $('input#location').val('');
    $('input#landmark').val('');
    $('input#notes').val('');

    $(".location").last().click(function() {
      $("#show-locations").show();

      $("#show-locations h2").text(newLocation.location);
      $('ul.landmarks').text('');
      newLocation.landmarks.forEach(function(landmark) {
        $("ul.landmarks").append("<li>" + landmark +"</li>");
      });

      $(".notes").text(inputNote);
    });

  });

  $('.add-landmark').on('click', function() {
    $('.new-landmarks').append("<div class='new-landmark'>" + "<input type='text' id='landmark' placeholder='Enter landmarks:' class='form-control'>" + "</div>");
  });



});
