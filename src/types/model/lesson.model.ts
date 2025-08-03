import { InstructorModel } from "./instructor.model";

export interface LessonModel {
    id: string;
    lessonday: string;
    lessonstart: string;
    instructors: InstructorModel[];
    duration: string;
    lessoncost: string;
    notes: string;
    difficulty: string;
}
