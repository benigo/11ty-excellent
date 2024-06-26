---
title: 'Pemasangan Wermes'
description: 'When you share your blog posts, a thumbnail image appears - the image we define as an Open Graph Image. This starter generates these images for your blog posts automatically.'
date: 2024-06-14
youtube: true
---
## Pemasangan Wermes

{% youtube 'IePVYjlAjTQ', 'beni.zo – Be the browser’s mentor, not its micromanager' %}

When you share your blog posts, a thumbnail image may appear - the image we define in our meta data as an Open Graph Image (`og:image`).

This starter generates these images for your blog posts automatically.

The fallback and default image for all other pages is the image set as `opengraph_default` in the `meta.js` global data file.

`meta-info.njk`
{% raw %}

```html
<meta
  property="og:image"
  content="{{ meta.url }}
  {% if (layout == 'post') %}/assets/images/social-preview/{{ title | slugify }}-preview.jpeg
  {% else %}{{ meta.meta_data.opengraph_default }}
  {% endif %}"
/>
```

{% endraw %}
To change the look and behaviour of those images and replace the SVG background edit `src/social-preview.njk`. The implementation is based on [Bernard Nijenhuis article](https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/).
