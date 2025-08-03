import { LessonDTO } from "../../types/dto/lesson.dto";
import { LessonEntity } from "../../types/entities/lesson.entity";

export function toLessonDTO(
  LessonEntity: LessonEntity,
  isVerified: boolean
): LessonDTO {

  return {
    id: LessonEntity._id,
    lessonday: LessonEntity.lessonday,
    lessonstart: LessonEntity.lessonstart,
    instructors: LessonEntity.instructors,
    duration: LessonEntity.duration,
    lessoncost: LessonEntity.lessoncost,
    notes: LessonEntity.notes,
    difficulty: LessonEntity.difficulty,
    isVerified: isVerified
  };
}
