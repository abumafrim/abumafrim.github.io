---
layout: page
title: Projects
permalink: /projects/
description: Selected projects in African and low-resource language technology.
nav: true
nav_order: 3
display_categories: [Models and Systems, Datasets and Benchmarks, Community and Shared Tasks]
---

<!-- pages/projects.md -->

<style>
  /* These were image cards with no images. Every project here has an empty
     `img`, so the card reduced to a bare box with a title large enough to wrap
     onto three lines, and the grid left holes wherever a category had one or
     two entries. A list carries the same content without pretending there is
     artwork to frame. */

  .work__group { margin-bottom: 3rem; }
  .work__category {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--global-text-color);
    border-top: 1px solid var(--global-divider-color);
    padding-top: 1.2rem;
    margin-bottom: 0.3rem;
  }

  .work__item {
    display: grid;
    grid-template-columns: 15rem 1fr;
    gap: 0 2rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--global-divider-color);
    align-items: baseline;
  }
  .work__item:last-child { border-bottom: 0; }
  @media (max-width: 768px) {
    .work__item { grid-template-columns: 1fr; gap: 0.2rem; }
  }

  .work__name { font-weight: 600; font-size: 1.02rem; }
  .work__name a { color: var(--global-text-color); }
  .work__name a:hover { color: var(--global-theme-color); text-decoration: none; }
  .work__what { color: var(--global-text-color-light); margin: 0; }
</style>

{% assign sorted = site.projects | sort: "importance" %}

{% for category in page.display_categories %}
<div class="work__group">
  <h2 class="work__category">{{ category }}</h2>
  {% for project in sorted %}
    {% if project.category == category %}
  <div class="work__item">
    <div class="work__name"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></div>
    <p class="work__what">{{ project.description }}</p>
  </div>
    {% endif %}
  {% endfor %}
</div>
{% endfor %}
