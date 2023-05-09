import {
  CreateBookDiscussionsType,
  createBookDiscussions,
} from '../../apis/imojumo/bookDisccusions';

import useMuate from '../useMutate';

const useCreateBookDiscussion = () => {
  const { mutate, data, error, isLoading } = useMuate<
    CreateBookDiscussionsType,
    any
  >({
    fetchFn: createBookDiscussions,
  });

  return { mutate, data, error, isLoading };
};

export default useCreateBookDiscussion;
