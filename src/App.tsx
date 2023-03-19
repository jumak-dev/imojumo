import { CardContainer } from './components/UI/Card/Card';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>App 최초 배포입니다</div>
      <CardContainer width="300px" height="200px" />
    </>
  );
}

export default App;
