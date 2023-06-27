---
layout: page
title: Publication
permalink: /pubs/
---

<style>
.pubitem {
  margin: 0 em 0;
  line-height: 1em;
}

.pubtitle {
  margin-bottom: 0.5em;
  line-height: 1.2em;
  font-weight: bold;
}

.pubauthors,
.pubinfo {
  font-size: 75%;
  margin-bottom: 0.75em;
}
</style>

This page lists publications that appeared after September 2022. Prior publications can be found at [https://www.krikamol.org/publication/](https://www.krikamol.org/publication/){:target="_blank"}.

<br>


{% assign publications = site.publications | sort: "year" | reverse %}

{% for pub in publications %}
  <div class="pubitem">
    <div class="pubtitle">
      {{ pub.title }}
    </div>
    <div class="pubauthors">{{ pub.authors }}</div>
    <div class="pubinfo">{{ pub.venue }}, {{ pub.year }}</div>
    
    <div class="publinks">
      {% if pub.pdf %}
        <a href="{{ pub.pdf }}">
          <span class="border">PDF</span>
        </a>
      {% endif %}
      {% if pub.code %}
        <a href="{{ pub.code }}">
          <span class="border">Code</span>
        </a>
      {% endif %}
      {% if pub.video %}
        <a href="{{ pub.video }}">
          <span class="border">Video</span>
        </a>
      {% endif %}
      {% if pub.poster %}
        <a href="{{ pub.poster }}">
          <span class="border">Poster</span>
        </a>
      {% endif %}
    </div>
  </div>
  <br>
{% endfor %}
