selectOn
========

A homemade event delegation method for [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
interface, like jQuery's `.on()`. Initially inspired and grabbed from
[32bitkid's CodePen](https://codepen.io/32bitkid/post/understanding-delegated-javascript-events).

**WARNING**: This is my first Node module, like a starter savoury or a
demo by myself, rather than a production package, and most importantly,
it is still in progress.

Installation
------------

Currently not uploaded on npm

```bash
$ git clone git@github.com:anqurvanillapy/selectOn.git
$ cd selectOn
$ npm install
```

Usage
-----

```javascript
// delegate events to all the `li`s in a `ul`
require('selectOn')

var ul = document.querySelector('ul')
ul.selectOn('click', 'li', function (e) {
  console.log(e.target.textContent)
})
```

API
---

### **.selectOn(eventName, selector, eventHandler)**

**FIXME**: `selector` is currently fake, which only detects the
`tagName` of target.

License
-------

ISC &copy; [AnqurVanillapy](https://github.com/anqurvanillapy)
