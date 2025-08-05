import { ChoreographerDTO } from '../../types/dto/choreographer.dto';
import { CollectionDTO } from '../../types/dto/collection.dto';
import { DanceDTO } from '../../types/dto/dance.dto';
import { TrackDTO } from '../../types/dto/track.dto';
import { CollectionModel } from '../../types/model/collection.model';
import { toDanceModel } from './toDanceModel';

export function toCollectionModel(
    dto: CollectionDTO,
    danceMap: Record<string, DanceDTO>,
    trackMap: Record<string, TrackDTO>,
    choreographerMap: Record<string, ChoreographerDTO>
): CollectionModel {
    const dances = dto.dances.map(id => danceMap[id]).filter(Boolean);

    return {
        id: dto.id,
        name: dto.name,
        dances: dances.map(d => toDanceModel(d, trackMap, choreographerMap)),
        isVerified: dto.isVerified,
        createdAt: dto.createdAt,
        updatedAt: dto.updatedAt,
        createdBy: dto.createdBy,
        isCopyable: dto.isCopyable,
        isArchived: dto.isArchived,
        archivedAt: dto.archivedAt,
    };
}
