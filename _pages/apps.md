---
layout: page
title: Apps
permalink: /apps/
description: Software I build and maintain, free to download.
nav: true
nav_order: 7
---

<!-- pages/apps.md -->

<style>
  /* al-folio styles `a.btn` only inside `.links`, so buttons elsewhere fall
     back to raw Bootstrap and clash with the theme — including in dark mode.
     These use the theme's own variables, so they follow it. */
  .app-btn {
    display: inline-block;
    padding: 0.35rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--global-theme-color);
    color: var(--global-theme-color);
    background: transparent;
    text-decoration: none;
    font-size: 0.9rem;
  }
  .app-btn:hover {
    color: var(--global-bg-color);
    background: var(--global-theme-color);
    text-decoration: none;
  }
  .app-btn--filled {
    color: var(--global-bg-color);
    background: var(--global-theme-color);
  }
  .app-btn--filled:hover {
    opacity: 0.85;
    color: var(--global-bg-color);
  }
  .app-btn--off {
    border-color: var(--global-divider-color);
    color: var(--global-divider-color);
    cursor: default;
  }
  .app-btn--off:hover {
    background: transparent;
    color: var(--global-divider-color);
  }
  .app-release {
    border-left: 2px solid var(--global-divider-color);
    padding-left: 1rem;
    margin-bottom: 1.5rem;
  }
  .app-release h4 {
    margin-bottom: 0.2rem;
  }
  .app-release .date {
    color: var(--global-text-color-light);
    font-size: 0.85rem;
  }
</style>

## MafrimDocs

A PDF viewer, editor and annotator that works without a network.

Read, annotate, fill in forms, run text recognition on scans, reorganise
pages, encrypt, and sign with a certificate — all on your own machine. It has
no account, no telemetry and no analytics, and your documents are never sent
anywhere.

It reaches the network only when you ask it to, and only for three things:
downloading a language for text recognition, requesting a trusted timestamp
when you sign a document, and checking whether a newer version exists. None of
those sends a document.

<div class="row row-cols-1 row-cols-md-2 mt-4">
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">macOS</h5>
        <p class="card-text">
          Apple Silicon and Intel in one download. macOS 10.15 or later.
          Signed and notarized, so it opens without a warning.
        </p>
        <a class="app-btn app-btn--filled"
           href="https://github.com/abumafrim/mafrimdocs-releases/releases/latest"
           rel="noopener">Download</a>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Windows and Linux</h5>
        <p class="card-text">
          Not released yet. The application is built on a toolkit that targets
          both, so these are a matter of packaging rather than rewriting.
        </p>
        <span class="app-btn app-btn--off">Not yet</span>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">iPhone and iPad</h5>
        <p class="card-text">
          In development, from the same codebase as the desktop application.
        </p>
        <span class="app-btn app-btn--off">In development</span>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Android</h5>
        <p class="card-text">
          In development, from the same codebase as the desktop application.
        </p>
        <span class="app-btn app-btn--off">In development</span>
      </div>
    </div>
  </div>
</div>

### What it does

- **Read and annotate** — highlight, comment, draw, and reply to comments.
  Annotations are written as real PDF annotations, so Adobe and Preview show
  them properly.
- **Forms** — fill them in, and choose whether to finish a form or pass it on
  still fillable.
- **Text recognition** — read the text in a scan, in any of 38 languages.
  Languages download once, then work offline.
- **Pages** — reorder, rotate, delete, merge, split, and insert pages from
  other files.
- **Signing** — sign with a certificate, optionally with a trusted timestamp so
  the date does not rest on your own computer's clock. Signing adds to a
  document rather than replacing it, so an earlier signature stays valid.
- **Encryption** — AES-256, with the permissions actually applied.

### Releases

{% assign app = site.data.mafrimdocs %}
{% for release in app.releases %}

<div class="app-release">
  <h4>{{ release.version }}</h4>
  <p class="date">{{ release.date }}</p>
  <p>{{ release.notes }}</p>
</div>
{% endfor %}

### Licence

Free to use, for personal and commercial work alike. The licence ships with
the application and can be read from its Help menu, along with the notices for
the open-source components it is built from.
