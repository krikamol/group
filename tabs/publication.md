---
layout: page
title: Publication
permalink: /pubs/
---

{% assign publications = site.publications | sort: "year" | reverse %}
{% for pub in publications %}
  <div class="pubitem">
    <div class="pubtitle">{{ pub.title }}</div>
    <div class="pubauthors">{{ pub.authors }}</div>
    <div class="pubinfo">{<em>{ pub.publication}</em>}, {{ pub.year}}</div>
  </div>
  <br>
{% endfor %}
