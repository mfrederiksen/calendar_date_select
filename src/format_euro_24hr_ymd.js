// Formats date and time as "2000.01.20 17:00"
class Euro24YMDDate extends CDSDate {

   constructor(...args) {
      super(...args);
   }

   toFormattedString(include_time) {
      let str = this.getFullYear() + "." + Euro24YMDDate.padded2(this.getMonth()+1) + "." + Euro24YMDDate.padded2(this.getDate());
      if (include_time) { str += " " + this.getHours() + ":" + this.getPaddedMinutes() }
      return str;
   }
}

CalendarDateSelect.DATE_CLASS = Euro24YMDDate;
