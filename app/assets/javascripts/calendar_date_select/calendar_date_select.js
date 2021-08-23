/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calendar_date_select.js":
/*!*************************************!*\
  !*** ./src/calendar_date_select.js ***!
  \*************************************/
/***/ (function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (exportTo) {
  /**
   * Creates an element with given options and style, appending it to the parent.
   * @param {Element} parent Parent element
   * @param {string} tagName Element type
   * @param {object} [options] Element options
   * @param {object} [style] Element style options
   * @returns {Element} The element
   */
  function createElement(parent, tagName, options, style) {
    var newElement = document.createElement(tagName);

    if (options) {
      Object.assign(newElement, options);
    }

    if (style) {
      Object.assign(newElement.style, style);
    }

    parent.append(newElement);
    return newElement;
  }
  /**
   *
   * @param {Element} element
   * @param {string} tagName
   * @return {Element}
   */


  function findFirstChildElementByTagName(element, tagName) {
    if (element.tagName === tagName) {
      return element;
    }

    var foundNode = null;

    if (element.hasChildNodes()) {
      var _iterator = _createForOfIteratorHelper(element.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          foundNode = findFirstChildElementByTagName(child, tagName);
          if (foundNode) break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return foundNode;
  }
  /**
   * Produces an array of increasing, consecutive number from start (inclusive) to end (inclusive)
   * @param {number} start Starting number, inclusive
   * @param {number} end Ending number, inclusive
   * @returns {[number]}
   */


  function range(start, end) {
    var arr = [];

    for (var i = start; i <= end; i++) {
      arr.push(i);
    }

    return arr;
  }
  /**
   * Converts one or more objects into a Map, using own properties for keys and values.  Multiple objects
   * are merged into a single Map with the last key winning
   * @param {...(object|Map)} objs 1 or more Objects to be merged into a Map
   * @returns {Map}
   */


  function objectsToMap() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    return objs.reduce(function (previous, current) {
      var second = current instanceof Map ? current : Object.entries(current);
      return new Map([].concat(_toConsumableArray(previous), _toConsumableArray(second)));
    }, new Map());
  }
  /**
   * Removes an element from it's parent
   * @param {Element} element Target element
   */


  function removeNode(element) {
    element.parentNode.removeChild(element);
  }
  /**
   * Removes all child nodes from a parent
   * @param {Element} element Target element
   */


  function removeChildNodes(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  /**
   * Returns true of element is within the child tree of ancestor
   * @param {Node} element Node target element
   * @param {Node} ancestor Node ancestor
   * @returns {boolean}
   */


  function isDescendantOf(element, ancestor) {
    return (element.compareDocumentPosition(ancestor) & 8) === 8;
  }
  /**
   * Take an element as a parameter and returns any result
   * @callback ElementCallback
   * @param {Element} element
   * @returns {*}
   */

  /**
   * If element is display: none, sets visibility: hidden and display: block before running fn.  Returns the
   * element to it's original state after fn returns.  If element is NOT display: none, runs fn without
   * modifying the element.  Can be useful for calculating offsets as display none elements will return
   * null or 0 in that case
   * @param {Element} element Target element
   * @param {ElementCallback} fn Callback in the form (Element) =>
   * @returns {*} Result from fn
   */


  function temporarilyDisplayElement(element, fn) {
    var result;

    if (element.style.display === 'none') {
      var _element$style = element.style,
          visibility = _element$style.visibility,
          position = _element$style.position,
          display = _element$style.display;
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      result = fn(element);
      Object.assign(element.style, {
        visibility: visibility,
        position: position,
        display: display
      });
    } else {
      result = fn(element);
    }

    return result;
  }
  /**
   * Calculates the cumulative offset from the top-left of a page to the element
   * @param {Element} element Target element
   * @returns {{top: number, left: number}}
   */


  function cumulativeOffset(element) {
    var top = 0;
    var left = 0;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      if (element.offsetParent === document.body) if (element.style.position === 'absolute') break;
      element = element.offsetParent;
    } while (element);

    return {
      left: left,
      top: top
    };
  }
  /**
   * Calculates an elements cumulative offset relative to its closest positioned ancestor.
   * @param {Element} element Target element
   * @returns {{top: number, left: number}}
   */


  function positionedOffset(element) {
    var top = 0;
    var left = 0;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;

      if (element) {
        if (element.tagName.toUpperCase() === 'BODY') break;
        if (element.style.position !== 'static') break;
      }
    } while (element);

    return {
      left: left,
      top: top
    };
  }
  /**
   * Returns the offset width and height of an element
   * @param {Element} element Target element
   * @returns {{width: number, height: number}}
   */


  function getDimensions(element) {
    return temporarilyDisplayElement(element, function (e) {
      return {
        width: e.offsetWidth,
        height: e.offsetHeight
      };
    });
  }
  /**
   * Returns the height of the window looking for the first non-zero/null value from window.innerHeight,
   * document.documentElement.clientHeight or document.body.clientHeight in order
   * @returns {number}
   */


  function windowHeight() {
    return Math.max(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight);
  }
  /**
   * Returns the scrollTop of the window looking for the first non-zero/null value from window.pageYOffset,
   * document.documentElement.scrollTop or document.body.scrollTop in order
   * @returns {number}
   */


  function windowScrollTop() {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  /**
   * Floors n to the nearest multiple of i.
   * @param {number} n Number
   * @param {number} i Interval
   * @returns {number}
   */


  function floor_to_interval(n, i) {
    return Math.floor(n / i) * i;
  }
  /* ========================================================================================== */

  /**
   * Holds data required for internationalization.
   */


  var CDSLocaleProvider = /*#__PURE__*/function () {
    /**
     * @typedef Translations
     * @property {string} Ok
     * @property {string} Now
     * @property {string} Today
     * @property {string} Clear
     */

    /**
     * @param {string[]} weekdays Array containing exactly 7 strings representing short-form days of the week starting with Sunday
     * @param {string[]} monthNames Array containing exactly 12 strings representing Months of the year
     * @param {number} firstDayOfWeek Number representing the 0-based index for the first day of the week
     * @param {Translations} translations Object of English keys to translated names
     */
    function CDSLocaleProvider(weekdays, monthNames, firstDayOfWeek, translations) {
      _classCallCheck(this, CDSLocaleProvider);

      this.weekdays = weekdays;
      this.monthNames = monthNames;
      this.firstDayOfWeek = firstDayOfWeek;
      this.translations = translations;
    }
    /**
     * Returns the translated month name by index
     * @param {number} m 0-based month index
     * @returns {string}
     */


    _createClass(CDSLocaleProvider, [{
      key: "getMonthName",
      value: function getMonthName(m) {
        return this.monthNames[m];
      }
      /**
       * Returns the translated key
       * @param {string} key Key to translate
       * @returns {string}
       */

    }, {
      key: "translate",
      value: function translate(key) {
        return this.translations[key];
      }
    }]);

    return CDSLocaleProvider;
  }();
  /**
   * Date handling functions for CDS
   */


  var CDSDate = /*#__PURE__*/function (_Date) {
    _inherits(CDSDate, _Date);

    var _super = _createSuper(CDSDate);

    /**
     * @param {any} args passed to Date constructor
     */
    function CDSDate() {
      _classCallCheck(this, CDSDate);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _super.call.apply(_super, [this].concat(args));
    }
    /**
     * Left-pads a number < 10 with leading 0
     * @param {number|string} n
     * @returns {string}
     */


    _createClass(CDSDate, [{
      key: "getCurrentMonthName",
      value:
      /**
       * Gets the localized name for the current month
       * @returns {string} Date string
       */
      function getCurrentMonthName() {
        return CalendarDateSelect.LOCALE_PROVIDER.getMonthName(this.getMonth());
      }
      /**
       * Gets the current minutes, left padded
       * @returns {string}
       */

    }, {
      key: "getPaddedMinutes",
      value: function getPaddedMinutes() {
        return CDSDate.padded2(this.getMinutes());
      }
      /**
       * Returns the current hour in 12-hour format (1 - 12)
       * @returns {number}
       */

    }, {
      key: "getAMPMHour",
      value: function getAMPMHour() {
        var hour = this.getHours();
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      }
      /**
       * Returns AM or PM based on the current time
       * @returns {string}
       */

    }, {
      key: "getAMPM",
      value: function getAMPM() {
        return this.getHours() < 12 ? "AM" : "PM";
      }
      /**
       * Clones the current instance and sets the current time to the beginning of the day
       * @returns {CDSDate} A new date instance
       */

    }, {
      key: "stripTime",
      value: function stripTime() {
        var d = this.clone();
        d.setHours(0, 0, 0, 0);
        return d;
      }
      /**
       * Returns the number of days between 2 dates
       * @param {Date} compare_date
       * @returns {number}
       */

    }, {
      key: "daysDistance",
      value: function daysDistance(compare_date) {
        return Math.round((compare_date - this) / CDSDate.ONE_DAY);
      }
      /**
       * Formats the date to a string
       * @param {boolean} include_time When true, includes the time component
       * @returns {string}
       */

    }, {
      key: "toFormattedString",
      value: function toFormattedString(include_time) {
        var str = this.getCurrentMonthName() + " " + this.getDate() + ", " + this.getFullYear();

        if (include_time) {
          str += " " + this.getAMPMHour() + ":" + this.getPaddedMinutes() + " " + this.getAMPM();
        }

        return str;
      }
      /**
       * Clones the current instance
       * @return {CDSDate}
       */

    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this);
      }
      /**
       * Returns the current hour formatted for a dropdown
       * @return {string}
       */

    }, {
      key: "getHourForDropdown",
      value: function getHourForDropdown() {
        return this.getAMPMHour() + " " + this.getAMPM();
      }
    }], [{
      key: "padded2",
      value: function padded2(n) {
        var nInt = parseInt(n, 10);
        return nInt < 10 ? "0" + nInt : "" + nInt;
      }
      /**
       * Parses a date string returning a new instance of CDSDate
       * @param {string} string Date string
       * @returns {CDSDate}
       */

    }, {
      key: "parseFormattedString",
      value: function parseFormattedString(string) {
        return new CDSDate(string);
      }
    }]);

    return CDSDate;
  }( /*#__PURE__*/_wrapNativeSuper(Date));

  CDSDate.ONE_DAY = 24 * 60 * 60 * 1000;

  var SelectBox = /*#__PURE__*/function () {
    function SelectBox(parent_element, values, html_options) {
      _classCallCheck(this, SelectBox);

      this.element = createElement(parent_element, "select", html_options);
      this.populate(values);
    }

    _createClass(SelectBox, [{
      key: "populate",
      value: function populate(values) {
        var _this = this;

        removeChildNodes(this.element);
        values.forEach(function (pair) {
          if (_typeof(pair) != "object") {
            pair = [pair, pair];
          }

          createElement(_this.element, "option", {
            value: pair[1],
            innerHTML: pair[0]
          });
        });
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        var e = this.element;
        var matched = false;
        range(0, e.options.length - 1).forEach(function (i) {
          if (e.options[i].value === value.toString()) {
            e.selectedIndex = i;
            matched = true;
          }
        });
        return matched;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        var index = this.element.selectedIndex;
        if (index < 0) return null;
        var opt = this.element.options[index];
        return opt.hasAttribute('value') ? opt.value : opt.text;
      }
    }]);

    return SelectBox;
  }();

  var CalendarDateSelect = /*#__PURE__*/function () {
    function CalendarDateSelect(target_element, options) {
      _classCallCheck(this, CalendarDateSelect);

      this.locale = CalendarDateSelect.LOCALE_PROVIDER;
      this.target_element = target_element;

      if (!this.target_element) {
        console.error("Target element " + target_element + " not found!");
        return false;
      }

      if (this.target_element.tagName !== "INPUT") this.target_element = findFirstChildElementByTagName(this.target_element, "INPUT");
      this.target_element.calendar_date_select = this;
      this.last_click_at = 0; // initialize the date control

      this.options = objectsToMap({
        content_container: null,
        calendar_parent: document.body,
        embedded: false,
        popup: null,
        time: false,
        buttons: true,
        clear_button: true,
        year_range: 10,
        close_on_click: null,
        minute_interval: 5,
        popup_by: this.target_element,
        month_year: "dropdowns",
        onchange: function (target_element) {
          return function () {
            if (target_element.dispatchEvent) {
              var event = document.createEvent('HTMLEvents');
              event.initEvent('change', true, true);
              target_element.dispatchEvent(event);
            } else {
              var _event = document.createEventObject();

              _event.type = 'onChange';
              target_element.fireEvent('onChange', _event);
            }
          };
        }(this.target_element),
        valid_date_check: null
      }, options || {});
      this.use_time = this.options.get("time");
      this.parseDate();
      this.callback("before_show");
      this.initCalendarDiv();

      if (!this.options.get("embedded")) {
        this.positionCalendarDiv();
        this.closeIfClickedOutListener = this.closeIfClickedOut.bind(this);
        this.keyPressListener = this.keyPress.bind(this); // set the click handler to check if a user has clicked away from the document

        document.addEventListener("mousedown", this.closeIfClickedOutListener);
        document.addEventListener("keydown", this.keyPressListener);
      }

      this.callback("after_show");
    }

    _createClass(CalendarDateSelect, [{
      key: "newDate",
      value: function newDate() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return _construct(CalendarDateSelect.DATE_CLASS, args);
      }
    }, {
      key: "positionCalendarDiv",
      value: function positionCalendarDiv() {
        var c_height = getDimensions(this.calendar_div).height;
        var e_dim = positionedOffset(this.options.get("popup_by"));
        var e_top = e_dim.top;
        var e_left = e_dim.left;
        var e_height = getDimensions(this.options.get("popup_by")).height;
        var e_bottom = e_top + e_height;
        var contentContainer = this.options.get('content_container');
        var w_top = contentContainer ? contentContainer.scrollTop : windowScrollTop();
        var parent_top = cumulativeOffset(this.options.get('calendar_parent')).top;
        var thereIsNoSpaceBelowInput = parent_top + e_bottom + c_height > w_top + windowHeight();
        var thereIsSpaceAboveInput = parent_top + e_bottom - c_height > w_top;
        var above = thereIsNoSpaceBelowInput && thereIsSpaceAboveInput;
        var left_px = e_left.toString() + "px";
        var top_px = (above ? e_top - c_height : e_top + e_height).toString() + "px";
        this.calendar_div.style.left = left_px;
        this.calendar_div.style.top = top_px;
        this.calendar_div.style.visibility = "";
      }
    }, {
      key: "initCalendarDiv",
      value: function initCalendarDiv() {
        var parent, style;

        if (this.options.get("embedded")) {
          parent = this.target_element.parentNode;
          style = {};
        } else {
          parent = this.options.get('calendar_parent');
          style = {
            position: "absolute",
            visibility: "hidden",
            left: 0,
            top: 0
          };
        }

        this.calendar_div = createElement(parent, 'div', {
          className: "calendar_date_select"
        }, style); // create the divs

        "top header body buttons footer bottom".split(' ').reduce(function (that, name) {
          that[name + '_div'] = createElement(that.calendar_div, 'div', {
            className: 'cds_' + name
          }, {
            clear: 'left'
          });
          return that;
        }, this);
        this.initHeaderDiv();
        this.initButtonsDiv();
        this.initCalendarGrid();
        this.updateFooter("&#160;");
        this.refresh();
        this.setUseTime(this.use_time);
      }
    }, {
      key: "initHeaderDiv",
      value: function initHeaderDiv() {
        var _this2 = this;

        var header_div = this.header_div;
        this.close_button = createElement(header_div, "a", {
          innerHTML: "x",
          href: "#",
          onclick: function onclick() {
            _this2.close();

            return false;
          },
          className: "close"
        });
        this.next_month_button = createElement(header_div, "a", {
          innerHTML: "&gt;",
          href: "#",
          onclick: function onclick() {
            _this2.navMonth(_this2.date.getMonth() + 1);

            return false;
          },
          className: "next"
        });
        this.prev_month_button = createElement(header_div, "a", {
          innerHTML: "&lt;",
          href: "#",
          onclick: function onclick() {
            _this2.navMonth(_this2.date.getMonth() - 1);

            return false;
          },
          className: "prev"
        });

        if (this.options.get("month_year") === "dropdowns") {
          this.month_select = new SelectBox(header_div, range(0, 11).map(function (m) {
            return [_this2.locale.getMonthName(m), m];
          }), {
            className: "month",
            onchange: function onchange() {
              return _this2.navMonth(_this2.month_select.getValue());
            }
          });
          this.year_select = new SelectBox(header_div, [], {
            className: "year",
            onchange: function onchange() {
              return _this2.navYear(_this2.year_select.getValue());
            }
          });
          this.populateYearRange();
        } else {
          this.month_year_label = createElement(header_div, "span");
        }
      }
    }, {
      key: "initCalendarGrid",
      value: function initCalendarGrid() {
        var body_div = this.body_div;
        this.calendar_day_grid = [];
        var days_table = createElement(body_div, "table", {
          cellPadding: "0px",
          cellSpacing: "0px",
          width: "100%"
        });
        var weekdays_row = createElement(createElement(days_table, "thead"), "tr");
        this.locale.weekdays.forEach(function (weekday) {
          return createElement(weekdays_row, "th", {
            innerHTML: weekday
          });
        });
        var days_tbody = createElement(days_table, "tbody"); // Make the days!

        var row_number = 0,
            weekday;
        var days_row;

        for (var cell_index = 0; cell_index < 42; cell_index++) {
          weekday = (cell_index + this.locale.firstDayOfWeek) % 7;

          if (cell_index % 7 === 0) {
            days_row = createElement(days_tbody, "tr", {
              className: 'row_' + row_number++
            });
          }

          this.calendar_day_grid[cell_index] = createElement(days_row, "td", {
            calendar_date_select: this,
            onmouseover: function onmouseover() {
              this.calendar_date_select.dayHover(this);
            },
            onmouseout: function onmouseout() {
              this.calendar_date_select.dayHoverOut(this);
            },
            onclick: function onclick() {
              this.calendar_date_select.updateSelectedDate(this, true);
            },
            className: weekday === 0 || weekday === 6 ? " weekend" : "" //clear the class

          }, {
            cursor: "pointer"
          });
          createElement(this.calendar_day_grid[cell_index], "div");
        }
      }
    }, {
      key: "initButtonsDiv",
      value: function initButtonsDiv() {
        var _this3 = this;

        var buttons_div = this.buttons_div;

        if (this.options.get("time")) {
          var blank_time = this.options.get("time") === "mixed" ? [[" - ", ""]] : [];
          var t = this.newDate();
          this.hour_select = new SelectBox(buttons_div, blank_time.concat(range(0, 23).map(function (x) {
            t.setHours(x);
            return [t.getHourForDropdown(), x];
          })), {
            onchange: function onchange(e) {
              _this3.updateSelectedDate({
                hour: e.target.value
              });
            },
            className: "hour"
          });
          createElement(buttons_div, "span", {
            innerHTML: ":",
            className: "seperator"
          });
          this.minute_select = new SelectBox(buttons_div, blank_time.concat(range(0, 59).filter(function (x) {
            return x % _this3.options.get('minute_interval') === 0;
          }).map(function (x) {
            return [CalendarDateSelect.DATE_CLASS.padded2(x), x];
          })), {
            onchange: function onchange(e) {
              _this3.updateSelectedDate({
                minute: e.target.value
              });
            },
            className: "minute"
          });
        } else if (!this.options.get("buttons")) {
          buttons_div.remove();
        }

        if (this.options.get("buttons")) {
          createElement(buttons_div, "span", {
            innerHTML: "&#160;"
          });

          if (this.options.get("time") === "mixed" || !this.options.get("time")) {
            createElement(buttons_div, "a", {
              innerHTML: this.locale.translate("Today"),
              href: "#",
              onclick: function onclick() {
                _this3.today(false);

                return false;
              }
            });
          }

          if (this.options.get("time") === "mixed") {
            createElement(buttons_div, "span", {
              innerHTML: "&#160;|&#160;",
              className: "button_seperator"
            });
          }

          if (this.options.get("time")) {
            createElement(buttons_div, "a", {
              innerHTML: this.locale.translate("Now"),
              href: "#",
              onclick: function onclick() {
                _this3.today(true);

                return false;
              }
            });
          }

          if (!this.options.get("embedded") && !this.closeOnClick()) {
            createElement(buttons_div, "span", {
              innerHTML: "&#160;|&#160;",
              className: "button_seperator"
            });
            createElement(buttons_div, "a", {
              innerHTML: this.locale.translate("OK"),
              href: "#",
              onclick: function onclick() {
                _this3.close();

                return false;
              }
            });
          }

          if (this.options.get('clear_button')) {
            createElement(buttons_div, "span", {
              innerHTML: "&#160;|&#160;",
              className: "button_seperator"
            });
            createElement(buttons_div, "a", {
              innerHTML: this.locale.translate("Clear"),
              href: "#",
              onclick: function onclick() {
                _this3.clearDate();

                if (!_this3.options.get("embedded")) _this3.close();
                return false;
              }
            });
          }
        }
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.refreshMonthYear();
        this.refreshCalendarGrid();
        this.setSelectedClass();
        this.updateFooter();
      }
    }, {
      key: "refreshCalendarGrid",
      value: function refreshCalendarGrid() {
        this.beginning_date = this.newDate(this.date).stripTime();
        this.beginning_date.setDate(1);
        this.beginning_date.setHours(12); // Prevent daylight savings time boundaries from showing a duplicate day

        var pre_days = this.beginning_date.getDay(); // draw some days before the fact

        if (pre_days < 3) pre_days += 7;
        this.beginning_date.setDate(1 - pre_days + this.locale.firstDayOfWeek);
        var iterator = this.newDate(this.beginning_date);
        var today = this.newDate().stripTime();
        var this_month = this.date.getMonth();
        var vdc = this.options.get("valid_date_check");

        for (var cell_index = 0; cell_index < 42; cell_index++) {
          var day = iterator.getDate();
          var month = iterator.getMonth();
          var cell = this.calendar_day_grid[cell_index];
          removeNode(cell.childNodes[0]);
          var div = createElement(cell, "div", {
            innerHTML: day
          });
          if (month !== this_month) div.className = "other";
          cell.day = day;
          cell.month = month;
          cell.year = iterator.getFullYear();

          if (vdc) {
            if (vdc(iterator.stripTime())) {
              cell.classList.remove("disabled");
            } else {
              cell.classList.add("disabled");
            }
          }

          iterator.setDate(day + 1);
        }

        if (this.today_cell) {
          this.today_cell.classList.remove('today');
        }

        var days_until;

        if (range(0, 41).includes(days_until = this.beginning_date.stripTime().daysDistance(today))) {
          this.today_cell = this.calendar_day_grid[days_until];
          this.today_cell.classList.add('today');
        }
      }
    }, {
      key: "refreshMonthYear",
      value: function refreshMonthYear() {
        var y = this.date.getFullYear(); // set the month

        if (this.options.get("month_year") === "dropdowns") {
          this.month_select.setValue(this.date.getMonth(), false);
          var e = this.year_select.element;
          if (this.flexibleYearRange() && (!this.year_select.setValue(y, false) || e.selectedIndex <= 1 || e.selectedIndex >= e.options.length - 2)) this.populateYearRange();
          this.year_select.setValue(y);
        } else {
          this.month_year_label.innerHTML = this.locale.getMonthName(this.date.getMonth()) + " " + y.toString();
        }
      }
    }, {
      key: "populateYearRange",
      value: function populateYearRange() {
        this.year_select.populate(this.yearRange());
      }
    }, {
      key: "yearRange",
      value: function yearRange() {
        if (!this.flexibleYearRange()) return range(this.options.get("year_range")[0], this.options.get("year_range")[1]);
        var y = this.date.getFullYear();
        return range(y - this.options.get("year_range"), y + this.options.get("year_range"));
      }
    }, {
      key: "flexibleYearRange",
      value: function flexibleYearRange() {
        return typeof this.options.get("year_range") === "number";
      }
    }, {
      key: "validYear",
      value: function validYear(year) {
        if (this.flexibleYearRange()) {
          return true;
        } else {
          return this.yearRange().includes(year);
        }
      }
    }, {
      key: "dayHover",
      value: function dayHover(element) {
        var hover_date = this.newDate(this.selected_date);
        hover_date.setYear(element.year);
        hover_date.setMonth(element.month);
        hover_date.setDate(element.day);
        this.updateFooter(hover_date.toFormattedString(this.use_time));
      }
    }, {
      key: "dayHoverOut",
      value: function dayHoverOut() {
        this.updateFooter();
      }
    }, {
      key: "clearSelectedClass",
      value: function clearSelectedClass() {
        if (this.selected_cell) {
          this.selected_cell.classList.remove('selected');
        }
      }
    }, {
      key: "setSelectedClass",
      value: function setSelectedClass() {
        if (!this.selection_made) return;
        this.clearSelectedClass();
        var days_until;

        if (range(0, 42).includes(days_until = this.beginning_date.stripTime().daysDistance(this.selected_date.stripTime()))) {
          this.selected_cell = this.calendar_day_grid[days_until];
          this.selected_cell.classList.add('selected');
        }
      }
    }, {
      key: "reparse",
      value: function reparse() {
        this.parseDate();
        this.refresh();
      }
    }, {
      key: "dateString",
      value: function dateString() {
        return this.selection_made ? this.selected_date.toFormattedString(this.use_time) : "&#160;";
      }
    }, {
      key: "parseDate",
      value: function parseDate() {
        var value = this.target_element.value.trim();
        var default_time = this.options.get("default_time");
        this.selection_made = value !== "" ? true : typeof default_time !== 'undefined';
        this.date = value === "" ? NaN : CalendarDateSelect.DATE_CLASS.parseFormattedString(this.options.get("date") || value);

        if (isNaN(this.date) && !default_time) {
          this.date = this.newDate();
        } else if (isNaN(this.date) && default_time) {
          this.date = Object.prototype.toString.apply(default_time) === '[object Function]' ? default_time() : default_time;
        }

        var range = this.yearRange();
        var rangeStart = range[0];
        var rangeEnd = range[range.length - 1];

        if (!this.validYear(this.date.getFullYear())) {
          this.date.setYear(this.date.getFullYear() < rangeStart ? rangeStart : rangeEnd);
        }

        this.selected_date = this.newDate(this.date);
        this.use_time = /[0-9]:[0-9]{2}/.exec(value) ? true : false;
        this.date.setDate(1);
      }
    }, {
      key: "updateFooter",
      value: function updateFooter(text) {
        if (!text) text = this.dateString();
        removeChildNodes(this.footer_div);
        createElement(this.footer_div, "span", {
          innerHTML: text
        });
      }
    }, {
      key: "clearDate",
      value: function clearDate() {
        if ((this.target_element.disabled || this.target_element.readOnly) && this.options.get("popup") !== "force") return false;
        var last_value = this.target_element.value;
        this.target_element.value = "";
        this.clearSelectedClass();
        this.updateFooter('&#160;');

        if (last_value !== this.target_element.value) {
          this.callback("onchange");
        }
      }
    }, {
      key: "updateSelectedDate",
      value: function updateSelectedDate(partsOrElement, via_click) {
        var parts = objectsToMap(partsOrElement);
        if ((this.target_element.disabled || this.target_element.readOnly) && this.options.get("popup") !== "force") return false;

        if (parts.get("day")) {
          var t_selected_date = this.selected_date;
          var vdc = this.options.get("valid_date_check");
          t_selected_date.setFullYear(parts.get("year"), parts.get("month"), parts.get("day"));

          if (vdc && !vdc(t_selected_date.stripTime())) {
            return false;
          }

          this.selected_date = t_selected_date;
          this.selection_made = true;
        }

        if (!isNaN(parts.get("hour"))) {
          this.selected_date.setHours(parts.get("hour"));
        }

        if (!isNaN(parts.get("minute"))) {
          this.selected_date.setMinutes(floor_to_interval(parts.get("minute"), this.options.get("minute_interval")));
        }

        if (parts.get("hour") === "" || parts.get("minute") === "") {
          this.setUseTime(false);
        } else if (!isNaN(parts.get("hour")) || !isNaN(parts.get("minute"))) {
          this.setUseTime(true);
        }

        this.updateFooter();
        this.setSelectedClass();

        if (this.selection_made) {
          this.updateValue();
        }

        if (this.closeOnClick()) {
          this.close();
        }

        if (via_click && !this.options.get("embedded")) {
          if (this.newDate() - this.last_click_at < 333) this.close();
          this.last_click_at = this.newDate();
        }
      }
    }, {
      key: "closeOnClick",
      value: function closeOnClick() {
        if (this.options.get("embedded")) return false;
        if (this.options.get("close_on_click") === null) return !this.options.get("time");else return this.options.get("close_on_click");
      }
    }, {
      key: "navMonth",
      value: function navMonth(month) {
        var target_date = this.newDate(this.date);
        target_date.setMonth(month);
        return this.navTo(target_date);
      }
    }, {
      key: "navYear",
      value: function navYear(year) {
        var target_date = this.newDate(this.date);
        target_date.setFullYear(year);
        return this.navTo(target_date);
      }
    }, {
      key: "navTo",
      value: function navTo(date) {
        if (!this.validYear(date.getFullYear())) return false;
        this.date = date;
        this.date.setDate(1);
        this.refresh();
        this.callback("after_navigate", this.date);
        return true;
      }
    }, {
      key: "setUseTime",
      value: function setUseTime(turn_on) {
        this.use_time = this.options.get("time") && (this.options.get("time") === "mixed" ? turn_on : true); // force use_time to true if time==true && time!="mixed"

        if (this.use_time && this.selected_date) {
          // only set hour/minute if a date is already selected
          var minute = floor_to_interval(this.selected_date.getMinutes(), this.options.get("minute_interval"));
          var hour = this.selected_date.getHours();
          this.hour_select.setValue(hour);
          this.minute_select.setValue(minute);
        } else if (this.options.get("time") === "mixed") {
          this.hour_select.setValue("");
          this.minute_select.setValue("");
        }
      }
    }, {
      key: "updateValue",
      value: function updateValue() {
        var last_value = this.target_element.value;
        this.target_element.value = this.dateString();
        if (last_value !== this.target_element.value) this.callback("onchange");
      }
    }, {
      key: "today",
      value: function today(now) {
        var d = this.newDate();
        this.date = this.newDate();
        var o = objectsToMap({
          day: d.getDate(),
          month: d.getMonth(),
          year: d.getFullYear(),
          hour: d.getHours(),
          minute: d.getMinutes()
        });

        if (!now) {
          o.set('hour', '');
          o.set('minute', '');
        }

        this.updateSelectedDate(o, true);
        this.refresh();
      }
    }, {
      key: "close",
      value: function close() {
        if (this.closed) return false;
        this.callback("before_close");
        this.target_element.calendar_date_select = null;
        document.removeEventListener("mousedown", this.closeIfClickedOutListener);
        document.removeEventListener("keydown", this.keyPressListener);
        this.calendar_div.remove();
        this.closed = true;
        if (this.iframe) this.iframe.remove();
        if (this.target_element.type !== "hidden") this.target_element.focus();
        this.callback("after_close");
      }
    }, {
      key: "closeIfClickedOut",
      value: function closeIfClickedOut(e) {
        if (!isDescendantOf(e.target, this.calendar_div)) this.close();
      }
    }, {
      key: "keyPress",
      value: function keyPress(e) {
        if (e.key === 'Escape' || e.key === 'Esc') this.close();
      }
    }, {
      key: "callback",
      value: function callback(name, param) {
        if (this.options.get(name)) {
          this.options.get(name).bind(this.target_element)(param);
        }
      }
    }]);

    return CalendarDateSelect;
  }();

  CalendarDateSelect.DATE_CLASS = CDSDate;
  CalendarDateSelect.LOCALE_PROVIDER = new CDSLocaleProvider("S M T W T F S".split(' '), "January February March April May June July August September October November December".split(' '), 0, {
    OK: "OK",
    Now: "Now",
    Today: "Today",
    Clear: "Clear"
  }); // Expose for unit tests

  exportTo.CDSUtils = {
    objectsToMap: objectsToMap,
    createElement: createElement,
    range: range,
    removeChildNodes: removeChildNodes,
    isDescendantOf: isDescendantOf,
    getDimensions: getDimensions,
    windowHeight: windowHeight,
    floor_to_interval: floor_to_interval,
    findFirstChildElementByTagName: findFirstChildElementByTagName
  };
  exportTo.CDSDate = CDSDate;
  exportTo.CDSLocaleProvider = CDSLocaleProvider;
  exportTo.CalendarDateSelect = CalendarDateSelect; // Exports to window when in the browser or module.exports for Jest tests
})(typeof window !== 'undefined' ? window : module.exports);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/calendar_date_select.js");
/******/ 	
/******/ })()
;