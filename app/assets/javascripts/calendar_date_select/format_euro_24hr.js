// Formats date and time as "01 January 2000 17:00"
class Euro24Date extends CDSDate {

   constructor(...args) {
      super(...args);
   }

   toFormattedString(include_time) {
      let str = Euro24Date.padded2(this.getDate()) + " " + this.getCurrentMonthName() + " " + this.getFullYear();
      if (include_time) { str += " " + this.getHours() + ":" + this.getPaddedMinutes() }
      return str;
   }
}

CalendarDateSelect.DATE_CLASS = Euro24Date;
