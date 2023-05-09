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
import getBookDiscussionDetail from '../apis/discussion';
import { jwtAtom } from '../recoil/atoms';

const { VITE_API_URL } = import.meta.env;

interface BookDiscussionDetail extends BookDiscussionInfo {
  book: Book;
  postLikedByUser: boolean;
  comments?: Comment[];
}

function BookDiscussionDetailPage() {
  const { postId } = useParams();
  const token = useRecoilValue(jwtAtom);

  const [bookDiscussionDetail, setBookDiscussionDetail] =
    useState<BookDiscussionDetail | null>(null);

  const fetchData = async () => {
    const data = await getBookDiscussionDetail(postId, token);
    setBookDiscussionDetail(data);
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  const handlePostDelete = () => {
    fetch(`${VITE_API_URL}/book-discussions/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    });
  };

  const handlePostLike = () => {
    fetch(`${VITE_API_URL}/likes/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    });
  };

  const handlePostUnlike = () => {
    fetch(`${VITE_API_URL}/likes/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    });
  };

  const handleCommentSubmit = (content: string) => {
    fetch(`${VITE_API_URL}/comments?postId=${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
      body: JSON.stringify({ content }),
    }).then(() => fetchData());
  };

  const handleCommentUpdate = (id: number, content: string) => {
    fetch(`${VITE_API_URL}/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
      body: JSON.stringify({ content }),
    }).then(() => fetchData());
  };

  const handleCommentDelete = (id: number) => {
    fetch(`${VITE_API_URL}/comments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    }).then(() => fetchData());
  };

  const handleCommentLikeClick = (id: number) => {
    fetch(`${VITE_API_URL}/comments/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    });
  };

  const handleCommentLikeCancel = (id: number) => {
    fetch(`${VITE_API_URL}/comments/${id}/like`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    });
  };

  const handleCommentDislikeClick = (id: number) => {
    fetch(`${VITE_API_URL}/comments/${id}/dislike`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    });
  };

  const handleCommentDislikeCancel = (id: number) => {
    fetch(`${VITE_API_URL}/comments/${id}/dislike`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: token || '',
      },
    });
  };

  if (!bookDiscussionDetail) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <DiscussionInfomation
        id={bookDiscussionDetail.id}
        author={bookDiscussionDetail.author}
        title={bookDiscussionDetail.title}
        content={bookDiscussionDetail.content}
        createdAt={bookDiscussionDetail.createdAt}
        postLikedByUser={bookDiscussionDetail.postLikedByUser}
        onDelete={handlePostDelete}
        onLike={handlePostLike}
        onUnlike={handlePostUnlike}
      />
      <Subtitle>
        도서 정보 <GoBook size="24" />
      </Subtitle>
      <BookInformation book={bookDiscussionDetail.book} />
      <Subtitle>
        댓글 <BsChatLeftDots />
      </Subtitle>
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList>
        {bookDiscussionDetail.comments?.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onUpdate={handleCommentUpdate}
            onDelete={handleCommentDelete}
            onClickLike={handleCommentLikeClick}
            onCancelLike={handleCommentLikeCancel}
            onClickDislike={handleCommentDislikeClick}
            onCancelDislike={handleCommentDislikeCancel}
          />
        ))}
      </CommentList>
    </MainContainer>
  );
}

export default BookDiscussionDetailPage;
