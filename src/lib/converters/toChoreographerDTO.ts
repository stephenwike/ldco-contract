import { ChoreographerDTO } from '../../types/dto/choreographer.dto';
import { ChoreographerEntity } from '../../types/entities/choreographer.entity';

export function toChoreographerDTO(
    choreographer: ChoreographerEntity,
    isVerified: boolean
): ChoreographerDTO {

  return {
    id: choreographer._id,
    name: choreographer.name,
    isVerified: isVerified
  };
}
