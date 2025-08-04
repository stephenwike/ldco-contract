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

  // Handle Tracks
  const tracks = dto.tracks
    .map(id => {
      const track = trackMap[id];
      if (!track) {
        console.warn(`Track not found for ID: ${id} in dance "${dto.danceName}"`);
      }
      return track;
    })
    .filter(Boolean)
    .map(toTrackModel);

  // Handle Choreographers
  const choreographers = dto.choreographers
    .map(id => {
      const choreographer = choreographerMap[id];
      if (!choreographer) {
        console.warn(`Choreographer not found for ID: ${id} in dance "${dto.danceName}"`);
      }
      return choreographer;
    })
    .filter(Boolean)
    .map(toChoreographerModel);

  // Handle Primary Track
  const primaryTrackDTO = trackMap[dto.primaryTrack];
  if (!primaryTrackDTO) {
    console.warn(`Primary track not found for dance: "${dto.danceName}" (primaryTrack ID: ${dto.primaryTrack})`);
  }
  const primaryTrack = primaryTrackDTO ? toTrackModel(primaryTrackDTO) : null;

  // Return a valid DanceModel even if some data is incomplete
  return {
    id: dto.id,
    danceName: dto.danceName,
    choreographers: choreographers,
    stepsheet: dto.stepsheet,
    difficulty: dto.difficulty,
    primaryTrack: primaryTrack,
    tracks: tracks,
    isVerified: dto.isVerified,
  };
}
