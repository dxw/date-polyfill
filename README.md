= date-polyfill

A very simple polyfill for input[type="date"] using jQuery UI

== Requirements

- Modernizr with inputtypes
- jQuery
- jQuery UI with datepicker

== Installation

Run this:

    npm install --save git+ssh://git@github.com:dxw/date-polyfill

Add this to your Browserify-complied JS:

    require('date-polyfill')

Add this to your SCSS:

    @import "../../node_modules/pikaday/css/pikaday";
    @import "../../node_modules/pikaday/css/site";

== CSS

The polyfill copies the classes from the original element so any rules targetting the input elements should be fine.

== Browser support

Any supported by Modernizr/jQuery/jQuery UI.
