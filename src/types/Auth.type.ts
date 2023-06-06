import { UserInfo } from '../recoil/atoms';

export interface LoginSuccesType {
  response: Response;
  responseJson: UserInfo;
}
