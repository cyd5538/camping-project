import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavStyled = styled.div`
    position: sticky;
    width: 100%;
    height: 70px;
    color: white;
    z-index: 100;
    background-color: rgba(0,0,0,0.3);
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height : 60px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .login{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap : 1rem;
        font-size: 1.1rem;
        font-weight: bold;
        div{
            padding: 0.5rem 1rem 0.5rem 1rem;
            border-radius: 20px;
            cursor: pointer;
        }
        div:hover{
            background-color: rgb(0, 0, 0,0.3);
        }
    }


`

const Nav = () => {

  return (
    <>
      <NavStyled>
        <div className="header">
          <h1><Link to="/">CAMPING</Link></h1>
          <div className='login'>
              <div><Link to="/login">Sign in</Link></div>
              <div><Link to="/join">Sign Up</Link></div>
          </div>
        </div>
      </NavStyled>

    </>
  )
}

export default Nav;


