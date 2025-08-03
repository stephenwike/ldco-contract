export interface LessonEntity {
    _id: string;
    venueid: string;
    title: string;
    description: string;
    lessonday: string;
    lessonstart: string;
    instructors: string[];
    duration: string;
    lessoncost: string;
    notes: string;
    difficulty: string;
}
