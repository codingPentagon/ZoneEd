import {Teacher} from "./teacher.model";

export interface ReliefSlotCandidates{
  period: number;
  className: string;
  availableTeachers: Teacher[];
  allocatedTeacher: Teacher;
}
