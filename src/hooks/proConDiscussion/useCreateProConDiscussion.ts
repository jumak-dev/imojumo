import {
  CreateProConDiscussionType,
  createProConDiscussion,
} from '../../apis/imojumo/proConDiscussion';
import useMutate from '../useMutate';

const useCreateProConDiscussion = () => {
  const { mutate, data, error, isLoading } = useMutate<
    CreateProConDiscussionType,
    any
  >({
    fetchFn: createProConDiscussion,
  });

  return { mutate, data, error, isLoading };
};

export default useCreateProConDiscussion;
