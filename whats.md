---
title: What's On
category: Things To Do
redirect-from: things-do/whats.html
---

{% for post in site.posts reversed %}
### {{ post.date | date_to_long_string }} - {{ post.time }}
{{ post.title }} {{ post.place }}
{{ post.content }}
{% endfor %}