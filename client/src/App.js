import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav'
import {Route, Routes} from 'react-router-dom'
import Join from './components/Join';
import Login from './components/Login';
import Home from './pages/Home';

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
