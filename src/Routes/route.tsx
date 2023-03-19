import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/Layout/Footer/Footer';

// Header, Footer가 들어간 Page Root
export function Root() {
  return (
    <>
      <GlobalStyle />
      {/* Header 추후에 추가 */}
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
      {/* Header 추후에 추가 */}
      <Outlet />
    </>
  );
}
