import PROMISE_STATUS from '../constants/Promise';

export type PromiseStatusType =
  | typeof PROMISE_STATUS.IDLE
  | typeof PROMISE_STATUS.PENDING
  | typeof PROMISE_STATUS.FULFILLED
  | typeof PROMISE_STATUS.ERROR;
