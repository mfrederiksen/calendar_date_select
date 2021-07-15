const { CalendarDateSelect, CDSLocaleProvider, CDSDate } = require("../app/assets/javascripts/calendar_date_select/calendar_date_select");

const testMonths = 'JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'.split(' ');

describe("CDSDate", () => {
  beforeAll(() => {
    CalendarDateSelect.LOCALE_PROVIDER = new CDSLocaleProvider([], testMonths, 0, {});
  })
  describe("padded2", () => {
    test("it should pad numbers < 10", () => {
      expect(CDSDate.padded2(0)).toEqual('00');
      expect(CDSDate.padded2(9)).toEqual('09');
    });
    test("it should not pad numbers >= 10", () => {
      expect(CDSDate.padded2(10)).toEqual('10');
      expect(CDSDate.padded2(101)).toEqual('101');
    });
  });
  describe("parseFormattedString", () => {
    test("it should parse a string to the correct date", () => {
      const d = CDSDate.parseFormattedString('July 12, 2021 23:24:25');
      expect(d.getMonth()).toBe(6);
      expect(d.getDate()).toBe(12);
      expect(d.getFullYear()).toBe(2021);
      expect(d.getHours()).toBe(23);
      expect(d.getMinutes()).toBe(24);
      expect(d.getSeconds()).toBe(25);
      expect(d.getMilliseconds()).toBe(0);
    });
  });
  describe("constructor", () => {
    test("it should forward constructor args to super", () => {
      const d = new Date(2021, 6, 12);
      expect(new CDSDate(d)).toEqual(d);
      expect(new CDSDate(2021, 6, 12)).toEqual(d);
    });
  });
  describe("getCurrentMonthName", () => {
    test("it should return the localized current month name", () => {
      expect(new CDSDate(2021, 6, 12).getCurrentMonthName()).toBe(testMonths[6]);
    });
  });
  describe("getPaddedMinutes", () => {
    test("it should return the current minutes padded", () => {
      expect(new CDSDate(2021, 6, 12, 1, 9, 0).getPaddedMinutes()).toBe('09');
    });
  });
  describe("getAMPM", () => {
    test("it should return AM for hours < 12", () => {
      expect(new CDSDate(2021, 6, 12, 11, 9, 0).getAMPM()).toBe('AM');
    });
    test("it should return PM for hours >= 12", () => {
      expect(new CDSDate(2021, 6, 12, 12, 9, 0).getAMPM()).toBe('PM');
    });
  });
  describe("getAMPMHour", () => {
    test("it should start at 12", () => {
      expect(new CDSDate(2021, 6, 12, 0, 9, 0).getAMPMHour()).toBe(12);
    });
    test("it should return the unmodified hour before 13:00", () => {
      expect(new CDSDate(2021, 6, 12, 12, 9, 0).getAMPMHour()).toBe(12);
    });
    test("it should wrap around to 1 after 13:00", () => {
      expect(new CDSDate(2021, 6, 12, 13, 9, 0).getAMPMHour()).toBe(1);
    });
  });
  describe("stripTime", () => {
    test("it should return a new instance", () => {
      const d = new CDSDate(2021, 6, 12, 0, 9, 0);
      expect(d.stripTime()).not.toBe(d);
    });
    test("it should 0 out all time components", () => {
      const d = new CDSDate(2021, 6, 12, 12, 9, 1, 99).stripTime();
      expect(d.getFullYear()).toBe(2021);
      expect(d.getMonth()).toBe(6);
      expect(d.getDate()).toBe(12);
      expect(d.getHours()).toBe(0);
      expect(d.getMinutes()).toBe(0);
      expect(d.getSeconds()).toBe(0);
      expect(d.getMilliseconds()).toBe(0);
    });
  });
  describe("daysDistance", () => {
    test("it should handle the same day", () => {
      const d = new CDSDate(2021, 6, 12);
      expect(d.daysDistance(d)).toBe(0);
    });
    test("it should handle 1 day", () => {
      expect(new CDSDate(2021, 6, 12).daysDistance(new CDSDate(2021, 6, 13))).toBe(1);
    });
    test("it should handle multiple months and years", () => {
      expect(new CDSDate(2021, 0, 0).daysDistance(new CDSDate(2022, 2, 31))).toBe(455);
    });
    test("it should handle leap years", () => {
      expect(new CDSDate(2020, 1, 28).daysDistance(new CDSDate(2020, 2, 1))).toBe(2);
    });
    test("it should round down in the AM", () => {
      expect(new CDSDate(2021, 6, 12).daysDistance(new CDSDate(2021, 6, 13, 11))).toBe(1);
    });
    test("it should round up in the PM", () => {
      expect(new CDSDate(2021, 6, 12).daysDistance(new CDSDate(2021, 6, 13, 12))).toBe(2);
    });
  });
  describe("daysDistance", () => {
    test("it should localize and format a date without time", () => {
      expect(new CDSDate(2021, 6, 12, 13, 14, 15).toFormattedString(false)).toBe('JUL 12, 2021');
    });
    test("it should localize and format a date with time", () => {
      expect(new CDSDate(2021, 6, 12, 4, 9, 15).toFormattedString(true)).toBe('JUL 12, 2021 4:09 AM');
    });
  });
});