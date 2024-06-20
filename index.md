---
layout: home
list_title: Latest News
image_sliders:
  - slider1
  - slider2
  - slider3
---
<h2>About Us</h2>

{% include slider.html selector="slider1" %}


The Rational Intelligence (RI) Lab is dedicated to understanding the underlying principles that enable autonomous agents to acquire knowledge effectively from their experiences. Our primary objective is to utilize this understanding in designing novel machine learning (ML) algorithms capable of engaging in rational interactions with complex environments.

Our research endeavors encompass the following focal areas:

1. <span style="color:#e6701b">**Prediction**</span>: We aim to develop ML algorithms that demonstrate resilience in the face of distribution shifts. Our focus lies in domain adaptation (DA), domain generalization (DG), out-of-distribution (OOD) generalization, and robustness. To tackle these challenges, we employ kernel methods, with particular emphasis on the kernel mean embedding of distributions, as a robust mathematical framework. 

2. <span style="color:#73b06f">**Causation**</span>: Our research investigates the utilization of causal relationships to enhance ML models. Furthermore, we explore the application of sophisticated ML algorithms to aid in causal inference within complex environments. Topics of interest include unobserved confounders in causal inference, spurious correlation in machine learning, distributional treatment effects, counterfactual inference, and algorithmic decision-making. We leverage modern quasi-experimental designs, such as instrumental variables (IV), proxy variables, and regression discontinuity design (RDD), as valuable tools for addressing these issues.

3. <span style="color:#007090">**Regulation**</span>: We focus on the regulation of ML model deployment in the real world to ensure generalizability, equity, trustworthiness, and democracy. Additionally, we investigate how emerging challenges, including feedback loops, strategic manipulations, and adversarial attacks, fundamentally impact the training of ML models. To gain deeper insights into these problems, we incorporate techniques from algorithmic game theory, mechanism design, social choice theory, and other relevant sub-fields of economics.

We envision that the advancement of next-generation machine learning models, distinguished by their reliability, trustworthiness, safety, and security, calls for collaborative efforts involving diverse stakeholders. These stakeholders encompass not only individual citizens and governments but also intergovernmental organizations. Our array of technical solutions, functioning at different levels of granularity, strive to pave the path toward the democratization of artificial intelligence (AI).

For further information about our research, please read our [manifesto]({{ '/manifesto/' | relative_url }}), visit our [publication page]({{ '/pubs/' | relative_url }}), or explore our [Github repository](https://github.com/muandet-lab).

<br>

{:style="text-align:center;"}
![CISPA](/assets/img/cispa_logo.png){: width="25%"}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Helmholtz](/assets/img/helmholtz_logo.png){: width="30%"}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![ELLIS](/assets/img/ellis_logo.png){: width="15%"}  

Our group is currently affiliated with the [CISPA--Helmholtz Center for Information Security](https://cispa.de/en){:target="_blank"} in Saarbrücken, Germany and the [ELLIS Unit Saarbrücken](https://ellis.eu/units/saarbrucken){:target="_blank"}. The [Helmholtz Association](https://www.helmholtz.de/en/){:target="_blank"} is a union of 18 scientific-technical and biological-medical research centers, making it the largest scientific organisation in Germany.

<br>

  {% if site.paginate %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts %}
  {% endif %}

  {%- if posts.size > 0 -%}
    {%- if page.list_title -%}
      <h2>{{ page.list_title }}</h2>
    {%- endif -%}
    <ul>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {%- for post in posts limit: 10-%}
      <li>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
          <a href="{{ post.url | relative_url }}">
            {{ post.title }}
          </a>
      </li>
      {%- endfor -%}
    </ul>
    {%- endif %}
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