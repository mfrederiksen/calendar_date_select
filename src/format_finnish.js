class FinnishDate extends CDSDate {

  constructor(...args) {
    super(...args);
  }

  static padded2(hour) {
    let padded2 = hour.toString();
    if ((parseInt(hour) < 10) || (parseInt(hour) == null))
      padded2 = "0" + padded2;
    return padded2;
  }

  static parseFormattedString(string) {
    const regexp = '([0-9]{1,2})\.(([0-9]{1,2})\.(([0-9]{2,4})( ([0-9]{1,2}):([0-9]{2})? *)?)?)?';
    const d = string.match(new RegExp(regexp, "i"));
    if (d == null) return FinnishDate.parse(string); // at least give JavaScript a crack at it.
    if (d[5] && d[5].length === 2) {
      // we got only two digits for the year...
      d[5] = Number(d[5]);
      if (d[5] > 30)
        d[5] += 1900;
      else
        d[5] += 2000;
    }
    const date = new FinnishDate(d[5], 0, 1);
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

  getAMPMHour() {
    const hour = FinnishDate.padded2(this.getHours());
    return (hour == null) ? 0 : (hour > 24 ? hour - 24 : hour)
  }

  getAMPM() {
    return "";
  }

  toFormattedString(include_time) {
    let str = this.getDate() + "." + (this.getMonth() + 1) + "." + this.getFullYear();
    if (include_time) {
      str += " " + this.getAMPMHour() + ":" + this.getPaddedMinutes();
    }
    return str;
  }
}

CalendarDateSelect.DATE_CLASS = FinnishDate;
