import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import route from './Routes';

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={route} />
    </RecoilRoot>
  );
}

export default App;
