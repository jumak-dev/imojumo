import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BsChatLeftDots, BsInfoCircle } from 'react-icons/bs';
import Loading from '../components/UI/Loading/Loading';
import MainContainer from '../styles/layout';
import Subtitle from '../components/UI/Subtitle/Subtitle';
import DiscussionInformation from '../components/ProConDiscussionDetail/DiscussionInformation';
import TopicDescription from '../components/ProConDiscussionDetail/TopicDescription';
import CommentForm from '../components/Comment/CommentForm';
import CommentList from '../components/Comment/CommentList';
import CommentItem from '../components/Comment/CommentItem';
import { jwtAtom } from '../recoil/atoms';

import useProConDiscussionDetail from '../hooks/proConDiscussion/useProConDiscussionDetail';
import useUpdateProConVote from '../hooks/proConVote/useUpdateProConVote';
import useCreateProConVote from '../hooks/proConVote/useCreateProConVote';
import NotFoundPage from './NotFoundPage';

function ProConDiscussionDetailPage() {
  const { postId } = useParams() as { postId: string };
  const token = useRecoilValue(jwtAtom) ?? '';

  const {
    data: proConDiscussion,
    error,
    handleCreateComment,
    handleUpdateComment,
    handleDeleteComment,
    refetch,
  } = useProConDiscussionDetail({
    id: Number(postId),
    token,
  });

  const { mutate: createProConVote } = useCreateProConVote({
    onSuccess: (data) => {
      if (!data) {
        return;
      }

      refetch();
    },
  });

  const { mutate: updateProConVote } = useUpdateProConVote({
    onSuccess: (data) => {
      if (!data) {
        return;
      }

      refetch();
    },
  });

  const handleProConVote = async (voteValue: boolean) => {
    await createProConVote({ id: postId, token, voteValue });
  };

  const handleProConRevote = async (voteValue: boolean) => {
    await updateProConVote({ id: postId, token, voteValue });
  };

  if (error) {
    return <NotFoundPage />;
  }

  if (!proConDiscussion) {
    return <Loading />;
  }

  const {
    id,
    author,
    avatarUrl,
    title,
    content,
    createdAt,
    proCount,
    conCount,
    proLeader,
    conLeader,
    isVote,
    isPro,
    comments,
  } = proConDiscussion;

  return (
    <MainContainer>
      <DiscussionInformation
        id={id}
        author={author}
        title={title}
        createdAt={createdAt}
        proCount={proCount}
        conCount={conCount}
        proLeader={proLeader}
        conLeader={conLeader}
      />
      <Subtitle>
        주제 설명 <BsInfoCircle />
      </Subtitle>
      <TopicDescription
        author={author}
        avatarUrl={avatarUrl}
        content={content}
        isPro={isPro}
        isVote={isVote}
        onVote={handleProConVote}
        onRevote={handleProConRevote}
      />
      <Subtitle>
        참여하기 <BsChatLeftDots />
      </Subtitle>
      <CommentForm
        isVote={isVote}
        isProConDiscussion
        handleCreateComment={handleCreateComment}
      />
      <CommentList>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            isProConDiscussion
            handleUpdateComment={handleUpdateComment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </CommentList>
    </MainContainer>
  );
}

export default ProConDiscussionDetailPage;
