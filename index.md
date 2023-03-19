---
layout: home
list_title: News
title: Welcome
---

The group’s research aims at understanding the principles that enable autonomous agents to learn from past experience and interact successfully with complex environments, and to use this understanding to design new learning algorithms. The research theme spans the following areas:

1. **Prediction**: How do we design ML algorithms that can cope with distributional shifts? 

2. **Causation**: How do we leverage cause-effect relationships in improving ML models, and conversely how do we use sophisticated ML methods to aid causal inference in complex environments? 

3. **Regulation**: How do we regulate the deployment of ML models in heterogeneous environments to ensure the democratic use of AI? 


  {% if site.paginate %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts %}
  {% endif %}


  {%- if posts.size > 0 -%}
    {%- if page.list_title -%}
      <h2 class="post-list-heading">{{ page.list_title }}</h2>
    {%- endif -%}
    <ul class="post-list">
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {%- for post in posts -%}
      <li>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h4>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h4>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>

    {% if site.paginate %}
      <div class="pager">
        <ul class="pagination">
        {%- if paginator.previous_page %}
          <li><a href="{{ paginator.previous_page_path | relative_url }}" class="previous-page">{{ paginator.previous_page }}</a></li>
        {%- else %}
          <li><div class="pager-edge">•</div></li>
        {%- endif %}
          <li><div class="current-page">{{ paginator.page }}</div></li>
        {%- if paginator.next_page %}
          <li><a href="{{ paginator.next_page_path | relative_url }}" class="next-page">{{ paginator.next_page }}</a></li>
        {%- else %}
          <li><div class="pager-edge">•</div></li>
        {%- endif %}
        </ul>
      </div>
    {%- endif %}

<h2>Group Members</h2>

{% assign members = site.data.members | where: "status", "active" %}
<ul>
  {% for member in members %}
    {% assign key = member[0] %}
      <li>
      {%- if members[key].website -%}
    	<a href="{{ members[key].website }}" target="_blank">
      {%- endif -%}
	{{ members[key].first }} {{ members[key].last }} ({{ members[key].position }})
      {%- if members[key].website -%}
        </a>
      {%- endif -%}	
      </li>
  {% endfor %}		
</ul>


<h3>Alumni</h3>
{% assign members = site.data.members | where: "status", "inactive" %}
<ul>
  {% for member in members %}
    {% assign key = member[0] %}
      <li>
      {%- if members[key].website -%}
    	<a href="{{ members[key].website }}" target="_blank">
      {%- endif -%}
	{{ members[key].first }} {{ members[key].last }} ({{ members[key].position }})
      {%- if members[key].website -%}
        </a>
      {%- endif -%}	
      </li>
  {% endfor %}		
</ul>

<h2>Selected Publications</h2>



