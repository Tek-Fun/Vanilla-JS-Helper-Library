var $ = (function () {
  'use strict';

  /**
   * Create the Contructor
   * @param {String} selector The selector to use
   */
  var Contructor = function (selector) {
    if (!selector) return;
    if (selector === 'document') {
      this.elems = [document];
    } else if (selector === 'window') {
      this.elems = [window];
    } else {
      this.elems = document.querySelectorAll(selector);
    }
  };

  /**
   * Run a callback on each item
   * @param {Function} callback The callback function to run
   */
  Contructor.prototype.each = function (callback) {
    if(!callback || typeof callback !== 'function') return;
    for (var i = 0; i < this.elems.length; i++) {
      callback(this.elems[i], i);
    }
    return this;
  };

  /**
   * Add a class to elements
   * @param {String} className the class name
   */
  Contructor.prototype.addClass = function (className) {
    this.each(function (item) {
      item.classList.add(className);
    });
    return this;
  };

  /**
   * Remove a class to elements
   * @param {String} className the class name
   */
  Contructor.prototype.removeClass = function (className) {
    this.each(function(item) {
      item.classList.remove(className);
    });
    return this;
  }

  /**
   * Instantiate a new Contructor
   */
  var instantiate = function (selector) {
    return new Contructor(selector);
  };

  return instantiate;
})();
