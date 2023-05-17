import {
  CreateBookDiscussionsType,
  createBookDiscussions,
} from '../../apis/imojumo/bookDisccusions';

import useMutate from '../useMutate';

const useCreateBookDiscussion = () => {
  const { mutate, data, error, isLoading } = useMutate<
    CreateBookDiscussionsType,
    any
  >({
    fetchFn: createBookDiscussions,
  });

  return { mutate, data, error, isLoading };
};

export default useCreateBookDiscussion;
