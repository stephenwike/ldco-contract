import { ChoreographerDTO } from '../../types/dto/choreographer.dto';
import { DanceDTO } from '../../types/dto/dance.dto';
import { TrackDTO } from '../../types/dto/track.dto';
import { DanceModel } from '../../types/model/dance.model';
import { toChoreographerModel } from './toChoreographerModel';
import { toTrackModel } from './toTrackModel';

export function toDanceModel(
  dto: DanceDTO,
  trackMap: Record<string, TrackDTO>,
  choreographerMap: Record<string, ChoreographerDTO>
): DanceModel {

  const tracks = dto.tracks
    .map(id => trackMap[id])
    .filter(Boolean);

  return {
    id: dto.id,
    danceName: dto.danceName,
    choreographers: dto.choreographers.map(id => toChoreographerModel(choreographerMap[id])),
    stepsheet: dto.stepsheet,
    difficulty: dto.difficulty,
    primaryTrack: toTrackModel(trackMap[dto.primaryTrack]),
    tracks: tracks.map(toTrackModel),
    isVerified: dto.isVerified,
  };
}
