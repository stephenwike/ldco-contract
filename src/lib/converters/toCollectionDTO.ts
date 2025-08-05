import { CollectionDTO } from '../../types/dto/collection.dto';
import { UserCollectionEntity } from '../../types/entities/user_collection.entity';

export function toCollectionDTO(
    collectionEntity: UserCollectionEntity,
    isVerified: boolean
): CollectionDTO {

  return {
    id: collectionEntity._id,
    name: collectionEntity.name,
    isVerified: isVerified,
    dances: collectionEntity.danceIds,
    createdAt: collectionEntity.createdAt,
    updatedAt: collectionEntity.updatedAt,
    createdBy: collectionEntity.createdBy,
    isPrivate: collectionEntity.isPrivate,
    isCopyable: collectionEntity.isCopyable,
    isArchived: collectionEntity.isArchived,
    archivedAt: collectionEntity.archivedAt
  };
}
