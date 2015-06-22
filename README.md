---
layout: main
permalink: /
---

{% include accordion.html %}

# Accordion

A lightweight UX element featuring clean and functional animations. It supports an arbitrary number of tabs and allows you to optionally pin useful information to the top of the tab list. When you click on a tab, it expands to reveal its content and causes other open tabs to collapse.

## Installing

To make Accordion work, you'll need to include [this][stylesheet] CSS stylesheet. You'll also need to invoke the following javascript code within a `<script>` tag:

```javascript
var sel = document.querySelectorAll('.ctb-accordion .tab'),
tabs = [].map.call(sel, function(t){return t});
tabs.forEach(function(tab){
  tab.addEventListener('click', function() {
    tabs.forEach(function(t){t.classList.remove('active');});
    tab.classList.add('active');
  }, false);
});
```

... and finally implement the HTML in the correct format: 

```HTML
<div class="ctb-accordion">
  <div class="navbar"> ... </div>
  <div class="items"> ... </div>
  <div class="tabs"> ... </div>
</div>
```

Learn more about how to do it [here](./docs.html)

[stylesheet]: https://raw.githubusercontent.com/coltontb/accordion/master/build/style.css