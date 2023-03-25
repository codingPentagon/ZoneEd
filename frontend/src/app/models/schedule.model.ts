export interface Schedule {
  id:number,
  teacherID:number,
  schedule:SchedulePeriod[]
}


export interface SchedulePeriod {
  period: number,
  mon: string | null,
  tue: string | null,
  wed: string | null,
  thu: string | null,
  fri: string | null
}


