import { InstructorDTO } from "../../types/dto/instructor.dto";
import { LessonDTO } from "../../types/dto/lesson.dto";
import { LessonModel } from "../../types/model/lesson.model";

export function toLessonModel(
  lessonDTO: LessonDTO,
  instructorMap: Record<string, InstructorDTO>
): LessonModel {

  return {
    id: lessonDTO.id,
    lessonday: lessonDTO.lessonday,
    lessonstart: lessonDTO.lessonstart,
    instructors: lessonDTO.instructors.map(id => instructorMap[id]).filter(Boolean), // TODO: Do I need the converter?
    duration: lessonDTO.duration,
    lessoncost: lessonDTO.lessoncost,
    notes: lessonDTO.notes,
    difficulty: lessonDTO.difficulty,
  };
}
