---
layout: page
permalink: /teaching/
title: Teaching
description: Courses and training in NLP, machine learning, and software engineering.
nav: true
nav_order: 6
---

<!-- pages/teaching.md -->

<style>
  /* Institution names were h2 at display size, wrapping onto two lines above
     one or two courses. The heading outweighed everything it introduced. Here
     the institution and the dates sit in a column beside the courses, which is
     the shape of the content: where, when, what. */
  .teaching__place {
    display: grid;
    grid-template-columns: 18rem 1fr;
    gap: 0 2.5rem;
    padding: 1.4rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .teaching__place:first-of-type { border-top: 1px solid var(--global-divider-color); }
  @media (max-width: 768px) {
    .teaching__place { grid-template-columns: 1fr; gap: 0.4rem; }
  }
  .teaching__where { font-weight: 600; margin: 0; }
  .teaching__when { color: var(--global-text-color-light); font-size: 0.88rem; margin: 0.15rem 0 0; }
  .teaching__courses { list-style: none; margin: 0; padding: 0; }
  .teaching__courses li { padding: 0.15rem 0; }
  .teaching__courses .code { font-weight: 600; }
  .teaching__courses .level { color: var(--global-text-color-light); }
</style>

I teach and mentor across postgraduate and undergraduate programmes, with a focus on
Natural Language Processing, large language models, and the foundations of computing.

<div class="teaching__place">
  <div>
    <p class="teaching__where">African Institute for Mathematical Sciences (AIMS)</p>
    <p class="teaching__when">Visiting Professor, South Africa<br>Nov–Dec 2025 and 2026</p>
  </div>
  <ul class="teaching__courses">
    <li><span class="code">Natural Language Processing and LLMs</span> <span class="level">MSc</span></li>
  </ul>
</div>

<div class="teaching__place">
  <div>
    <p class="teaching__where">University of Pretoria</p>
    <p class="teaching__when">2025</p>
  </div>
  <ul class="teaching__courses">
    <li><span class="code">COS760: Natural Language Processing</span> <span class="level">Honours</span></li>
  </ul>
</div>

<div class="teaching__place">
  <div>
    <p class="teaching__where">Arewa Data Science Academy</p>
    <p class="teaching__when">2023 to present</p>
  </div>
  <ul class="teaching__courses">
    <li><span class="code">Natural Language Processing</span></li>
  </ul>
</div>

<div class="teaching__place">
  <div>
    <p class="teaching__where">Ahmadu Bello University, Zaria</p>
    <p class="teaching__when">2017 to 2023</p>
  </div>
  <ul class="teaching__courses">
    <li><span class="code">COSC211</span> Object-Oriented Programming I</li>
    <li><span class="code">COSC212</span> Object-Oriented Programming II</li>
    <li><span class="code">COSC406</span> Advanced Database Systems</li>
    <li><span class="code">COSC403</span> Software Engineering</li>
    <li><span class="code">COSC802</span> Software Engineering Methodologies <span class="level">MSc</span></li>
  </ul>
</div>
