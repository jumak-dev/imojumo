import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoggedInHandler from './components/LoggedInHandler';
import route from './Routes';

function App() {
  return (
    <RecoilRoot>
      <LoggedInHandler>
        <RouterProvider router={route} />
      </LoggedInHandler>
    </RecoilRoot>
  );
}

export default App;
