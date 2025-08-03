import { ChoreographerDTO } from "../../types/dto/choreographer.dto";
import { ChoreographerModel } from "../../types/model/choreographer.model";

export function toChoreographerModel(
    dto: ChoreographerDTO
): ChoreographerModel {

  return {
    id: dto.id,
    name: dto.name,
    isVerified: dto.isVerified
  };
}
