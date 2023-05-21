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
import { getProConDiscussion } from '../apis/proConDiscussion';

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
  const [isVote, setIsVote] = useState(false);
  const [isPro, setIsPro] = useState(false);

  const fetchData = async () => {
    const data = await getProConDiscussion(postId, token);
    setProConDiscussion(data);
    setCommentsData(data.comments);
    setIsVote(data.isVote);
    setIsPro(data.isPro);
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

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
        setIsPro={setIsPro}
        setIsVote={setIsVote}
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
