// American Format: 12/31/2000 5:00 pm
// Thanks, Wes Hays
class AmericanDate extends CDSDate {

  constructor(...args) {
    super(...args);
  }

  static parseFormattedString(string) {
    // Test these with and without the time
    // 11/11/1111 12pm
    // 11/11/1111 1pm
    // 1/11/1111 10:10pm
    // 11/1/1111 01pm
    // 1/1/1111 01:11pm
    // 1/1/1111 1:11pm
    const regexp = "(([0-1]?[0-9])\/[0-3]?[0-9]\/[0-9]{4}) *(([0-9]{1,2})(:[0-9]{2})? *(am|pm))?";
    string = string.strip();
    const d = string.match(new RegExp(regexp, "i"));
    if (d == null) {
      return AmericanDate.parse(string); // Give JavaScript a chance to parse it.
    }

    const mdy = d[1].split('/');
    let hrs = 0;
    let mts = 0;
    if (d[3] != null && d[3].strip() !== "") {
      hrs = parseInt(d[3], 10);
      if (d[6].toLowerCase() === 'pm') {
        hrs += 12;
      } // Add 12 more to hrs
      mts = d[5].split(':')[1];
    }

    return new AmericanDate(mdy[2], parseInt(mdy[0], 10) - 1, mdy[1], hrs, mts, 0);
  }

  toFormattedString(include_time) {
    let str = AmericanDate.padded2(this.getMonth() + 1) + '/' + AmericanDate.padded2(this.getDate()) + '/' + this.getFullYear();
    if (include_time) {
      str += " " + this.getAMPMHour() + ":" + this.getPaddedMinutes() + " " + this.getAMPM();
    }
    return str;
  }
}

CalendarDateSelect.DATE_CLASS = AmericanDate;
