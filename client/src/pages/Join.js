import React from "react";
import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
  color: black;
  z-index: 101;
  .toggle {
    display: none;
  }

  .box {
    width: 400px;
    height: 400px;
    border-radius : 20px;
    padding: 1rem;
    background-color: white;
    box-shadow: 0px 0px 42px 7px rgba(0,0,0,0.55);

    .menu {
      display: flex;
      margin-bottom: 50px;
      padding: 1rem;
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input,
      button {
        background-color: none;
        height: 50px;
        border:none;
        border-bottom: 1px solid #000;
        border-radius : 20px;
        font-size: 1.1rem;
      }
      input{
        padding-left: 1rem;
        background-color: rgb(255, 255, 230);
      }
      button{
        
        color: white;
        font-size: 1.3rem;
        font-weight: bold;
        background-color: rgb(34, 218, 173);
        cursor: pointer;
      }
    }
  }
`;

const Join = () => {
  return (
    <LoginStyled>
      <div className="box">
        <div className="menu">
          <span>Sign Up</span>
        </div>
        <div className="form">
          <input type="text" placeholder="id를 입력하세요" />
          <input type="email" placeholder="email을 입력하세요" />
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <button>회원가입</button>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Join;

