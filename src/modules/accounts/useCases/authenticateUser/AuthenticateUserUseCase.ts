import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect!', '401 Unauthorized');
    }

    const passwordMath = compare(password, user.password);

    if (!passwordMath) {
      throw new AppError('Email or password incorrect!', '401 Unauthorized');
    }

    const token = sign({}, '&98761vb389172s63b97868b12sh3v1t', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user: {
        name: user.name,
        email: user.email
      },
      token
    };
  }
}

export { AuthenticateUserUseCase };
