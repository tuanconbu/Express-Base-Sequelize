import { BaseRepository } from '../../concept/repository';
import { Models } from '../../../database/models';

class Repository extends BaseRepository {
  constructor() {
    super();
    this.model = Models.User;
  }
}

export const UserRepository = new Repository();
