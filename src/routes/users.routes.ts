import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarCotroller';

const usersRoutes = Router();
const upload = multer({
  dest: '/tmp/avatar'
});

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  upload.single('file'),
  updateUserAvatarController.handle
);

export { usersRoutes };
