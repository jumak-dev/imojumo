import {
  CreateBookDiscussionsType,
  createBookDiscussion,
} from '../../apis/imojumo/bookDisccusions';
import { APIError, BookDiscussionInfo } from '../../types';

import useMutate from '../useMutate';

interface UseCreateBookDiscussion {
  onSuccess?: (data: BookDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useCreateBookDiscussion({
  onSuccess,
  onError,
}: UseCreateBookDiscussion) {
  const { mutate, data, error, isLoading } = useMutate<
    CreateBookDiscussionsType,
    any
  >({
    fetchFn: createBookDiscussion,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateBookDiscussion;
