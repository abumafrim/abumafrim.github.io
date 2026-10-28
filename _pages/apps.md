---
layout: page
title: Apps
permalink: /apps/
description: Software I build and maintain, free to download.
nav: true
nav_order: 7
---

<!-- pages/apps.md -->

## MafrimDocs

A PDF viewer, editor and annotator that works without a network.

Read, annotate, fill in forms, run text recognition on scans, reorganise
pages, encrypt, and sign with a certificate — all on your own machine. It
has no account, no telemetry and no analytics, and your documents are never
sent anywhere.

It reaches the network only when you ask it to, and only for three things:
downloading a language for text recognition, requesting a trusted timestamp
when you sign a document, and checking whether a newer version exists. None
of those sends a document.

<div class="row mt-4">
  <div class="col-sm-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">macOS</h5>
        <p class="card-text">
          Apple Silicon and Intel, in one download. macOS 10.15 or later.
          The build is signed and being prepared for release.
        </p>
        <span class="btn btn-secondary disabled" aria-disabled="true">Coming shortly</span>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Windows and Linux</h5>
        <p class="card-text">
          Not released yet. The application is built on a toolkit that
          targets both, so these are a matter of packaging rather than
          rewriting.
        </p>
        <span class="btn btn-secondary disabled" aria-disabled="true">Not yet</span>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">iOS and Android</h5>
        <p class="card-text">
          In development, from the same codebase as the desktop application.
          Not available yet.
        </p>
        <span class="btn btn-secondary disabled" aria-disabled="true">In development</span>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Release notes</h5>
        <p class="card-text">
          What changed in each version, and every past release.
        </p>
        <a class="btn btn-outline-primary"
           href="https://github.com/abumafrim/mafrimdocs-releases/releases"
           rel="noopener">All releases</a>
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
  Languages download once and then work offline.
- **Pages** — reorder, rotate, delete, merge, split, and insert pages from
  other files.
- **Signing** — sign with a certificate, optionally with a trusted timestamp
  so the date does not rest on your own computer's clock. Signing adds to a
  document rather than replacing it, so an earlier signature stays valid.
- **Encryption** — AES-256, with the permissions actually applied.

### Licence

Free to use, for personal and commercial work alike. The licence ships with
the application and can be read from its Help menu, along with the notices
for the open-source components it is built from.
