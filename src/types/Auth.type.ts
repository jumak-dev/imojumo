import { UserInfo } from '../recoil/atoms';
import { APIError } from './Error.type';

interface LoginSuccesType {
  response: Response;
  responseJson: UserInfo;
}

export interface UseLogin {
  onSuccess?: (data: LoginSuccesType) => void;
  onError?: (error: Error | APIError) => void;
}

export interface LoginType {
  email: string;
  password: string;
}
