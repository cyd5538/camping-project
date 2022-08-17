import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav'
import {Route, Routes} from 'react-router-dom'
import Join from './pages/Join';
import Login from './pages/Login';
import Home from './pages/Home';
import Spinner from './reCylce/spinner';

function App() {

  return (
    <>
      <>
        <GlobalStyle /> 
        <Nav />

      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>

    </>
  );
}

export default App;
