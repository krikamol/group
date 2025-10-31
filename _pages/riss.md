---
layout: page
title: RISS
header_title: Rational Intelligence Seminar Series (RISS)
nav: true
nav_order: 4
permalink: /riss/
description: The Rational Intelligence Seminar Series (RISS), seeks to advance the understanding of rationality, efficiency and reliability in machine learning systems. These seminars serve as a forum for discussions and quick dissemination of results. 
horizontal: false
---
<style>
  .riss-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

html[data-theme='light'] {
  --riss-card-bg: #f9f9f9;
}

html[data-theme='dark'] {
  --riss-card-bg: #1e1e1e;
}
html[data-theme='light'] {
  --riss-talk-bg: #f9f9f9;
}

html[data-theme='dark'] {
  --riss-talk-bg: #1e1e1e;
}
/* Then use the variable in your component */
.riss-card {
  background-color: var(--riss-card-bg);
  display: flex;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  padding: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.riss-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
  margin-right: 1.5rem;
}

.riss-details {
  flex: 1;
}

.riss-details h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.riss-details p {
  margin: 0.25rem 0;
  font-size: 1rem;
}

.riss-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.8rem;
  font-weight: 500;
}

.riss-button:hover {
  background-color: #0056b3;
}
</style>
Check out previous talks on our <a href="https://www.youtube.com/@ri-seminar">Youtube Channel</a>!
<div class="riss-list">
  {% assign sorted_talks = site.riss | sort: "sort_key" | reverse %}
  {% for talk in sorted_talks %}
  <div class="riss-card">
    <div class="riss-image">
      <img src="{{ talk.image | relative_url }}" alt="{{ talk.speaker_name }}">
    </div>
    <div class="riss-details">
      <h2>{{ talk.title }}</h2>
      <p><strong>{{ talk.speaker_name }}</strong> – {{ talk.speaker_title }}</p>
      <p><i class="fa fa-calendar"></i> {{ talk.date_in_string }} at {{talk.time_in_string}}</p>
      <p><i class="fa fa-map-marker"></i> {{ talk.location }}</p>
      <a href="{{ talk.url | relative_url }}" class="riss-button">More Info</a>
    </div>
  </div>
  {% endfor %}
</div>

