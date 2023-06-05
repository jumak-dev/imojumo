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
import DiscussionEditPage from '../pages/DiscussionEditPage';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage';

export default createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        errorElement: <NotFoundPage />,
        children: [
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
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
  {
    element: <Root />,
    children: [
      {
        element: <PrivateRoute />,
        errorElement: <NotFoundPage />,
        children: [
          {
            path: '/mypage',
            element: <MyPage />,
          },
          {
            path: '/book-discussion/:postId/edit',
            element: <DiscussionEditPage discussionType="book" />,
          },
          {
            path: '/pro-con-discussion/:postId/edit',
            element: <DiscussionEditPage discussionType="proCon" />,
          },
          {
            path: '/posts/new',
            children: [
              {
                path: 'pro-con-discussion',
                element: <PostNewPage discussionType="proCon" />,
              },
              {
                path: 'book-discussion',
                element: <PostNewPage discussionType="book" />,
              },
            ],
          },
        ],
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
