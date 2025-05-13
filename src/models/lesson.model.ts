export default class Lesson {
    _id!: string;
    venueid!: string;
    lessonday!: string;
    lessonstart!: string;
    instructors!: string[];
    duration?: string;
    lessoncost?: string;
    notes?: string;
    difficulty?: string;
}
