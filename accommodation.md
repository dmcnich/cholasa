---
title: Accomodation
---

{% assign places = site.places | group_by: 'type' | sort: 'type' %}
{% for type in places %}
## {{ type.name }}
{% assign items = type.items %}
{% for place in items %}
<hr />
### [{{ place.title }}]({{ site.url }}{{ site.baseurl }}/places/{{ place.title }}) 
{: #{{ place.title | slugify | remove:"-" }}}
![{{ place.title }}]({{ site.url }}{{ site.baseurl }}/images/accomodation/{{ place.title | slugify }}.jpg)

**{{ place.accomodation }}**

{{ place.content }}

{% if place.link %}
<a href="{{ place.link }}">Visit {{ place.title }}'s website</a>
{% endif %}
{% endfor %}
{% endfor %}
