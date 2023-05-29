---
layout: page
title: Publication
permalink: /pubs/
---

Some prior publications can be found at [https://www.krikamol.org/publication/](https://www.krikamol.org/publication/){:target="_blank"}.

<br>

{% assign publications = site.publications | sort: "year" | reverse %}
{% for pub in publications %}
  <div class="pubitem">
    <div class="pubtitle">{{ pub.title }}</div>
    <div class="pubauthors">{{ pub.authors }}</div>
  <div class="pubinfo">{{ pub.venue }}, {{ pub.year }}</div>
  </div>
  <br>
{% endfor %}
