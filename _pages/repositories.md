---
layout: page
title: Repositories
permalink: /repositories/
description: Code, datasets, and tools.
nav: true
nav_order: 4
---

<!-- pages/repositories.md -->

<style>
  /* These were name-only pills in a three-column grid: no description, no
     language, ragged alignment, and two-thirds of the page empty. A list says
     the same thing in less space and leaves room for what each one is. */
  .repos { margin-top: 1.5rem; }
  .repos__owner {
    font-size: 0.95rem;
    font-weight: 600;
    border-top: 1px solid var(--global-divider-color);
    padding-top: 1.2rem;
    margin: 2.5rem 0 0.5rem;
  }
  .repos__owner:first-of-type { margin-top: 0; }
  .repos__row {
    display: grid;
    grid-template-columns: 18rem 1fr;
    gap: 0 2rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--global-divider-color);
    align-items: baseline;
  }
  @media (max-width: 768px) { .repos__row { grid-template-columns: 1fr; gap: 0.2rem; } }
  .repos__name { font-weight: 600; }
  .repos__name a { color: var(--global-text-color); }
  .repos__name a:hover { color: var(--global-theme-color); text-decoration: none; }
  .repos__what { color: var(--global-text-color-light); margin: 0; }
</style>

<div class="repos">
{% assign owners = site.data.repositories.github_repos | map: 'first' %}
{% assign all = site.data.repositories.github_repos %}

{% assign mine = '' | split: '' %}
{% assign theirs = '' | split: '' %}
{% for r in all %}
  {% assign parts = r | split: '/' %}
  {% if site.data.repositories.github_users contains parts[0] %}
    {% assign mine = mine | push: r %}
  {% else %}
    {% assign theirs = theirs | push: r %}
  {% endif %}
{% endfor %}

<h2 class="repos__owner">Mine</h2>
{% for r in mine %}
  {% assign parts = r | split: '/' %}
<div class="repos__row">
  <div class="repos__name"><a href="https://github.com/{{ r }}" rel="noopener">{{ parts[1] }}</a></div>
  <p class="repos__what">{{ site.data.repositories.descriptions[r] }}</p>
</div>
{% endfor %}

{% if theirs.size > 0 %}
<h2 class="repos__owner">Contributed to</h2>
{% for r in theirs %}
  {% assign parts = r | split: '/' %}
<div class="repos__row">
  <div class="repos__name"><a href="https://github.com/{{ r }}" rel="noopener">{{ parts[0] }}/{{ parts[1] }}</a></div>
  <p class="repos__what">{{ site.data.repositories.descriptions[r] }}</p>
</div>
{% endfor %}
{% endif %}
</div>
