import {
  CreateProConDiscussionType,
  createProConDiscussion,
} from '../../apis/imojumo/proConDiscussion';
import useMuate from '../useMutate';

const useCreateProConDiscussion = () => {
  const { mutate, data, error, isLoading } = useMuate<
    CreateProConDiscussionType,
    any
  >({
    fetchFn: createProConDiscussion,
  });

  return { mutate, data, error, isLoading };
};

export default useCreateProConDiscussion;
