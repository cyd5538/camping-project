import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav'
import {Route, Routes} from 'react-router-dom'
import Join from './pages/Join';
import Login from './pages/Login';
import Home from './pages/Home';
import Detailpage from './pages/Detailpage';
import Footer from './components/Footer';


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
        <Route path="/:id" element={<Detailpage />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <>
        <Footer />
      </>
    </>
  );
}

export default App;
