---
---

var layer = new L.StamenTileLayer("watercolor");
var map = new L.Map("mapid", {
    center: new L.LatLng(56.05, -6.21),
    zoom: 11});
map.addLayer(layer);
{%- for place in site.places -%}
var {{ place.title | slugify | remove: "4" | remove: "-" }} = L.marker([{{ place.coord }}]).addTo(map);
{{ place.title | slugify | remove: "4" | remove: "-" }}.bindPopup("<p>{{ place.title }} <br /><a href='#{{ place.title | slugify | remove: "-" }}'>Click for details</a></p>");{% endfor %}