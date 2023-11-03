import { SearchAladinBookType } from '../apis/aladin/searchApi';
import { AladinBookSearchResult, APIError } from '.';

export interface UseSearchAladinBookType extends SearchAladinBookType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: AladinBookSearchResult | null) => void;
  onError?: (error: Error | APIError) => void;
}
