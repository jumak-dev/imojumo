import { useEffect, useState } from 'react';
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
import { ProConDiscussionInfo, Comment } from '../types';
import { jwtAtom } from '../recoil/atoms';
import {
  createProConVote,
  getProConDiscussion,
  updateProConVote,
} from '../apis/proConDiscussion';

interface ProConDiscussion extends ProConDiscussionInfo {
  isPro: boolean;
  isVote: boolean;
  comments: Comment[];
}

function ProConDiscussionDetailPage() {
  const { postId } = useParams() as { postId: string };
  const token = useRecoilValue(jwtAtom) ?? '';

  const [proConDiscussion, setProConDiscussion] = useState<ProConDiscussion>();
  const [commentsData, setCommentsData] = useState<Comment[]>([]);

  const fetchData = async () => {
    const data = await getProConDiscussion(postId, token);
    setProConDiscussion(data);
    setCommentsData(data.comments);
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  const handleProConVote = async (voteValue: boolean) => {
    await createProConVote(postId, token, voteValue);
    fetchData();
  };

  const handleProConRevote = async (voteValue: boolean) => {
    await updateProConVote(postId, token, voteValue);
    fetchData();
  };

  if (!proConDiscussion) {
    return <Loading />;
  }

  const {
    id,
    author,
    title,
    content,
    createdAt,
    proCount,
    conCount,
    proLeader,
    conLeader,
    isVote,
    isPro,
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
        setComments={setCommentsData}
      />
      <CommentList>
        {commentsData.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            isProConDiscussion
            setComments={setCommentsData}
          />
        ))}
      </CommentList>
    </MainContainer>
  );
}

export default ProConDiscussionDetailPage;
