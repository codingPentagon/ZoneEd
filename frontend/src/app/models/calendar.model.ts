export interface SchoolHoliday{
  id:number;
  date:Date;
  title:string;
}

export interface SchoolEvent{
  id:number;
  dates:Date[];
  title:string;
  sclID:number
}
