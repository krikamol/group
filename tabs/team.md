---
layout: page
title: Team
permalink: /team/
---

<style>
/* Default styles */
.group-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
	
<div class="group-members">
  {% assign members = site.data.members | where: "status", "current" %}
  {% for member in members %}
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
  {% assign members = site.data.members | where: "status", "alumnus" %}
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
