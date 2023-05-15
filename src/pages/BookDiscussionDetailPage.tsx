import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BsChatLeftDots } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import Loading from '../components/UI/Loading/Loading';
import MainContainer from '../styles/layout';
import Subtitle from '../components/UI/Subtitle/Subtitle';
import DiscussionInfomation from '../components/BookDiscussionDetail/DiscussionInfomation';
import BookInformation from '../components/BookDiscussionDetail/BookInformation';
import CommentForm from '../components/Comment/CommentForm';
import CommentList from '../components/Comment/CommentList';
import CommentItem from '../components/Comment/CommentItem';
import { Book, BookDiscussionInfo, Comment } from '../types';
import { getBookDiscussion } from '../apis/bookDiscussion';
import { jwtAtom } from '../recoil/atoms';
import { createComment, updateComment, deleteComment } from '../apis/comment';

interface BookDiscussion extends BookDiscussionInfo {
  book: Book;
  postLikedByUser: boolean;
  comments?: Comment[];
}

function BookDiscussionDetailPage() {
  const { postId } = useParams();
  const token = useRecoilValue(jwtAtom) ?? '';

  const [bookDiscussion, setBookDiscussion] = useState<BookDiscussion>();
  const [commentsData, setCommentsData] = useState<Comment[]>();

  const fetchData = async () => {
    const data = await getBookDiscussion(postId, token);
    setBookDiscussion(data);
    setCommentsData(data.comments);
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  const handleCommentSubmit = (content: string) => {
    createComment(postId, token, content).then(() => fetchData());
  };

  const handleCommentUpdate = (id: number, content: string) => {
    updateComment(id, token, content).then(() => fetchData());
  };

  const handleCommentDelete = (id: number) => {
    deleteComment(id, token).then(() => fetchData());
  };

  if (!bookDiscussion) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <DiscussionInfomation
        id={bookDiscussion.id}
        author={bookDiscussion.author}
        title={bookDiscussion.title}
        content={bookDiscussion.content}
        createdAt={bookDiscussion.createdAt}
        postLikedByUser={bookDiscussion.postLikedByUser}
      />
      <Subtitle>
        도서 정보 <GoBook size="24" />
      </Subtitle>
      <BookInformation book={bookDiscussion.book} />
      <Subtitle>
        댓글 <BsChatLeftDots />
      </Subtitle>
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList>
        {commentsData?.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onUpdate={handleCommentUpdate}
            onDelete={handleCommentDelete}
          />
        ))}
      </CommentList>
    </MainContainer>
  );
}

export default BookDiscussionDetailPage;
