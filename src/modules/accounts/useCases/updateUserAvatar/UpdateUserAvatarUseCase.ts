// Add column avatar on table users
// Create upload file
// Setting multer upload
// Create bussines rule
// Create controller

import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  userId: string;
  avatarFile;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
