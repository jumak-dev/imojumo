import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import LikeListPage from '../pages/LikeListPage';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MyPage from '../pages/MyPage';
import SearchPage from '../pages/SearchPage';
import SignupPage from '../pages/SignupPage';

import BookDiscussionPage from '../pages/BookDiscussionPage';
import BookDiscussionDetailPage from '../pages/BookDiscussionDetailPage';
import ProConDiscussionPage from '../pages/ProConDiscussionPage';
import ProConDiscussionDetailPage from '../pages/ProConDiscussionDetailPage';

export default createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
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
]);
