---
layout: page
title: Apps
permalink: /apps/
description: Software I build, free to download.
nav: true
nav_order: 7
---

<!-- pages/apps.md -->

<style>
  /* al-folio styles a.btn only inside .links, so anything else falls back to
     raw Bootstrap and fights the theme, worst in dark mode. Everything here is
     built from the theme's own variables so light and dark both work without a
     second set of rules. */

  .apps { display: grid; grid-template-columns: 11rem 1fr; gap: 3rem; }
  @media (max-width: 768px) {
    .apps { grid-template-columns: 1fr; gap: 1.5rem; }
    .apps__nav { position: static !important; }
  }

  /* The sidebar's appearance is defined once in assets/css/main.scss, shared
     with the section list on the CV. Only the layout belongs here. */
  .apps__nav { position: sticky; top: 6rem; align-self: start; }
  .apps__nav ol { list-style: none; margin: 0; padding: 0; }

  .app + .app { margin-top: 5rem; }
  .app__name { font-size: 2rem; margin: 0 0 0.3rem; }
  .app__tagline {
    font-size: 1.1rem;
    color: var(--global-text-color-light);
    margin-bottom: 1.4rem;
  }

  /* The one thing a person came here to do, and the only element on the page
     given an accent or a background. */
  .app__get {
    border-left: 3px solid var(--global-theme-color);
    background: var(--global-card-bg-color);
    padding: 1.4rem 1.6rem;
    margin: 2rem 0 1rem;
  }
  .app__download {
    display: inline-block;
    padding: 0.55rem 1.5rem;
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    border-radius: 3px;
    font-weight: 600;
    text-decoration: none;
  }
  .app__download:hover { color: var(--global-bg-color); text-decoration: none; opacity: 0.85; }
  .app__download:focus-visible { outline: 2px solid var(--global-text-color); outline-offset: 3px; }
  .app__size { margin-left: 0.9rem; color: var(--global-text-color-light); font-size: 0.9rem; }
  .app__facts { list-style: none; padding: 0; margin: 1.1rem 0 0; font-size: 0.9rem; color: var(--global-text-color-light); }
  .app__facts li { margin-bottom: 0.2rem; }

  .app__elsewhere { font-size: 0.9rem; color: var(--global-text-color-light); margin-bottom: 3rem; }
  .app__elsewhere b { color: var(--global-text-color); font-weight: 600; }
  .app__elsewhere p { margin-bottom: 0.3rem; }

  /* Section headings sit well below the app name in the hierarchy, so they are
     set as quiet rules rather than as more large bold type competing with it. */
  .app__section {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--global-text-color);
    border-top: 1px solid var(--global-divider-color);
    padding-top: 1.5rem;
    margin: 3rem 0 1.5rem;
  }

  .app__does { column-count: 2; column-gap: 2.5rem; }
  @media (max-width: 768px) { .app__does { column-count: 1; } }
  .app__does > div { break-inside: avoid; margin-bottom: 1.6rem; }
  .app__does h4 { font-size: 1rem; font-weight: 600; margin: 0 0 0.3rem; }
  .app__does p { color: var(--global-text-color-light); margin: 0; font-size: 0.95rem; }

  .app__release { display: grid; grid-template-columns: 8rem 1fr; gap: 0 1.5rem; }
  .app__release + .app__release { margin-top: 1.5rem; }
  @media (max-width: 576px) { .app__release { grid-template-columns: 1fr; gap: 0.3rem; } }
  .app__version { font-weight: 600; }
  .app__date { color: var(--global-text-color-light); font-size: 0.85rem; }
  .app__notes { color: var(--global-text-color-light); margin: 0; font-size: 0.95rem; }
</style>

<div class="apps">

<nav class="apps__nav" aria-label="Applications">
  <ol>
    {% for app in site.data.apps.apps %}
    <li><a href="#{{ app.id }}" class="{% if forloop.first %}is-here{% endif %}">{{ app.name }}</a></li>
    {% endfor %}
  </ol>
</nav>

<div>
{% for app in site.data.apps.apps %}
{% assign latest = app.history | first %}
{% assign filename = app.file | replace: '{version}', latest.version %}

<section class="app" id="{{ app.id }}">
  <h2 class="app__name">{{ app.name }}</h2>
  <p class="app__tagline">{{ app.tagline }}</p>

  <p>{{ app.about }}</p>
  <p>{{ app.privacy }}</p>

  <div class="app__get">
    <a class="app__download" href="{{ app.releases }}/download/v{{ latest.version }}/{{ filename }}">
      Download for {{ app.download_for }}
    </a>
    <span class="app__size">{{ app.size }}, version {{ latest.version }}</span>
    <ul class="app__facts">
      {% for fact in app.facts %}<li>{{ fact }}</li>{% endfor %}
      <li>{{ app.requires }}.</li>
    </ul>
  </div>

  <div class="app__elsewhere">
    {% for item in app.coming %}
    <p><b>{{ item.name }}:</b> {{ item.when }}</p>
    {% endfor %}
  </div>

  <h3 class="app__section">What it does</h3>
  <div class="app__does">
    {% for feature in app.features %}
    <div>
      <h4>{{ feature.name }}</h4>
      <p>{{ feature.text }}</p>
    </div>
    {% endfor %}
  </div>

  <h3 class="app__section">Releases</h3>
  {% for release in app.history %}
  <div class="app__release">
    <div>
      <div class="app__version">{{ release.version }}</div>
      <div class="app__date">{{ release.date }}</div>
    </div>
    <p class="app__notes">{{ release.notes }}</p>
  </div>
  {% endfor %}

  <h3 class="app__section">Licence</h3>
  <p>
    Free to use, for personal and commercial work alike. The licence ships with
    the application and can be read from its Help menu, along with the notices
    for the open-source components it is built from.
  </p>
</section>
{% endfor %}
</div>
</div>
