---
layout: page
permalink: /team/
title: Team
description: Members of the RI Lab
nav: true
nav_order: 2
---

<style>
/* Default styles */
.group-members {
  display: flex;
  flex-wrap: wrap;
}

.member {
  width: 30%;
  margin-bottom: 30px;
  text-align: center;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 15px;
}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .member {
    width: 100%;
  }
}
</style>

<br>

{% comment %}
  A current member with an end_date (YYYY-MM-DD) in the past is shown as alumnus.
  The scheduled deploy rebuilds the site so this takes effect without a commit.
{% endcomment %}
{% assign today = site.time | date: "%Y-%m-%d" %}

<div class="group-members">
  {% assign members = site.data.members | where: "status", "current" %}
  {% for member in members %}
    {% if member.end_date %}
      {% assign end_date = member.end_date | date: "%Y-%m-%d" %}
      {% if end_date < today %}{% continue %}{% endif %}
    {% endif %}
    <div class="member">
      <div class="profile-pic">
        <img src="{{ member.image_path }}" alt="{{ member.first }}" class="circle-image">
      </div>
      <div class="member-info">
        <h4>
        {%- if member.website -%}
        <a href="{{ member.website }}" target="_blank">
        {%- endif -%}
        {{ member.first }} {{ member.last }}
        {%- if member.website -%}
        </a>
        {%- endif -%}
        </h4>
        <p>{{ member.position }}</p>
      </div>
    </div>
  {% endfor %}
</div>

<h3>Alumni</h3>
  {% comment %}
    Alumni are grouped: postdocs, PhD students, visitors, interns, master's students,
    bachelor's students, research assistants, then anyone else, each in file order.
  {% endcomment %}
  {% assign alumni_groups = "postdoc,phd,visiting,intern,master,bachelor,assistant,other" | split: "," %}
  <ul>
    {% for group in alumni_groups %}
    {% for entry in site.data.members %}
      {% assign member = entry[1] %}
      {% assign expired = false %}
      {% if member.status == "current" and member.end_date %}
        {% assign end_date = member.end_date | date: "%Y-%m-%d" %}
        {% if end_date < today %}{% assign expired = true %}{% endif %}
      {% endif %}
      {% unless member.status == "alumnus" or expired %}{% continue %}{% endunless %}
      {% assign position = member.position | downcase | strip %}
      {% assign member_group = "other" %}
      {% if position contains "visiting" %}
        {% assign member_group = "visiting" %}
      {% elsif position contains "postdoc" %}
        {% assign member_group = "postdoc" %}
      {% elsif position contains "phd" %}
        {% assign member_group = "phd" %}
      {% elsif position contains "intern" %}
        {% assign member_group = "intern" %}
      {% elsif position contains "master" %}
        {% assign member_group = "master" %}
      {% elsif position contains "bachelor" or position contains "undergraduate" %}
        {% assign member_group = "bachelor" %}
      {% elsif position contains "assistant" %}
        {% assign member_group = "assistant" %}
      {% endif %}
      {% if member_group != group %}{% continue %}{% endif %}
      <li>
	{%- if member.website -%}
	  <a href="{{ member.website }}" target="_blank">
	{%- endif -%}
	{{ member.first }} {{ member.last }}  
      	{%- if member.website -%}
	  </a>
        {%- endif -%}
        &nbsp;
	({{ member.position }})
		{% if member.position_now or member.now_at %}
			{% if member.position_now and member.now_at %}
	      			&mdash; <i><b>Now</b> {{ member.position_now }} at {{ member.now_at }}</i>
	      		{%- elsif member.position_now -%}
	      			&mdash; <i><b>Now</b> {{ member.position_now }}</i>
	      		{%- elsif member.now_at -%}
	      			&mdash; <i><b>Now</b> at {{ member.now_at }}</i>
	      		{%- endif -%}
		{%- endif -%}
      </li>
    {% endfor%}
    {% endfor %}
  </ul>
