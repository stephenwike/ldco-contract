import { TrackDTO } from "../../types/dto/track.dto";
import { TrackModel } from "../../types/model/track.model";

export function toTrackModel(dto: TrackDTO): TrackModel {
  return {
    id: dto.id,
    name: dto.name,
    artists: dto.artists,
    isrc: dto.isrc,
    uri: dto.uri,
    duration_ms: dto.duration_ms,
    explicit: dto.explicit,
    isVerified: dto.isVerified,
  };
}
