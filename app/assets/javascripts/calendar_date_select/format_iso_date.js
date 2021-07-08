// International date format (ISO 8601): yyyy-mm-dd
// Including time (no seconds): yyyy-mm-dd HH:MM
class ISODate extends CDSDate {

  constructor(...args) {
    super(...args);
  }

  // TODO: take care of timezone offsets
  // as the timezone is not displayed in the input,
  // this could be tricky (or just unnessesary)
  static parseFormattedString(string) {
    const regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
      "([T| ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +
      "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
    const d = string.match(new RegExp(regexp));

    const date = new ISODate(d[1], 0, 1);

    if (d[3]) {
      date.setMonth(d[3] - 1);
    }
    if (d[5]) {
      date.setDate(d[5]);
    }
    if (d[7]) {
      date.setHours(d[7]);
    }
    if (d[8]) {
      date.setMinutes(d[8]);
    }
    return date;
  }

  toFormattedString(include_time) {
    var str = this.getFullYear() + "-" + ISODate.padded2(this.getMonth() + 1) + "-" + ISODate.padded2(this.getDate());
    if (include_time) {
      const hour = ISODate.padded2(this.getHours());
      str += " " + hour + ":" + this.getPaddedMinutes();
    }
    return str;
  }
}

CalendarDateSelect.DATE_CLASS = ISODate;
