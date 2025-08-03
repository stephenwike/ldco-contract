import { InstructorDTO } from "../../types/dto/instructor.dto";
import { InstructorModel } from "../../types/model/instructor.model";

export function toInstructorModel(
    dto: InstructorDTO,  
): InstructorModel {

  return {
    id: dto.id,
    name: dto.name,
    userid: "leave this this empty for now and figure it out later...",
    isVerified: dto.isVerified
  };
}
