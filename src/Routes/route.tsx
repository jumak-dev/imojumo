import { Outlet } from 'react-router-dom';

import GlobalStyle from '../styles/GlobalStyle';
import TabProvider from '../context/TabContext';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import BANNERS from '../constants/Banners';
import Carousel from '../components/UI/Carousel/Carousel';
import ScrollToTop from '../components/UI/ScrollToTop/ScrollToTop';

// Header, Footer가 들어간 Page Root
export function Root() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <TabProvider>
        <Outlet />
      </TabProvider>
      <Footer />
    </>
  );
}

// Header, Footer, Banner가 들어간 Page Root
export function Home() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Carousel banners={BANNERS} interval={4000} />
      <Outlet />
      <Footer />
    </>
  );
}

// Header만 들어간 Page Root
export function LoginRoot() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
}
