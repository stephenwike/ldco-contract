import { ChoreographerDTO } from "../../types/dto/choreographer.dto";
import { DanceDTO } from "../../types/dto/dance.dto";
import { TrackDTO } from "../../types/dto/track.dto";
import { DanceModel } from "../../types/model/dance.model";
import { toChoreographerModel } from "./toChoreographerModel";
import { toTrackModel } from "./toTrackModel";

export function toDanceModel(
  dto: DanceDTO,
  trackMap: Record<string, TrackDTO>,
  choreographerMap: Record<string, ChoreographerDTO>
): DanceModel {

  const tracks = dto.tracks
    .map(id => {
      const track = trackMap[id];
      if (!track) {
        console.warn(`Track not found for ID: ${id} in dance ${dto.danceName}`);
      }
      return track;
    })
    .filter(Boolean);

  const choreographers = dto.choreographers
    .map(id => {
      const choreographer = choreographerMap[id];
      if (!choreographer) {
        console.warn(`Choreographer not found for ID: ${id} in dance ${dto.danceName}`);
      }
      return choreographer;
    })
    .filter(Boolean)
    .map(toChoreographerModel);

  const primaryTrack = trackMap[dto.primaryTrack];
  if (!primaryTrack) {
    throw new Error(`Primary track not found for dance: ${dto.danceName} (primaryTrack ID: ${dto.primaryTrack})`);
  }

  return {
    id: dto.id,
    danceName: dto.danceName,
    choreographers: choreographers,
    stepsheet: dto.stepsheet,
    difficulty: dto.difficulty,
    primaryTrack: toTrackModel(primaryTrack),
    tracks: tracks.map(toTrackModel),
    isVerified: dto.isVerified,
  };
}
