$(function(){
  $(".wrap_slider").slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed: 4000,
    speed: 800,
	});
});

function initMap() {
  var uluru = {lat: 56.143242, lng: 47.267252};
  var markerImg="img/map-marker.png";
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 15,
    center: uluru,
    disableDefaultUI: true,
    scrollwheel: false,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map:map,
});
}