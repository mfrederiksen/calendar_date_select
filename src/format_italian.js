// Italian Format: 31/12/2000 23:00
// Thanks, Bigonazzi!
class ItalianDate extends CDSDate {

  constructor(...args) {
    super(...args);
  }

  static parseFormattedString(string) {
    const regexp = '([0-9]{1,2})/(([0-9]{1,2})/(([0-9]{4})( ([0-9]{1,2}):([0-9]{2})? *)?)?)?';
    const d = string.match(new RegExp(regexp, "i"));
    if (d == null) return ItalianDate.parse(string); // at least give JavaScript a crack at it.
    const date = new ItalianDate(d[5], 0, 1);
    if (d[3]) {
      date.setMonth(d[3] - 1);
    }
    if (d[5]) {
      date.setDate(d[1]);
    }
    if (d[7]) {
      date.setHours(parseInt(d[7], 10));
    }
    if (d[8]) {
      date.setMinutes(d[8]);
    }
    if (d[10]) {
      date.setSeconds(d[10]);
    }
    return date;
  }

  toFormattedString(include_time) {
    let str = this.getDate() + "/" + (this.getMonth() + 1) + "/" + this.getFullYear();
    if (include_time) {
      str += " " + this.getHours() + ":" + this.getPaddedMinutes()
    }
    return str;
  }
}

CalendarDateSelect.DATE_CLASS = ItalianDate;
