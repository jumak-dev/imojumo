import {
  CreateBookDiscussionsType,
  createBookDiscussion,
} from '../../apis/imojumo/bookDisccusions';

import useMutate from '../useMutate';

const useCreateBookDiscussion = () => {
  const { mutate, data, error, isLoading } = useMutate<
    CreateBookDiscussionsType,
    any
  >({
    fetchFn: createBookDiscussion,
  });

  return { mutate, data, error, isLoading };
};

export default useCreateBookDiscussion;
