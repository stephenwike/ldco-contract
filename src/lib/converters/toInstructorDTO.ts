import { InstructorDTO } from "../../types/dto/instructor.dto";
import { InstructorEntity } from "../../types/entities/instructor.entity";

export function toInstructorDTO(
    instructor: InstructorEntity,
    isVerified: boolean
): InstructorDTO {

  return {
    id: instructor._id,
    name: instructor.name,
    userid: "leave this this empty for now and figure it out later...",
    isVerified: isVerified
  };
}
