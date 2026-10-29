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

.riss-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.riss-zoom-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #0b5cff;
  color: white !important;
  text-decoration: none;
  padding: 0.5rem 1.1rem;
  border-radius: 0.5rem;
  margin-top: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(11, 92, 255, 0.35);
}

.riss-zoom-button:hover {
  background-color: #0948cc;
}

.riss-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0b5cff;
  border: 1px solid #0b5cff;
  border-radius: 999px;
  padding: 0.1rem 0.6rem;
  margin-bottom: 0.4rem;
}

.riss-past-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

@media (max-width: 991px) {
  .riss-past-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .riss-past-grid {
    grid-template-columns: 1fr;
  }
}

.riss-past-card {
  background-color: var(--riss-card-bg);
  border-radius: 0.8rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.riss-past-speaker {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.riss-past-speaker img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
}

.riss-past-speaker p {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.3;
}

.riss-past-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.riss-past-card .riss-past-meta {
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.8;
}

.riss-past-links {
  margin-top: auto;
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  font-weight: 500;
}

.riss-tba {
  width: 150px;
  height: 150px;
  margin-right: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  color: white;
  background: linear-gradient(135deg, #0b5cff 0%, #6a3de8 100%);
}

.riss-tba i {
  font-size: 2.2rem;
  opacity: 0.9;
}

.riss-tba span {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.riss-invite {
  margin: 0.5rem 0;
  opacity: 0.9;
}

.riss-propose-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #0b5cff !important;
  border: 1px solid #0b5cff;
  text-decoration: none;
  padding: 0.5rem 1.1rem;
  border-radius: 0.5rem;
  margin-top: 0.8rem;
  font-weight: 500;
}

.riss-propose-button:hover {
  background-color: rgba(11, 92, 255, 0.08);
}

.riss-section-title {
  margin-top: 3rem;
}

.riss-videos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0 2rem;
}

.riss-video-frame {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.riss-video-frame iframe,
.riss-video-play {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.riss-video-play {
  padding: 0;
  background: #000;
  cursor: pointer;
}

.riss-video-play img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.riss-video-play svg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68px;
  height: 48px;
  transform: translate(-50%, -50%);
}

.riss-video-play .riss-play-bg {
  fill: #212121;
  fill-opacity: 0.8;
  transition: fill 0.15s, fill-opacity 0.15s;
}

.riss-video-play:hover .riss-play-bg,
.riss-video-play:focus-visible .riss-play-bg {
  fill: #f00;
  fill-opacity: 1;
}

.riss-video p {
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
}
</style>
{% comment %}
  Talks dated today or later are upcoming and get a prominent Zoom button.
  The Zoom link comes from zoom_url, a Zoom link inside location, or the default
  RISS room in _config.yml. Without an upcoming talk, a "to be announced" card
  invites people to propose a talk. Past talks are a compact grid without Zoom.
{% endcomment %}
{% assign today = site.time | date: "%Y-%m-%d" %}
{% assign sorted_talks = site.riss | sort: "sort_key" | reverse %}
{% assign upcoming_talks = sorted_talks | where_exp: "talk", "talk.sort_key >= today" | reverse %}
{% assign past_talks = sorted_talks | where_exp: "talk", "talk.sort_key < today" %}
{% assign riss_email = site.riss_seminar.email %}

<h2 class="riss-section-title">Upcoming Talks</h2>
<div class="riss-list">
  {% for talk in upcoming_talks %}
  {% assign zoom_url = talk.zoom_url %}
  {% if zoom_url == nil and talk.location contains "zoom" %}
    {% assign zoom_url = talk.location | split: 'href="' | last | split: '"' | first %}
  {% endif %}
  {% assign zoom_url = zoom_url | default: site.riss_seminar.zoom_url %}
  <div class="riss-card">
    <div class="riss-image">
      <img src="{{ talk.image | relative_url }}" alt="{{ talk.speaker_name }}">
    </div>
    <div class="riss-details">
      <span class="riss-badge">Upcoming</span>
      <h2>{{ talk.title }}</h2>
      <p><strong>{{ talk.speaker_name }}</strong> – {{ talk.speaker_title }}</p>
      <p><i class="fa fa-calendar"></i> {{ talk.date_in_string }} at {{talk.time_in_string}}</p>
      {% if talk.location == nil or talk.location contains "zoom" %}
      <p><i class="fa fa-map-marker"></i> {{ site.riss_seminar.location }} and online via Zoom</p>
      {% else %}
      <p><i class="fa fa-map-marker"></i> {{ talk.location }}</p>
      {% endif %}
      <div class="riss-actions">
        {% if zoom_url %}
        <a href="{{ zoom_url }}" class="riss-zoom-button" target="_blank"><i class="fa-solid fa-video"></i> Join on Zoom</a>
        {% endif %}
        <a href="{{ talk.url | relative_url }}" class="riss-button">More Info</a>
      </div>
    </div>
  </div>
  {% else %}
  <div class="riss-card">
    <div class="riss-tba" aria-hidden="true">
      <i class="fa-solid fa-microphone"></i>
      <span>TBA</span>
    </div>
    <div class="riss-details">
      <span class="riss-badge">Next talk</span>
      <h2>Next speaker to be announced</h2>
      <p class="riss-invite">
        RISS brings together researchers working on rationality, efficiency and reliability in machine learning,
        from uncertainty quantification and decision-making to evaluation and human–AI collaboration.
        If your work would be of interest to the RISS audience, we would love to hear from you at
        <a href="mailto:{{ riss_email }}">{{ riss_email }}</a>.
      </p>
      <p><i class="fa fa-map-marker"></i> {{ site.riss_seminar.location }} and online via Zoom</p>
      <div class="riss-actions">
        {% if site.riss_seminar.zoom_url %}
        <a href="{{ site.riss_seminar.zoom_url }}" class="riss-propose-button" target="_blank"><i class="fa-solid fa-video"></i> Zoom link</a>
        {% endif %}
        <a href="mailto:{{ riss_email }}?subject=RISS%20talk%20proposal" class="riss-propose-button"><i class="fa-solid fa-envelope"></i> Propose a talk</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

{% if past_talks.size > 0 %}
<h2 class="riss-section-title">Past Talks</h2>
<div class="riss-past-grid">
  {% for talk in past_talks %}
  <div class="riss-past-card">
    <div class="riss-past-speaker">
      <img src="{{ talk.image | relative_url }}" alt="{{ talk.speaker_name }}">
      <p><strong>{{ talk.speaker_name }}</strong><br>{{ talk.speaker_title }}</p>
    </div>
    <h3>{{ talk.title }}</h3>
    <p class="riss-past-meta"><i class="fa fa-calendar"></i> {{ talk.date_in_string }}</p>
    <div class="riss-past-links">
      <a href="{{ talk.url | relative_url }}">More Info</a>
      {% if talk.location contains "youtube" %}
      <a href="{{ talk.location | split: 'href="' | last | split: '"' | first }}" target="_blank"><i class="fa-brands fa-youtube"></i> Recording</a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

<h2 class="riss-section-title">Check recent talks on <a href="https://www.youtube.com/@ri-seminar" target="_blank">RISS channel</a></h2>
{% assign recent_videos = site.data.youtube.riss | slice: 0, 3 %}
{% if recent_videos.size > 0 %}
<div class="riss-videos">
  {% for video in recent_videos %}
  <div class="riss-video">
    <div class="riss-video-frame">
      <button type="button" class="riss-video-play" data-video-id="{{ video.id }}" data-video-title="{{ video.title | escape }}" aria-label="Play {{ video.title | escape }}">
        <img src="https://i.ytimg.com/vi/{{ video.id }}/maxresdefault.jpg" alt="" loading="lazy">
        <svg viewBox="0 0 68 48" aria-hidden="true"><path class="riss-play-bg" d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1C.1 13 0 24 0 24s.1 11 1.5 16.3c.8 2.9 2.5 5.4 5.4 6.2C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.5c2.9-.8 4.6-3.3 5.4-6.2C67.9 35 68 24 68 24s-.1-11-1.5-16.3z"/><path d="M45 24 27 14v20" fill="#fff"/></svg>
      </button>
    </div>
    <p>{{ video.title }}</p>
  </div>
  {% endfor %}
</div>
<script>
  // Show the HD thumbnail and only load the YouTube player when it is clicked.
  document.querySelectorAll(".riss-video-play").forEach((button) => {
    const img = button.querySelector("img");
    const useFallback = () => {
      img.src = `https://i.ytimg.com/vi/${button.dataset.videoId}/hqdefault.jpg`;
    };
    // YouTube serves a 120px placeholder when a video has no HD thumbnail.
    img.addEventListener("load", () => {
      if (img.naturalWidth <= 120 && !img.src.includes("hqdefault")) useFallback();
    });
    img.addEventListener("error", useFallback, { once: true });
    if (img.complete && img.naturalWidth > 0 && img.naturalWidth <= 120) useFallback();

    button.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${button.dataset.videoId}?autoplay=1`;
      iframe.title = button.dataset.videoTitle;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      button.replaceWith(iframe);
    });
  });
</script>
{% endif %}
