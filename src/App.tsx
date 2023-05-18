import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import useLoggedIn from './hooks/useLoggedIn';
import route from './Routes';

function App() {
  useLoggedIn();

  return (
    <RecoilRoot>
      <RouterProvider router={route} />
    </RecoilRoot>
  );
}

export default App;
