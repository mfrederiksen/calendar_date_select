class HyphenAMPMDate extends CDSDate {

  static parseFormattedString(string) {
    const regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
      "( ([0-9]{1,2}):([0-9]{2})? *(pm|am)" +
      "?)?)?)?";
    const d = string.match(new RegExp(regexp, "i"));
    if (d == null) return HyphenAMPMDate.parse(string); // at least give JavaScript a crack at it.
    const date = new Date(d[1], 0, 1);
    if (d[3]) {
      date.setMonth(d[3] - 1);
    }
    if (d[5]) {
      date.setDate(d[5]);
    }
    if (d[7]) {
      let hours = parseInt(d[7], 10);
      if (d[9]) {
        const is_pm = (d[9].toLowerCase() === "pm");
        if (is_pm && hours <= 11) hours += 12;
        if (!is_pm && hours === 12) hours = 0;
      }
      date.setHours(hours);
    }
    if (d[8]) {
      date.setMinutes(d[8]);
    }
    if (d[10]) {
      date.setSeconds(d[10]);
    }
    if (d[12]) {
      date.setMilliseconds(Number("0." + d[12]) * 1000);
    }

    return date;
  }

  toFormattedString(include_time) {
    let str = this.getFullYear() + "-" + HyphenAMPMDate.padded2(this.getMonth() + 1) + "-" + HyphenAMPMDate.padded2(this.getDate());

    if (include_time) {
      str += " " + this.getAMPMHour() + ":" + this.getPaddedMinutes() + " " + this.getAMPM()
    }
    return str;
  }
}

CalendarDateSelect.DATE_CLASS = HyphenAMPMDate;
