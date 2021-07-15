/**
 * @jest-environment jsdom
 */
require("../app/assets/javascripts/calendar_date_select/calendar_date_select");
const { CalendarDateSelect, CDSLocaleProvider } = window;
const $ = require('jquery');

describe('CalendarDateSelect', () => {

  const DEFAULT_LOCALE_PROVIDER = CalendarDateSelect.LOCALE_PROVIDER;
  const DEFAULT_DATE_CLASS = CalendarDateSelect.DATE_CLASS;

  let cdsTest;
  beforeAll(() => {
    document.body.innerHTML = `
        <div id="cds_test_div">
            <input type="text" id="cds_test" />
        </div>
    `;
    cdsTest = document.getElementById('cds_test');
  });

  beforeEach(() => {
    CalendarDateSelect.LOCALE_PROVIDER = DEFAULT_LOCALE_PROVIDER;
    CalendarDateSelect.DATE_CLASS = DEFAULT_DATE_CLASS;
    cdsTest.disabled = false;
    cdsTest.readOnly = false;
  });

  function testCDS(inputDate, options, testCallback) {
    cdsTest.value = inputDate;
    const cds = new CalendarDateSelect(cdsTest, options);
    testCallback(cds);
    cds.close();
  }

  it('it should handle mixed time with a time component', () => {
    testCDS("January 2, 2007 5:00 pm", {time: "mixed"}, cds => {
      expect(cds.use_time).toBe(true);
    });
  });
  it('it should handle midnight', () => {
    testCDS("January 2, 2007 0:00 pm", {time: "mixed"}, cds => {
      expect(cds.use_time).toBe(true);
    });
  });
  it('it should handle mixed time without a time component',() => {
    testCDS("January 2, 2007", {time: "mixed"}, cds => {
      expect(cds.use_time).toBe(false);
    });
  });
  it('it should turn time off in mixed mode when today is clicked',() => {
    testCDS("January 2, 2007 0:00 pm", {time: "mixed"}, cds => {
      const [todayLink] = $(`.cds_buttons a[href='#']`);
      todayLink.click();
      expect(cds.use_time).toBe(false);
    });
  });
  it('it should turn time on in mixed mode when now is clicked',() => {
    testCDS("January 2, 2007", {time: "mixed"}, cds => {
      const [, nowLink] = $(`.cds_buttons a[href='#']`);
      nowLink.click();
      expect(cds.use_time).toBe(true);
    });
  });
  it('it should update the selected date when changed',() => {
    testCDS("Mar 1, 2008", {time: "true"}, cds => {
      cds.updateSelectedDate({month: 2 /*+1*/, day: 23, year: 2008});
      expect($('td.selected div:first')[0].innerHTML).toBe("23");
    });
  });
  it('it should turn time off when setting hours to empty string in mixed mode',() => {
    testCDS("January 1, 2007", {time: "mixed"}, cds => {
      cds.use_time=true;
      cds.updateSelectedDate({hour: ""})
      expect(cds.use_time).toBe(false);
    });
  });
  it('it should turn time off when setting minutes to empty string in mixed mode',() => {
    testCDS("January 1, 2007", {time: "mixed"}, cds => {
      cds.use_time=true;
      cds.updateSelectedDate({minute: ""})
      expect(cds.use_time).toBe(false);
    });
  });
  it('it should turn time on when setting hours to 0 in mixed mode',() => {
    testCDS("January 1, 2007", {time: "mixed"}, cds => {
      cds.use_time=false;
      cds.updateSelectedDate({hour: 0})
      expect(cds.use_time).toBe(true);
    });
  });
  it('it should turn time on when setting minutes to 0 in mixed mode',() => {
    testCDS("January 1, 2007", {time: "mixed"}, cds => {
      cds.use_time=false;
      cds.updateSelectedDate({minute: 0})
      expect(cds.use_time).toBe(true);
    });
  });
  it('it should not change the selected date when updating the navYear',() => {
    testCDS("January 1, 2007", {time: "mixed"}, cds => {
      cds.navYear(1870);
      expect(cds.selected_date.getFullYear()).toBe(2007);
      expect(cds.date.getFullYear()).toBe(1870);
    });
  });
  it('it should not change the selected date when updating the navMonth',() => {
    testCDS("January 1, 2007", {time: "mixed"}, cds => {
      cds.navMonth(5);
      expect(cds.selected_date.getMonth()).toBe(0);
      expect(cds.date.getMonth()).toBe(5);
    });
  });

  it('it should call the before_show callback',() => {
    const before_show = jest.fn();
    testCDS("January 1, 2007", {time: "mixed", before_show}, cds => {
      expect(before_show.mock.calls.length).toBe(1);
    });
  });
  it('it should call the after_show callback',() => {
    const after_show = jest.fn();
    testCDS("January 1, 2007", {time: "mixed", after_show}, cds => {
      expect(after_show.mock.calls.length).toBe(1);
    });
  });
  it('it should call the before_close callback',() => {
    const before_close = jest.fn();
    testCDS("January 1, 2007", {time: "mixed", before_close}, cds => {
      cds.close();
      expect(before_close.mock.calls.length).toBe(1);
    });
  });
  it('it should call the after_close callback',() => {
    const after_close = jest.fn();
    testCDS("January 1, 2007", {time: "mixed", after_close}, cds => {
      cds.close();
      expect(after_close.mock.calls.length).toBe(1);
    });
  });
  it('it should call the after_navigate callback when changing months',() => {
    const after_navigate = jest.fn();
    testCDS("January 1, 2007", {time: "mixed", after_navigate}, cds => {
      cds.navMonth(1);
      expect(after_navigate.mock.calls.length).toBe(1);
    });
  });
  it('it should call the after_navigate callback when changing years',() => {
    const after_navigate = jest.fn();
    testCDS("January 1, 2007", {time: "mixed", after_navigate}, cds => {
      cds.navYear(2008);
      expect(after_navigate.mock.calls.length).toBe(1);
    });
  });
  it('it should call the onchange callback when changing selected date',() => {
    const onchange = jest.fn();
    testCDS("January 1, 2007", {time: "mixed", onchange}, cds => {
      cds.updateSelectedDate({month: 1, day: 3, year: 2007});
      expect(onchange.mock.calls.length).toBe(1);
    });
  });
  it('it should only call onchange when a value was present',() => {
    const onchange = jest.fn();
    testCDS("", {time: "mixed", onchange}, cds => {
      cds.clearDate();
      expect(onchange.mock.calls.length).toBe(0);
      cds.updateSelectedDate({month: 1, day: 3, year: 2007});
      expect(onchange.mock.calls.length).toBe(1);
      cds.clearDate();
      expect(onchange.mock.calls.length).toBe(2);
    });
  });
  it('it should not update the selected date on a disabled input',() => {
    cdsTest.disabled = true;
    testCDS("May 10, 2007", null, cds => {
      cds.updateSelectedDate({day: 1, month: 0, year: 2007});
      expect(cds.selected_date.getDate()).toBe(10);
    });
  });
  it('it should not update the selected date on a readOnly input',() => {
    cdsTest.readOnly = true;
    testCDS("May 10, 2007", null, cds => {
      cds.updateSelectedDate({day: 1, month: 0, year: 2007});
      expect(cds.selected_date.getDate()).toBe(10);
    });
  });
  it('it should update the selected date on a readOnly input when popup is force',() => {
    cdsTest.readOnly = true;
    testCDS("May 10, 2007", {popup: "force"}, cds => {
      cds.updateSelectedDate({day: 1, month: 0, year: 2007});
      expect(cds.selected_date.getDate()).toBe(1);
    });
  });
  it('it should close on click when not using time',() => {
    testCDS("May 10, 2007 5:00 pm", {time:false}, cds => {
      expect(cds.closeOnClick()).toBe(true);
      cds.today();
      expect(cds.closed).toBe(true);
    });
  });
  it('it should not use time when time is false and today called',() => {
    testCDS("May 10, 2007 5:00 pm", {time:false}, cds => {
      cds.today();
      expect(cds.use_time).toBe(false);
    });
  });
  it('it should ignore setUseTime when time is false',() => {
    testCDS("May 10, 2007 5:00 pm", {time:false}, cds => {
      expect(cds.use_time).toBe(false);
      cds.setUseTime(true); // this will close the control
      expect(cds.use_time).toBe(false);
    });
  });
  it('it should floor minutes when not on an interval',() => {
    testCDS("May 10, 2007 5:25 pm", {time:true}, cds => {
      cds.updateSelectedDate({hour: 1, minute: 4});
      expect(cds.selected_date.getMinutes()).toBe(0);
      expect(cds.selected_date.getHours()).toBe(1);
    });
  });
  it('it should interpret blank input as not selected',() => {
    testCDS(" ", {time:true}, cds => {
      const year = new Date().getFullYear();
      expect(cds.selected_date.getFullYear()).toBe(year);
      expect(cds.date.getFullYear()).toBe(year);
      expect(cds.selection_made).toBe(false);
    });
  });
  it('it should keep time enabled when time is true on input with no time component',() => {
    testCDS("December 1, 2007 ", {time:true}, cds => {
      expect(cds.use_time).toBe(true);
    });
  });
  it('it should default to the result of the default_time callback',() => {
    testCDS(" ", {default_time: () => new Date('January 02, 2008 2:00 PM')}, cds => {
      expect(cds.selected_date.getFullYear()).toBe(2008)
      expect(cds.date.getFullYear()).toBe(2008)
      expect(cds.selection_made).toBe(true);
    });
  });
  it('it should default to the date instance from default_time',() => {
    testCDS(" ", {default_time: new Date('January 02, 2007 05:45 PM')}, cds => {
      expect(cds.selected_date.getFullYear()).toBe(2007)
      expect(cds.date.getFullYear()).toBe(2007)
      expect(cds.selection_made).toBe(true);
    });
  });
  it('it should find the first input under the targeted element',() => {
    const cds = new CalendarDateSelect(document.getElementById('cds_test_div'), {time:true});
    expect(cds.target_element.nodeName).toBe('INPUT');
    cds.close();
  });
  it('it should allow for flexible year ranges',() => {
    testCDS("July 4, 1776", {time:true}, cds => {
      expect(cds.flexibleYearRange()).toBe(true);
      expect(cds.year_select.setValue(1776)).toBe(true);
    });
  });
  it('it should not allow you to navigate outside of a year range',() => {
    testCDS("January 1, 2007", {time:true, year_range: [2007, 2007]}, cds => {
      expect(cds.navYear(2006)).toBe(false);
      expect(cds.navYear(2008)).toBe(false);
      expect(cds.navMonth(-1)).toBe(false);
      expect(cds.navMonth(13)).toBe(false);
    });
  });
  it('it should allow you to navigate inside of a year range',() => {
    testCDS("January 1, 2007", {time:true, year_range: [2007, 2007]}, cds => {
      expect(cds.navMonth(1)).toBe(true);
      expect(cds.navYear(2007)).toBe(true);
    });
  });
  it('it should allow you select a year within the range',() => {
    testCDS("January 1, 2007", {time:true, year_range: [2007, 2007]}, cds => {
      expect(cds.year_select.setValue(2007)).toBe(true);
    });
  });
  it('it should initialize to the closest year within the range (below)',() => {
    testCDS("January 1, 1900", {time:true, year_range: [1997, 2007]}, cds => {
      expect(cds.date.getFullYear()).toBe(1997);
    });
  });
  it('it should initialize to the closest year within the range (above)',() => {
    testCDS("January 1, 2010", {time:true, year_range: [1997, 2007]}, cds => {
      expect(cds.date.getFullYear()).toBe(2007);
    });
  });
  it('it should initialize nav date to year when within the range',() => {
    testCDS("January 1, 2005", {year_range: [1997, 2007]}, cds => {
      expect(cds.date.getFullYear()).toBe(2005);
    });
  });
  it('it should initialize nav date to the middle of a year range',() => {
    testCDS("January 1, 2007", {year_range: 10}, cds => {
      cds.navYear(1997);
      expect(cds.year_select.setValue(1987)).toBe(true);
      cds.navYear(2017);
      expect(cds.year_select.setValue(2027)).toBe(true);
    });
  });
  it('it should allow selection of minutes at a multiple of minute interval',() => {
    testCDS("January 1, 2007", {time: true, minute_interval: 10}, cds => {
      expect(cds.minute_select.setValue(0)).toBe(true);
      expect(cds.minute_select.setValue(10)).toBe(true);
      expect(cds.minute_select.setValue(20)).toBe(true);
    });
  });
  it('it should not allow selection of minutes at a non-multiple of minute interval',() => {
    testCDS("January 1, 2007", {time: true, minute_interval: 10}, cds => {
      expect(cds.minute_select.setValue(5)).toBe(false);
    });
  });
  it('it should not allow selection of invlaid dates and should set the correct css',() => {
    testCDS("December 11, 2007", {valid_date_check: date => date < new Date("December 13, 2007"), time: "mixed"}, cds => {
      expect(cdsTest.value).toBe("December 11, 2007");
      cds.updateSelectedDate({day: 13, month: 12 - 1, year: 2007});
      expect(cdsTest.value).toBe("December 11, 2007"); //Date should not have been allowed to be selected
      cds.updateSelectedDate({day: 10, month: 12 - 1, year: 2007});
      expect(cdsTest.value).toBe("December 10, 2007"); //Date should not have been allowed to be selected

      const cdsElements = $('.calendar_date_select td');
      const day_12_element = cdsElements[17];
      const day_13_element = cdsElements[18];
      expect(day_12_element.day).toBe(12); // make sure we have th right one
      expect(day_13_element.day).toBe(13); // make sure we have th right one

      expect($(day_12_element).hasClass("disabled")).toBe(false); // Day 12 shouldnt be disabled
      expect($(day_13_element).hasClass("disabled")).toBe(true); // Day 13 should be disabled
    });
  });
  it('it should show all cells as enabled when no valid date check',() => {
    testCDS("December 11, 2007", null, cds => {
      $('.calendar_date_select td').each(e => expect($(e).hasClass("disabled")).toBe(false));
    });
  });
  it('it should set beginning date to a monday when first day of week is 1',() => {
    CalendarDateSelect.LOCALE_PROVIDER = new CDSLocaleProvider("M T W T F S S".split(' '), [], 1, {});
    testCDS("December 1, 2007", null, cds => {
      expect(cds.beginning_date.getDay()).toBe(1);
    });
  });
  it('it should fire onchange on the input field',() => {
    cdsTest.onchange = jest.fn();
    testCDS("December 1, 2007", {time: "mixed"}, cds => {
      expect(cdsTest.onchange.mock.calls.length).toBe(0);
      const today_now = $(".cds_buttons a[href='#']");
      today_now[0].click();
      expect(cdsTest.onchange.mock.calls.length).toBe(1);
    });
  });
});