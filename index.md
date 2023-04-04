---
layout: home
list_title: Latest News
---

Our group’s research aims at understanding the principles that enable autonomous agents to learn from past experience and interact successfully with complex environments, and to use this understanding to design new learning algorithms. The research focus spans the following areas:

1. <span style="color:#e6701b">**Prediction**</span>: *How do we design machine learning (ML) algorithms that are robust to distribution shifts?* The topics that we are interested in are domain adaption (DA), domain generalization (DG), out-of-distribution
(OOD) generalization, and robustness. Kernel methods, kernel mean embedding of distributions, and applications thereof are our mathematical arsenal to tackle these problems. 

2. <span style="color:#73b06f">**Causation**</span>: *How do we leverage cause-effect relationships in improving ML models, and conversely how do we use sophisticated ML methods to aid causal inference in complex environments?* We are currently interested in unobserved confounders in causal inference, spurious correlation in machine learning, distributional treatment effects, counterfactual inference, and algorithmic decision making. Quasi-experimental designs such as instrumental variable (IV), proxy variables, and regression discontinuity design (RDD) offers tools to address these problems.

3. <span style="color:#007090">**Regulation**</span>: *How do we regulate the deployment of ML models in heterogeneous environments to ensure generalizable, fair, trustworthy, and democratic AI?* Topics of interest are feedback loops and strategic behaviour. To gain a better understanding of these problems, we are adopting techniques from algorithmic game theory, mechanism design, social choice theory and other related sub-fields of economics.

Our group is part of [CISPA--Helmholtz Center for Information Security](https://cispa.de/en){:target="_blank"} in Saarbrücken, Germany and the [ELLIS Unit Saarbrücken](https://ellis.eu/units/saarbrucken){:target="_blank"}. The [Helmholtz Association](https://www.helmholtz.de/en/){:target="_blank"} is a union of 18 scientific-technical and biological-medical research centers, making it the largest scientific organisation in Germany.


{:style="text-align:center;"}
![CISPA](/assets/img/cispa_logo.png){: width="30%"}  &nbsp;&nbsp;&nbsp;&nbsp;
![Helmholtz](/assets/img/helmholtz_logo.png){: width="35%"}  &nbsp;&nbsp;&nbsp;
![ELLIS](/assets/img/ellis_logo.png){: width="20%"}  

<br>

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
        <h5>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h5>
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
  {%- endif %}


<h2>Group Members</h2>
  {% assign members = site.data.members %}
  <ul>
    {% for member in members %}
      {% assign key = member[0] %}
      <li>
	{%- if members[key].website -%}
	  <a href="{{ members[key].website }}" target="_blank">
	{%- endif -%}
	{{ members[key].first }} {{ members[key].last }}  
      	{%- if members[key].website -%}
	  </a>
        {%- endif -%}
        &nbsp;({{ members[key].position }})
      </li>
    {% endfor%}
  </ul>

<h2>Selected Publications</h2>
Stay tuned!

