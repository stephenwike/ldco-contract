import { DanceDTO } from "../../types/dto/dance.dto";
import { DanceEntity } from "../../types/entities/dance.entity";

export function toDanceDTO(
  dance: DanceEntity,
  isVerified: boolean
): DanceDTO {

  return {
    id: dance._id,
    danceName: dance.danceName,
    choreographers: dance.choreographers?.map((id: string) => id) ?? [],
    stepsheet: dance.stepsheet,
    difficulty: dance.difficulty,
    primaryTrack: dance.primaryTrack ?? '',
    tracks: dance.tracks?.map((id: string) => id) ?? [],
    isVerified: isVerified
  };
};
