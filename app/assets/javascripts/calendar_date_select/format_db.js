// DB No Seconds Format: 2007-12-05 12:00
class DBDate extends CDSDate {

  constructor(...args) {
    super(...args);
  }

  static padded2(hour) {
    let padded = hour.toString();
    if ((parseInt(hour) < 10) || (parseInt(hour) == null)) padded = "0" + padded;
    return padded;
  }

  static parseFormattedString(string) {
    const regexp = '([0-9]{4})-(([0-9]{1,2})-(([0-9]{1,2})( ([0-9]{1,2}):([0-9]{2})? *)?)?)?';
    const d = string.match(new RegExp(regexp, "i"));
    if (d == null) return DBDate.parse(string); // at least give JavaScript a crack at it.
    const date = new DBDate(d[1], 0, 1);
    if (d[3]) {
      date.setMonth(d[3] - 1);
    }
    if (d[5]) {
      date.setDate(d[5]);
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

  getAMPMHourfunction() {
    const hour = DBDate.padded2(this.getHours());
    return (hour == null) ? 0 : (hour > 24 ? hour - 24 : hour)
  }

  getAMPM() {
    return "";
  }

  toFormattedString(include_time) {
    let str = this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + DBDate.padded2(this.getDate());
    if (include_time) {
      str += " " + this.getAMPMHour() + ":" + this.getPaddedMinutes()
    }
    return str;
  }
}

CalendarDateSelect.DATE_CLASS = DBDate;
