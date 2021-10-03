const targetLatLng = new kakao.maps.LatLng(35.825237470682744, 129.29089412186622)
const mapContainer = document.getElementById('map')
const mapOption = { center: targetLatLng, level: 4 }
const map = new kakao.maps.Map(mapContainer, mapOption)
const markerPosition = targetLatLng;
const marker = new kakao.maps.Marker({ position: markerPosition });
marker.setMap(map);
