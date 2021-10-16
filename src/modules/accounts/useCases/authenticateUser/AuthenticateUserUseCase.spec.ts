import { AppError } from '../../../../errors/AppError';
import { ICreateUsersDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUSeCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUSeCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUsersDTO = {
      driver_license: '000123',
      email: 'user@test.com',
      password: '1234',
      name: 'User Test'
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUSeCase.execute({
      email: user.email,
      password: user.password
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate with a nonexistent user', () => {
    expect(async () => {
      await authenticateUserUSeCase.execute({
        email: 'false@email.com',
        password: '1234'
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with a incorrect password', () => {
    expect(async () => {
      const user: ICreateUsersDTO = {
        driver_license: '9999',
        email: 'user@user.com',
        password: '1234',
        name: 'User Test Error'
      };

      await createUserUseCase.execute(user);

      await authenticateUserUSeCase.execute({
        email: user.email,
        password: 'incorrectPassword'
      });
    });
  });
});
