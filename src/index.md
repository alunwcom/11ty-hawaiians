---
layout: disco.liquid
pageTitle: Welcome to my blog
---
{% for post in collections.posts %}
  {% include post with post %}
{% endfor %}