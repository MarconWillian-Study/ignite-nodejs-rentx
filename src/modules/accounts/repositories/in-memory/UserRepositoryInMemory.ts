import { ICreateUsersDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    driver_license,
    password
  }: ICreateUsersDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      driver_license,
      password
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }
  async findById(userId: string): Promise<User> {
    return this.users.find(user => user.id === userId);
  }
}

export { UsersRepositoryInMemory };
