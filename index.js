(function selectOn (exports) {
  'use strict'

  Element.prototype.selectOn = function (eventName, selector, handler) {
    var delegate = function (criteria, listener) {
      return function (e) {
        var el = e.target
        do {
          if (!criteria.isSelector(selector)) continue
          e.delegateTarget = el
          listener.apply(this, arguments)
          return
        } while ((el = el.parentNode))
      }
    }

    var criteria = {
      isElement: function (e) { return e instanceof HTMLElement },
      isSelector: function (el) {
        return function (e) {
          return criteria.isElement(e) && e.tagName === el.toUpperCase()
        }
      }
    }

    var partialDelegate = function (criteria) {
      return function (handler) {
        return delegate(criteria, handler)
      }
    }

    this.addEventListener(eventName, partialDelegate(criteria)(handler))
  }

  exports = this
})(this)
