---
layout: page
title: Apps
permalink: /apps/
description: Software I build, free to download.
nav: true
nav_order: 7
toc:
  sidebar: left
---

<!-- pages/apps.md -->

<style>
  /* al-folio styles a.btn only inside .links, so anything else falls back to
     raw Bootstrap and fights the theme — worst in dark mode. Everything here
     is built from the theme's own variables so it follows light and dark
     without a second set of rules. */
  .app__tagline + * { margin-top: 0; }
  h2 { margin-top: 3rem; }
  h2:first-of-type { margin-top: 0; }
  .app__tagline {
    font-size: 1.15rem;
    color: var(--global-text-color-light);
    margin-bottom: 1.5rem;
  }

  /* The one thing on this page a person came to do. It is the only element
     given an accent, a background, or any weight at all. */
  .app__get {
    border-left: 3px solid var(--global-theme-color);
    background: var(--global-card-bg-color);
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
  }
  .app__download {
    display: inline-block;
    padding: 0.5rem 1.4rem;
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    border-radius: 3px;
    font-weight: 600;
    text-decoration: none;
  }
  .app__download:hover {
    color: var(--global-bg-color);
    text-decoration: none;
    opacity: 0.85;
  }
  .app__download:focus-visible {
    outline: 2px solid var(--global-text-color);
    outline-offset: 2px;
  }
  .app__size {
    margin-left: 0.85rem;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
  }
  .app__facts {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    font-size: 0.9rem;
    color: var(--global-text-color-light);
  }
  .app__facts li { margin-bottom: 0.25rem; }

  /* Platforms that do not exist yet. Stated once, quietly — three empty cards
     would spend most of the page advertising absence. */
  .app__coming {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    border-top: 1px solid var(--global-divider-color);
    padding-top: 1rem;
  }
  .app__coming b { color: var(--global-text-color); font-weight: 600; }
  .app__coming p { margin-bottom: 0.4rem; }

  .app__does { margin: 0; }
  .app__does dt {
    font-weight: 600;
    color: var(--global-text-color);
    margin-top: 0.9rem;
  }
  .app__does dd {
    margin: 0.15rem 0 0;
    color: var(--global-text-color-light);
  }

  .app__release {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: 0 1rem;
    padding: 0.9rem 0;
    border-top: 1px solid var(--global-divider-color);
  }
  .app__release:last-child { border-bottom: 1px solid var(--global-divider-color); }
  .app__version { font-weight: 600; color: var(--global-text-color); }
  .app__date { color: var(--global-text-color-light); font-size: 0.85rem; }
  .app__notes { color: var(--global-text-color-light); margin: 0; }

  @media (max-width: 576px) {
    .app__release { grid-template-columns: 1fr; gap: 0.3rem; }
  }
</style>

{% for app in site.data.apps.apps %}
{% assign latest = app.history | first %}
{% assign filename = app.file | replace: '{version}', latest.version %}

## {{ app.name }}

<p class="app__tagline">{{ app.tagline }}</p>

{{ app.about }}

{{ app.privacy }}

<div class="app__get">
  <a class="app__download"
     href="{{ app.releases }}/download/v{{ latest.version }}/{{ filename }}">
    Download for {{ app.download_for }}
  </a>
  <span class="app__size">{{ app.size }}, version {{ latest.version }}</span>
  <ul class="app__facts">
    {% for fact in app.facts %}<li>{{ fact }}</li>{% endfor %}
    <li>{{ app.requires }}.</li>
  </ul>
</div>

<div class="app__coming">
  {% for item in app.coming %}
  <p><b>{{ item.name }}</b> — {{ item.when }}</p>
  {% endfor %}
</div>

### What it does

<dl class="app__does">
  {% for feature in app.features %}
  <dt>{{ feature.name }}</dt>
  <dd>{{ feature.text }}</dd>
  {% endfor %}
</dl>

### Releases

{% for release in app.history %}
<div class="app__release">
  <div>
    <div class="app__version">{{ release.version }}</div>
    <div class="app__date">{{ release.date }}</div>
  </div>
  <p class="app__notes">{{ release.notes }}</p>
</div>
{% endfor %}

### Licence

Free to use, for personal and commercial work alike. The licence ships with
the application and can be read from its Help menu, along with the notices for
the open-source components it is built from.

{% endfor %}
