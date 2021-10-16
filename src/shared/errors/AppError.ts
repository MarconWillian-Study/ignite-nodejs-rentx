import { Status4XXNames, Status5XXNames, selectStatus } from 'types-code';

export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(
    message: string,
    statusCode: number | Status4XXNames | Status5XXNames = 400
  ) {
    this.message = message;

    if (typeof statusCode === 'string') {
      this.statusCode = selectStatus(statusCode);
    } else {
      this.statusCode = statusCode;
    }
  }
}
