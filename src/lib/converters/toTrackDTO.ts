import { TrackDTO } from "../../types/dto/track.dto";
import { TrackEntity } from "../../types/entities/track.entity";

export function toTrackDTO(dto: TrackEntity, isVerified: boolean): TrackDTO {
  return {
    id: dto._id,
    name: dto.name,
    artists: dto.artists,
    isrc: dto.isrc,
    uri: dto.uri,
    duration_ms: dto.duration_ms,
    explicit: dto.explicit,
    isVerified: isVerified,
  };
}
