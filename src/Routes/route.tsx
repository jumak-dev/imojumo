import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import Banner from '../components/Main/Banner';
import TabProvider from '../context/TabContext';

// Header, Footer가 들어간 Page Root
export function Root() {
  return (
    <>
      <GlobalStyle />
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
      <Header />
      <Banner />
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
      <Header />
      <Outlet />
    </>
  );
}
