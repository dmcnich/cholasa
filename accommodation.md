---
title: Accomodation
---

<p>Colonsay offers a wide variety of options for accommodation. Browse the map, or find a full listing below.</p>
<div id="mapid" style="height:70vh;"></div>

{% assign places = site.places | group_by: 'type' | sort: 'type' %}
{% for type in places %}
## {{ type.name }}
{% assign items = type.items %}
{% for place in items %}
<hr />
### [{{ place.title }}]({{ site.baseurl }}/places/{{ place.title }}) 
{: #{{ place.title | slugify | remove:"-" }}}
![{{ place.title }}]({{ site.baseurl }}/uploads/{{ place.title | slugify }}.jpg)

**{{ place.accomodation }}**

{{ place.content }}

{% if place.link %}
<a href="{{ place.link }}">Visit {{ place.title }}'s website</a>
{% endif %}
{% endfor %}
{% endfor %}

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js" integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==" crossorigin=""></script>
<script type="text/javascript" src="https://stamen-maps.a.ssl.fastly.net/js/tile.stamen.js"></script>
<script>
    var layer = new L.StamenTileLayer("watercolor");
    var map = new L.Map("mapid", {
        center: new L.LatLng(56.05, -6.21),
        zoom: 11
    });
    map.addLayer(layer);
    {%- for place in site.places -%}
    var {{ place.title | slugify | remove: "4" | remove: "-" }} = L.marker([{{ place.coord }}]).addTo(map);
    {{ place.title | slugify | remove: "4" | remove: "-" }}.bindPopup("<p>{{ place.title }} <br /><a href='#{{ place.title | slugify | remove: "-" }}'>Click for details</a></p>");
    {% endfor %}
</script>