import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoggedInHandler from './components/LoggedInHandler';
import route from './Routes';

function App() {
  return (
    <GoogleOAuthProvider clientId="418129859233-1o5p4gnkqdmhgise9i2iv00qioigb2ms.apps.googleusercontent.com">
      <RecoilRoot>
        <LoggedInHandler>
          <RouterProvider router={route} />
        </LoggedInHandler>
      </RecoilRoot>
    </GoogleOAuthProvider>
  );
}

export default App;
