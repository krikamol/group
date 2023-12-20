---
layout: page
title: Team
permalink: /team/
---

<div class="group-members">
  {% assign members = site.data.members | where: "status","current" %}
  {% for member in members %}
    <div class="member">
      <div class="profile-pic">
        <img src="{{ member.image_path }}" alt="{{ member.first }}" class="circle-image">
      </div>
      <div class="member-info">
        <h3>
        {%- if member.website -%}
        <a href="{{ member.website }}" target="_blank">
        {%- endif -%}
        {{ member.first }} {{ member.last }}
        {%- if member.website -%}
        </a>
        {%- endif -%}
        </h3>
        <p>{{ member.position }}</p>
      </div>
    </div>
  {% endfor %}
</div>


<h3>Alumni</h3>
  {% assign members = site.data.members | where: "status","alumnus" %}
  <ul>
    {% for member in members %}
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
  </ul>
