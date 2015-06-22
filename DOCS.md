# Main Documentation

1. [HTML format](#html-formatting)
1. [Changing Height](#height)
1. [Custom Builds](#custom-builds)

<h2 id="html-formatting">HTML formatting</h2>

The HTML structure for the accordion is split into three classes:

```HTML
<div class="ctb-accordion">
  <div class="navbar"> ... </div>
  <div class="items"> ... </div>
  <div class="tabs"> ... </div>
</div>
```

### Navbar

`.navbar` is the topmost section of the Accordion. You may supply an image tag within `.logo` to have it properly centered in the navbar.

```HTML
<div class="navbar">
  <span class="logo">
    <img src="./img/brand.png"/>
  </span>
</div>
```

### Items

Within `.items` are any blocks you want to pin to the top of the Accordion, each having the class `.item`. You may include `.image`, `.title`, and `.subtitle` classes within each `.item`.

```HTML
<div class="item">
  <span class="image"> ... </span>
  <span class="title"> ... </span>
  <span class="subtitle"> ... </span>
</div>
```

### Tabs

The `.tabs` div contains the individual `.tab` elements which make up the content of the accordion. Each tab looks like this:

```HTML
<div class="tab">
  <div class="tab-handle">
    <span class="badge">2</span>
    <span class="title">second tab</span>
    <span class="icon right-arrow"></span>
  </div>
  <div class="tab-content">
    Second Tab Content
  </div>
</div>
```

<h2 id="height">Changing Height</h2>

To make the animations work efficiently, the Accordion must be a fixed css height. This is acheived by setting the height of `.tab-content`. Define a css rule for `.ctb-accordion .tab-content` for the desired height until the accordion fits the space you are working with.

<h2 id="custom-builds">Custom Builds</h2>

Along with the `.tab-content` height, there are a few other parameters you can change. It is reccomended that you build your own version of the accordion stylesheet if you are making significant changes. Accordion uses [stylus](https://learnboost.github.io/stylus/) for dynamic CSS generation. To use stylus and change the default build settings, clone the [repository](http://www.github.com/coltonTB/accordion) and modify the variables defiend in `stylesheets/vars.styl`. Then run `gulp` to generate the new stylesheet that you can find in `build/style.css`


