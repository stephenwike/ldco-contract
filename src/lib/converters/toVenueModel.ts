import { InstructorDTO } from "../../types/dto/instructor.dto";
import { LessonDTO } from "../../types/dto/lesson.dto";
import { VenueDTO } from "../../types/dto/venue.dto";
import { VenueModel } from "../../types/model/venue.model";
import { toLessonModel } from "./toLessonModel";

export function toVenueModel(
    venueDTO: VenueDTO,
    lessonMap: Record<string, LessonDTO>,
    instructorMap: Record<string, InstructorDTO>
): VenueModel {
    const expandedLessons = venueDTO.lessonsIds
        .map(id => toLessonModel(lessonMap[id], instructorMap))
        .filter(Boolean);

    return {
        ...venueDTO,
        lessons: expandedLessons,
    };
}
