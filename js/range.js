$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 700,
    values: [ 100, 500 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "Цена:"+ ui.values[ 0 ] + "руб. - " + ui.values[ 1 ] + " руб.");
    }
  });
  $( "#amount" ).val( "Цена:"+ $( "#slider-range" ).slider( "values", 0 ) + "руб. - " + $( "#slider-range" ).slider( "values", 1 )+" руб.");
} );