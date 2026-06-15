---
layout: page
permalink: /blog/
title: Blog
description: Posts and updates, including highlights shared on LinkedIn.
nav: false
---

<div class="blog-list">
  {% assign posts = site.posts | sort: 'date' | reverse %}
  {% if posts.size == 0 %}
    <p>No posts yet.</p>
  {% else %}
    {% for post in posts %}
      <div class="blog-list-item">
        <h3 class="blog-list-title">
          <a href="{% if post.redirect %}{{ post.redirect }}{% else %}{{ post.url | relative_url }}{% endif %}">{{ post.title }}</a>
        </h3>
        <p class="blog-list-meta">
          {{ post.date | date: '%b %d, %Y' }}{% if post.external_source %} · {{ post.external_source }}{% endif %}
        </p>
        {% if post.description %}<p class="blog-list-desc">{{ post.description }}</p>{% endif %}
      </div>
    {% endfor %}
  {% endif %}
</div>
