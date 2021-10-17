import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';

interface IUploadConfig {
  upload(folder: string): {
    storage: multer.StorageEngine;
  };
}

const uploadConfig: IUploadConfig = {
  upload(folder) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString('hex');

          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        }
      })
    };
  }
};

export default uploadConfig;
