(function(exportTo) {
  /**
   * Creates an element with given options and style, appending it to the parent.
   * @param {Element} parent Parent element
   * @param {string} tagName Element type
   * @param {object} [options] Element options
   * @param {object} [style] Element style options
   * @returns {Element} The element
   */
  function createElement(parent, tagName, options, style) {
    let newElement = document.createElement(tagName);
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
    let foundNode = null;
    if (element.hasChildNodes()) {
      for (let child of element.children) {
        foundNode = findFirstChildElementByTagName(child, tagName);
        if (foundNode) break;
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
    let arr = [];
    for (let i = start; i <= end; i++)
      arr.push(i);
    return arr;
  }

  /**
   * Converts one or more objects into a Map, using own properties for keys and values.  Multiple objects
   * are merged into a single Map with the last key winning
   * @param {...(object|Map)} objs 1 or more Objects to be merged into a Map
   * @returns {Map}
   */
  function objectsToMap(...objs) {
    return objs.reduce((previous, current) => {
      const second = current instanceof Map ? current : Object.entries(current);
      return new Map([...previous, ...second]);
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
    let result;
    if (element.style.display === 'none') {
      let {visibility, position, display} = element.style;
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      result = fn(element)
      Object.assign(element.style, {visibility, position, display});
    } else {
      result = fn(element)
    }
    return result;
  }

  /**
   * Calculates the cumulative offset from the top-left of a page to the element
   * @param {Element} element Target element
   * @returns {{top: number, left: number}}
   */
  function cumulativeOffset(element) {
    let top = 0;
    let left = 0;
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      if (element.offsetParent === document.body)
        if (element.style.position === 'absolute') break;
      element = element.offsetParent;
    } while (element);
    return { left, top };
  }

  /**
   * Calculates an elements cumulative offset relative to its closest positioned ancestor.
   * @param {Element} element Target element
   * @returns {{top: number, left: number}}
   */
  function positionedOffset(element) {
    let top = 0
    let left = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (element.tagName.toUpperCase() === 'BODY') break;
        if (element.style.position !== 'static') break;
      }
    } while (element);
    return { left, top };
  }

  /**
   * Returns the offset width and height of an element
   * @param {Element} element Target element
   * @returns {{width: number, height: number}}
   */
  function getDimensions(element) {
    return temporarilyDisplayElement(element, e => {
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
  class CDSLocaleProvider {
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
    constructor(weekdays, monthNames, firstDayOfWeek, translations) {
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
    getMonthName(m) {
      return this.monthNames[m];
    }

    /**
     * Returns the translated key
     * @param {string} key Key to translate
     * @returns {string}
     */
    translate(key) {
      return this.translations[key];
    }
  }

  /**
   * Date handling functions for CDS
   */
  class CDSDate extends Date {
    static #ONE_DAY = 24 * 60 * 60 * 1000;

    /**
     * @param {any} args passed to Date constructor
     */
    constructor(...args) {
      super(...args);
    }

    /**
     * Left-pads a number < 10 with leading 0
     * @param {number|string} n
     * @returns {string}
     */
    static padded2(n) {
      const nInt = parseInt(n, 10);
      return (nInt < 10) ? "0" + nInt : "" + nInt;
    }

    /**
     * Parses a date string returning a new instance of CDSDate
     * @param {string} string Date string
     * @returns {CDSDate}
     */
    static parseFormattedString(string) {
      return new CDSDate(string);
    }

    /**
     * Gets the localized name for the current month
     * @returns {string} Date string
     */
    getCurrentMonthName() {
      return CalendarDateSelect.LOCALE_PROVIDER.getMonthName(this.getMonth());
    }

    /**
     * Gets the current minutes, left padded
     * @returns {string}
     */
    getPaddedMinutes() {
      return CDSDate.padded2(this.getMinutes());
    }

    /**
     * Returns the current hour in 12-hour format (1 - 12)
     * @returns {number}
     */
    getAMPMHour() {
      const hour = this.getHours();
      return (hour === 0) ? 12 : (hour > 12 ? hour - 12 : hour)
    }

    /**
     * Returns AM or PM based on the current time
     * @returns {string}
     */
    getAMPM() {
      return (this.getHours() < 12) ? "AM" : "PM";
    }

    /**
     * Clones the current instance and sets the current time to the beginning of the day
     * @returns {CDSDate} A new date instance
     */
    stripTime() {
      const d = this.clone();
      d.setHours(0, 0, 0, 0);
      return d;
    }

    /**
     * Returns the number of days between 2 dates
     * @param {Date} compare_date
     * @returns {number}
     */
    daysDistance(compare_date) {
      return Math.round((compare_date - this) / CDSDate.#ONE_DAY);
    }

    /**
     * Formats the date to a string
     * @param {boolean} include_time When true, includes the time component
     * @returns {string}
     */
    toFormattedString(include_time) {
      let str = this.getCurrentMonthName() + " " + this.getDate() + ", " + this.getFullYear();
      if (include_time) {
        str += " " + this.getAMPMHour() + ":" + this.getPaddedMinutes() + " " + this.getAMPM()
      }
      return str;
    }

    /**
     * Clones the current instance
     * @return {CDSDate}
     */
    clone() {
      return new this.constructor(this);
    }

    /**
     * Returns the current hour formatted for a dropdown
     * @return {string}
     */
    getHourForDropdown() {
      return this.getAMPMHour()+ " " + this.getAMPM();
    }
  }

  class SelectBox {
    constructor(parent_element, values, html_options) {
      this.element = createElement(parent_element, "select", html_options);
      this.populate(values);
    }

    populate(values) {
      removeChildNodes(this.element);
      values.forEach(pair => {
        if (typeof (pair) != "object") {
          pair = [pair, pair]
        }
        createElement(this.element, "option", {value: pair[1], innerHTML: pair[0]});
      });
    }

    setValue(value) {
      let e = this.element;
      let matched = false;
      range(0, e.options.length - 1).forEach(i => {
        if (e.options[i].value === value.toString()) {
          e.selectedIndex = i;
          matched = true;
        }
      });
      return matched;
    }

    getValue() {
      const index = this.element.selectedIndex;
      if (index < 0) return null;
      const opt = this.element.options[index];
      return opt.hasAttribute('value') ? opt.value : opt.text;
    }
  }

  class CalendarDateSelect {

    static DATE_CLASS = CDSDate;
    static LOCALE_PROVIDER = new CDSLocaleProvider(
      "S M T W T F S".split(' '),
      "January February March April May June July August September October November December".split(' '),
      0,
      {
        OK: "OK",
        Now: "Now",
        Today: "Today",
        Clear: "Clear"
      }
    );

    constructor(target_element, options) {
      this.locale = CalendarDateSelect.LOCALE_PROVIDER;

      this.target_element = target_element;
      if (!this.target_element) {
        console.error("Target element " + target_element + " not found!");
        return false;
      }
      if (this.target_element.tagName !== "INPUT") this.target_element = findFirstChildElementByTagName(this.target_element,"INPUT");

      this.target_element.calendar_date_select = this;
      this.last_click_at = 0;
      // initialize the date control
      this.options = objectsToMap({
        content_container: null,
        calendar_parent: null,
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
        onchange: (target_element => {
          return () => {
            if(target_element.dispatchEvent) {
              const event = document.createEvent('HTMLEvents');
              event.initEvent('change', true, true);
              target_element.dispatchEvent(event);
            } else {
              const event = document.createEventObject();
              event.type='onChange';
              target_element.fireEvent('onChange', event);
            }
          };
        })(this.target_element),
        valid_date_check: null
      }, options || {});
      this.use_time = this.options.get("time");
      this.parseDate();
      this.callback("before_show");
      this.initCalendarDiv();
      if (!this.options.get("embedded")) {
        this.positionCalendarDiv();

        this.closeIfClickedOutListener = this.closeIfClickedOut.bind(this);
        this.keyPressListener = this.keyPress.bind(this);

        // set the click handler to check if a user has clicked away from the document
        document.addEventListener("mousedown", this.closeIfClickedOutListener);
        document.addEventListener("keydown", this.keyPressListener);
      }
      this.callback("after_show");
    }

    newDate(...args) {
      return new CalendarDateSelect.DATE_CLASS(...args);
    }

    positionCalendarDiv() {
      const c_height = getDimensions(this.calendar_div).height;

      const e_dim = positionedOffset(this.options.get("popup_by"));
      const e_top = e_dim.top;
      const e_left = e_dim.left;

      const e_height = getDimensions(this.options.get("popup_by")).height;
      const e_bottom = e_top + e_height;

      const w_top  = this.options.has('content_container') ? this.options.get('content_container').scrollTop : windowScrollTop();

      const parent_top = this.options.has('calendar_parent') ? cumulativeOffset(this.options.get('calendar_parent')).top : 0;

      const thereIsNoSpaceBelowInput = (parent_top + e_bottom + c_height) > (w_top + windowHeight());
      const thereIsSpaceAboveInput = (parent_top + e_bottom - c_height) > w_top;
      const above = thereIsNoSpaceBelowInput && thereIsSpaceAboveInput;

      const left_px = e_left.toString() + "px";
      const top_px = (above ? (e_top - c_height) : (e_top + e_height)).toString() + "px";

      this.calendar_div.style.left = left_px;
      this.calendar_div.style.top = top_px;
      this.calendar_div.style.visibility = "";
    }

    initCalendarDiv() {
      let parent, style;
      if (this.options.get("embedded")) {
        parent = this.target_element.parentNode;
        style = {};
      } else {
        parent = this.options.has('calendar_parent') ? this.options.get('calendar_parent') : document.body;
        style = {position: "absolute", visibility: "hidden", left: 0, top: 0};
      }
      this.calendar_div = createElement(parent, 'div', {className: "calendar_date_select"}, style);

      // create the divs
      "top header body buttons footer bottom".split(' ').reduce((that, name) => {
        that[name + '_div'] = createElement(that.calendar_div, 'div', {className: 'cds_' + name}, {clear: 'left'});
        return that;
      }, this);

      this.initHeaderDiv();
      this.initButtonsDiv();
      this.initCalendarGrid();
      this.updateFooter("&#160;");

      this.refresh();
      this.setUseTime(this.use_time);
    }

    initHeaderDiv() {
      let header_div = this.header_div;
      this.close_button = createElement(header_div, "a", {
        innerHTML: "x",
        href: "#",
        onclick: () => {
          this.close();
          return false;
        },
        className: "close"
      });
      this.next_month_button = createElement(header_div, "a", {
        innerHTML: "&gt;",
        href: "#",
        onclick: () => {
          this.navMonth(this.date.getMonth() + 1);
          return false;
        },
        className: "next"
      });
      this.prev_month_button = createElement(header_div, "a", {
        innerHTML: "&lt;",
        href: "#",
        onclick: () => {
          this.navMonth(this.date.getMonth() - 1);
          return false;
        },
        className: "prev"
      });

      if (this.options.get("month_year") === "dropdowns") {
        this.month_select = new SelectBox(header_div, range(0, 11).map(m => [this.locale.getMonthName(m), m]), {
          className: "month",
          onchange: () => this.navMonth(this.month_select.getValue())
        });
        this.year_select = new SelectBox(header_div, [], {
          className: "year",
          onchange: () => this.navYear(this.year_select.getValue())
        });
        this.populateYearRange();
      } else {
        this.month_year_label = createElement(header_div, "span")
      }
    }

    initCalendarGrid() {
      let body_div = this.body_div;
      this.calendar_day_grid = [];
      let days_table = createElement(body_div, "table", {cellPadding: "0px", cellSpacing: "0px", width: "100%"});
      let weekdays_row = createElement(createElement(days_table, "thead"), "tr");
      this.locale.weekdays.forEach(weekday => createElement(weekdays_row, "th", {innerHTML: weekday}));

      let days_tbody = createElement(days_table, "tbody")
      // Make the days!
      let row_number = 0, weekday;
      let days_row;
      for (let cell_index = 0; cell_index < 42; cell_index++) {
        weekday = (cell_index + this.locale.firstDayOfWeek) % 7;
        if (cell_index % 7 === 0) {
          days_row = createElement(days_tbody, "tr", {className: 'row_' + row_number++});
        }

        this.calendar_day_grid[cell_index] = createElement(days_row, "td", {
            calendar_date_select: this,
            onmouseover: function () {
              this.calendar_date_select.dayHover(this);
            },
            onmouseout: function () {
              this.calendar_date_select.dayHoverOut(this)
            },
            onclick: function () {
              this.calendar_date_select.updateSelectedDate(this, true);
            },
            className: (weekday === 0) || (weekday === 6) ? " weekend" : "" //clear the class
          },
          {cursor: "pointer"}
        );
        createElement(this.calendar_day_grid[cell_index], "div");
      }
    }

    initButtonsDiv() {
      const buttons_div = this.buttons_div;
      if (this.options.get("time")) {
        let blank_time = this.options.get("time") === "mixed" ? [[" - ", ""]] : [];
        createElement(buttons_div, "span", {innerHTML: "@", className: "at_sign"});

        let t = this.newDate();
        this.hour_select = new SelectBox(
          buttons_div,
          blank_time.concat(
            range(0, 23).map(x => {
              t.setHours(x);
              return [t.getHourForDropdown(), x]
            })
          ),
          {
            onchange: (e) => {
              this.updateSelectedDate({hour: e.target.value});
            },
            className: "hour"
          }
        );
        createElement(buttons_div, "span", {innerHTML: ":", className: "seperator"});
        this.minute_select = new SelectBox(
          buttons_div,
          blank_time.concat(
            range(0, 59).filter(x => (x % this.options.get('minute_interval')) === 0).map(x => [CalendarDateSelect.DATE_CLASS.padded2(x), x])
          ),
          {
            onchange: (e) => {
              this.updateSelectedDate({minute: e.target.value})
            },
            className: "minute"
          }
        );

      } else if (!this.options.get("buttons")) {
        buttons_div.remove();
      }

      if (this.options.get("buttons")) {
        createElement(buttons_div, "span", {innerHTML: "&#160;"});
        if (this.options.get("time") === "mixed" || !this.options.get("time")) {
          createElement(buttons_div, "a", {
            innerHTML: this.locale.translate("Today"),
            href: "#",
            onclick: () => {
              this.today(false);
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
            onclick: () => {
              this.today(true);
              return false
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
            onclick: () => {
              this.close();
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
            onclick: () => {
              this.clearDate();
              if (!this.options.get("embedded")) this.close();
              return false;
            }
          });
        }
      }
    }

    refresh() {
      this.refreshMonthYear();
      this.refreshCalendarGrid();

      this.setSelectedClass();
      this.updateFooter();
    }

    refreshCalendarGrid() {
      this.beginning_date = this.newDate(this.date).stripTime();
      this.beginning_date.setDate(1);
      this.beginning_date.setHours(12); // Prevent daylight savings time boundaries from showing a duplicate day
      let pre_days = this.beginning_date.getDay() // draw some days before the fact
      if (pre_days < 3) pre_days += 7;
      this.beginning_date.setDate(1 - pre_days + this.locale.firstDayOfWeek);

      const iterator = this.newDate(this.beginning_date);

      const today = this.newDate().stripTime();
      const this_month = this.date.getMonth();
      const vdc = this.options.get("valid_date_check");
      for (let cell_index = 0; cell_index < 42; cell_index++) {
        const day = iterator.getDate();
        const month = iterator.getMonth();
        const cell = this.calendar_day_grid[cell_index];
        removeNode(cell.childNodes[0]);
        const div = createElement(cell, "div", {innerHTML: day});
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

      let days_until;
      if (range(0, 41).includes(days_until = this.beginning_date.stripTime().daysDistance(today))) {
        this.today_cell = this.calendar_day_grid[days_until];
        this.today_cell.classList.add('today');
      }
    }

    refreshMonthYear() {
      const y = this.date.getFullYear();
      // set the month
      if (this.options.get("month_year") === "dropdowns") {
        this.month_select.setValue(this.date.getMonth(), false);

        let e = this.year_select.element;
        if (this.flexibleYearRange() && (!(this.year_select.setValue(y, false)) || e.selectedIndex <= 1 || e.selectedIndex >= e.options.length - 2)) this.populateYearRange();

        this.year_select.setValue(y);

      } else {
        this.month_year_label.innerHTML = this.date.getCurrentMonthName() + " " + y.toString();
      }
    }

    populateYearRange() {
      this.year_select.populate(this.yearRange());
    }

    yearRange() {
      if (!this.flexibleYearRange())
        return range(this.options.get("year_range")[0], this.options.get("year_range")[1]);

      const y = this.date.getFullYear();
      return range(y - this.options.get("year_range"), y + this.options.get("year_range"));
    }

    flexibleYearRange() {
      return (typeof this.options.get("year_range") === "number");
    }

    validYear(year) {
      if (this.flexibleYearRange()) {
        return true;
      } else {
        return this.yearRange().includes(year);
      }
    }

    dayHover(element) {
      const hover_date = this.newDate(this.selected_date);
      hover_date.setYear(element.year);
      hover_date.setMonth(element.month);
      hover_date.setDate(element.day);
      this.updateFooter(hover_date.toFormattedString(this.use_time));
    }

    dayHoverOut() {
      this.updateFooter();
    }

    clearSelectedClass() {
      if (this.selected_cell) {
        this.selected_cell.classList.remove('selected');
      }
    }

    setSelectedClass() {
      if (!this.selection_made) return;
      this.clearSelectedClass()
      let days_until;
      if (range(0, 42).includes(days_until = this.beginning_date.stripTime().daysDistance(this.selected_date.stripTime()))) {
        this.selected_cell = this.calendar_day_grid[days_until];
        this.selected_cell.classList.add('selected');
      }
    }

    reparse() {
      this.parseDate();
      this.refresh();
    }

    dateString() {
      return (this.selection_made) ? this.selected_date.toFormattedString(this.use_time) : "&#160;";
    }

    parseDate() {
      const value = this.target_element.value.trim();
      const default_time = this.options.get("default_time");
      this.selection_made = value !== "" ? true : typeof default_time !== 'undefined';
      this.date = value === "" ? NaN : CalendarDateSelect.DATE_CLASS.parseFormattedString(this.options.get("date") || value);
      if (isNaN(this.date) && !default_time) {
        this.date = this.newDate();
      } else if (isNaN(this.date) && default_time) {
        this.date = (Object.prototype.toString.apply(default_time) === '[object Function]') ? default_time() : default_time;
      }
      const range = this.yearRange();
      const rangeStart = range[0];
      const rangeEnd = range[range.length - 1];
      if (!this.validYear(this.date.getFullYear())) {
        this.date.setYear((this.date.getFullYear() < rangeStart) ? rangeStart : rangeEnd);
      }
      this.selected_date = this.newDate(this.date);
      this.use_time = /[0-9]:[0-9]{2}/.exec(value) ? true : false;
      this.date.setDate(1);
    }

    updateFooter(text) {
      if (!text) text = this.dateString();
      removeChildNodes(this.footer_div);
      createElement(this.footer_div, "span", {innerHTML: text});
    }

    clearDate() {
      if ((this.target_element.disabled || this.target_element.readOnly) && this.options.get("popup") !== "force") return false;
      const last_value = this.target_element.value;
      this.target_element.value = "";
      this.clearSelectedClass();
      this.updateFooter('&#160;');
      if (last_value !== this.target_element.value) {
        this.callback("onchange");
      }
    }

    updateSelectedDate(partsOrElement, via_click) {
      const parts = objectsToMap(partsOrElement);
      if ((this.target_element.disabled || this.target_element.readOnly) && this.options.get("popup") !== "force") return false;
      if (parts.get("day")) {
        const t_selected_date = this.selected_date;
        const vdc = this.options.get("valid_date_check");
        t_selected_date.setFullYear(parts.get("year"), parts.get("month"), parts.get("day"));

        if (vdc && ! vdc(t_selected_date.stripTime())) {
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
        if ((this.newDate() - this.last_click_at) < 333) this.close();
        this.last_click_at = this.newDate();
      }
    }

    closeOnClick() {
      if (this.options.get("embedded")) return false;
      if (this.options.get("close_on_click") === null)
        return !this.options.get("time");
      else
        return this.options.get("close_on_click");
    }

    navMonth(month) {
      const target_date = this.newDate(this.date);
      target_date.setMonth(month);
      return this.navTo(target_date);
    }

    navYear(year) {
      const target_date = this.newDate(this.date);
      target_date.setFullYear(year);
      return this.navTo(target_date);
    }

    navTo(date) {
      if (!this.validYear(date.getFullYear())) return false;
      this.date = date;
      this.date.setDate(1);
      this.refresh();
      this.callback("after_navigate", this.date);
      return true;
    }

    setUseTime(turn_on) {
      this.use_time = this.options.get("time") && (this.options.get("time") === "mixed" ? turn_on : true) // force use_time to true if time==true && time!="mixed"
      if (this.use_time && this.selected_date) { // only set hour/minute if a date is already selected
        let minute = floor_to_interval(this.selected_date.getMinutes(), this.options.get("minute_interval"));
        let hour = this.selected_date.getHours();

        this.hour_select.setValue(hour);
        this.minute_select.setValue(minute)
      } else if (this.options.get("time") === "mixed") {
        this.hour_select.setValue("");
        this.minute_select.setValue("");
      }
    }

    updateValue() {
      let last_value = this.target_element.value;
      this.target_element.value = this.dateString();
      if (last_value !== this.target_element.value) this.callback("onchange");
    }

    today(now) {
      const d = this.newDate();
      this.date = this.newDate();
      const o = objectsToMap({
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

    close() {
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

    closeIfClickedOut(e) {
      if (!isDescendantOf(e.target, this.calendar_div)) this.close();
    }

    keyPress(e) {
      if (e.key === 'Escape' || e.key === 'Esc') this.close();
    }

    callback(name, param) {
      if (this.options.get(name)) {
        this.options.get(name).bind(this.target_element)(param);
      }
    }
  }

  // Expose for unit tests
  exportTo.CDSUtils = { objectsToMap, createElement, range, removeChildNodes, isDescendantOf, getDimensions, windowHeight, floor_to_interval, findFirstChildElementByTagName };

  exportTo.CDSDate = CDSDate;
  exportTo.CDSLocaleProvider = CDSLocaleProvider;
  exportTo.CalendarDateSelect = CalendarDateSelect;

  // Exports to window when in the browser or module.exports for Jest tests
})(typeof window !== 'undefined' ? window : module.exports);