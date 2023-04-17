import {Teacher} from "./teacher.model";

export interface ReliefSlotCandidates{
  period: number;
  className: string;
  availableTeachers: Teacher[];
  allocatedTeacherID: number;
}

export interface ReliefRecord{
  id: number;
  className: string;
  period: number;
  allocatedTeacherID: number;
  date: Date;
  reliefSubject: string;
  sclID: number;
}
