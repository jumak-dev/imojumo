import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoggedInHandler from './components/LoggedInHandler';
import route from './Routes';

const { VITE_GOOGLE_CLIENTID } = import.meta.env;

function App() {
  return (
    <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENTID}>
      <RecoilRoot>
        <LoggedInHandler>
          <RouterProvider router={route} />
        </LoggedInHandler>
      </RecoilRoot>
    </GoogleOAuthProvider>
  );
}

export default App;
