// Formats date and time as "2000/01/20 17:00"
class DanishDate extends CDSDate {

  constructor(...args) {
    super(...args);
  }

  static parseFormattedString(string) {
    var regexp = "([0-9]{2})/([0-9]{2})/([0-9]{4})" +
      "( ([0-9]{1,2}):([0-9]{2})(:([0-9]{2})(.([0-9]{3}))?)?" +
      ")?";
    const d = string.match(new RegExp(regexp, "i"));
    if (d == null) return DanishDate.parse(string); // at least give JavaScript a crack at it.
    const date = new DanishDate(d[3], 0, 1);
    if (d[2]) {
      date.setMonth(d[2] - 1);
    }
    if (d[1]) {
      date.setDate(d[1]);
    }
    if (d[4]) {
      date.setHours(hours);
    }
    if (d[6]) {
      date.setMinutes(d[6]);
    }
    //if (d[8]) { date.setSeconds(d[7]); }
    //if (d[9]) { date.setMiliseconds(Number("0." + d[8]) * 1000); }

    return date;
  }

  toFormattedString(include_time) {
    let str = DanishDate.padded2(this.getDate()) + "/" + DanishDate.padded2(this.getMonth() + 1) + "/" + this.getFullYear();

    if (include_time) {
      str += " " + this.getHours() + ":" + this.getPaddedMinutes();
    }
    return str;
  }
}

CalendarDateSelect.DATE_CLASS = DanishDate;
