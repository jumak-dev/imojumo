import { createBrowserRouter } from 'react-router-dom';
import { Root, LoginRoot } from './route';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyPage from '../pages/MyPage';
import SearchPage from '../pages/SearchPage';
import LikeListPage from '../pages/LikeListPage';

import BookDiscussionPage from '../pages/BookDiscussionPage';
import BookDiscussionDetailPage from '../pages/BookDiscussionDetailPage';
import ProConDiscussionPage from '../pages/ProConDiscussionPage';
import ProConDiscussionDetailPage from '../pages/ProConDiscussionDetailPage';

export default createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
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
        path: '/book-dissscusion',
        element: <BookDiscussionPage />,
      },
      {
        path: '/book-dissscusion/:postId',
        element: <BookDiscussionDetailPage />,
      },
      {
        path: '/pro-con-dissscusion',
        element: <ProConDiscussionPage />,
      },
      {
        path: '/pro-con-dissscusion/:postId',
        element: <ProConDiscussionDetailPage />,
      },
      {
        path: '/posts/new',
        element: <BookDiscussionPage />,
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
