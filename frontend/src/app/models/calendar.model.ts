export interface CalendarDetail{
  id:number;
  year:number;
  name:string;
  sclID:number;
  status:string;
}

export interface Holiday{
  id:number;
  date:Date;
  title:string;
  calendarID:number
}

export interface SchoolEvent{
  id:number;
  dates:Date[];
  title:string;
  calendarID:number
  lastUpdated:Date;
}
