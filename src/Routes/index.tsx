import { createBrowserRouter } from 'react-router-dom';
import { Root, LoginRoot, Home } from './route';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyPage from '../pages/MyPage';
import SearchPage from '../pages/SearchPage';
import LikeListPage from '../pages/LikeListPage';
import BookDetailPage from '../pages/BookDetailPage';
import BookDiscussionPage from '../pages/BookDiscussionPage';
import BookDiscussionDetailPage from '../pages/BookDiscussionDetailPage';
import ProConDiscussionPage from '../pages/ProConDiscussionPage';
import ProConDiscussionDetailPage from '../pages/ProConDiscussionDetailPage';
import PostNewPage from '../pages/PostNewPage';

export default createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/likes',
        element: <LikeListPage />,
      },
      {
        path: '/books/:bookId',
        element: <BookDetailPage />,
      },
      {
        path: '/book-discussion',
        element: <BookDiscussionPage />,
      },
      {
        path: '/book-discussion/:postId',
        element: <BookDiscussionDetailPage />,
      },
      {
        path: '/pro-con-discussion',
        element: <ProConDiscussionPage />,
      },
      {
        path: '/pro-con-discussion/:postId',
        element: <ProConDiscussionDetailPage />,
      },
      {
        path: '/posts/new',
        element: <PostNewPage />,
      },
    ],
  },
  {
    element: <Home />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    element: <LoginRoot />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
    ],
  },
]);
