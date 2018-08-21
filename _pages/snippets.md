---
layout: page
title: Snippets
permalink: /snippets/
---

<section id="archive">

  <div id="archives">
  {% for tag in site.tags %}
    <div class="archive-group">
      {% capture tag_name | where:"tag_name","snippets" %}{{ tag | first }}{% endcapture %}
      <h3 id="#{{ tag_name | slugize }}">{{ tag_name }}</h3>
      <a name="{{ tag_name | slugize }}"></a>
      {% for post in site.tags[tag_name] | where:"tag_name","snippets" %}
      <article class="archive-item">
        <h4><a href="{{ root_url }}{{ post.url }}">{{post.title}}</a></h4>
      </article>
      {% endfor %}
    </div>
  {% endfor %}
  </div>

</section>
