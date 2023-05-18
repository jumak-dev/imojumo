import { SearchAladinBookType } from '../apis/aladin/searchApi';

export interface UseSearchAladinBookType extends SearchAladinBookType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}
