import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BsChatLeftDots } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import Loading from '../components/UI/Loading/Loading';
import MainContainer from '../styles/layout';
import Subtitle from '../components/UI/Subtitle/Subtitle';
import DiscussionInformation from '../components/BookDiscussionDetail/DiscussionInformation';
import BookInformation from '../components/BookDiscussionDetail/BookInformation';
import CommentForm from '../components/Comment/CommentForm';
import CommentList from '../components/Comment/CommentList';
import CommentItem from '../components/Comment/CommentItem';
import { jwtAtom } from '../recoil/atoms';
import useBookDiscussionDetail from '../hooks/bookDiscussion/useBookDiscussionDetail';
import NotFoundPage from './NotFoundPage';

function BookDiscussionDetailPage() {
  const { postId } = useParams() as { postId: string };
  const token = useRecoilValue(jwtAtom) ?? '';

  const {
    data: bookDiscussion,
    error,
    handleCreateComment,
    handleUpdateComment,
    handleDeleteComment,
  } = useBookDiscussionDetail({
    id: Number(postId),
    token,
  });

  if (error) {
    return <NotFoundPage />;
  }

  if (!bookDiscussion) {
    return <Loading />;
  }

  const {
    id,
    author,
    avatarUrl,
    title,
    content,
    createdAt,
    postLikedByUser,
    book,
    comments,
  } = bookDiscussion;

  return (
    <MainContainer>
      <DiscussionInformation
        id={id}
        author={author}
        avatarUrl={avatarUrl}
        title={title}
        content={content}
        createdAt={createdAt}
        postLikedByUser={postLikedByUser}
      />
      <Subtitle>
        도서 정보 <GoBook size="24" />
      </Subtitle>
      <BookInformation book={book} />
      <Subtitle>
        댓글 <BsChatLeftDots />
      </Subtitle>
      <CommentForm handleCreateComment={handleCreateComment} />
      <CommentList>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            handleUpdateComment={handleUpdateComment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </CommentList>
    </MainContainer>
  );
}

export default BookDiscussionDetailPage;
