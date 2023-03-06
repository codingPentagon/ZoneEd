export interface Schedule {
  id:number,
  teacherID:number,
  year:number,
  schedule:SchedulePeriod[]
}


export interface SchedulePeriod {
  period: number,
  mon: string,
  tue: string,
  wed: string,
  thu: string,
  fri: string
}


