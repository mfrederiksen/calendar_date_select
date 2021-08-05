const { CDSLocaleProvider } = require("../app/assets/javascripts/calendar_date_select/calendar_date_select");

describe("CDSLocaleProvider", () => {
  describe("constructor", () => {
    test("it should make workdays and firstDayOfWeek available for retrieval", () => {
      const w = ['m', 't', 'w'];
      const l = new CDSLocaleProvider(w, [], 99, {});
      expect(l.weekdays).toBe(w);
      expect(l.firstDayOfWeek).toBe(99);
    });
  });
  describe("getMonthName", () => {
    test("it should return the localized name by month-index", () => {
      expect(new CDSLocaleProvider([], ['A', 'B', 'C'], 0, {}).getMonthName(1)).toBe('B');
    });
  });
  describe("translate", () => {
    test("it should return the translation for a given key", () => {
      expect(new CDSLocaleProvider([], [], 0, {A: 'HELLO', B: 'WORLD'}).translate('B')).toBe('WORLD');
    });
  });
});