import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from 'styled-components';

const MainStyled = styled.div`
    padding: 1rem;
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute;
    top: 40%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%,-50%);
    
    h2{
        font-size: 2rem;
        color:white;
    }
    .search_input {
        width: 100%;
        display: flex;
        position: relative;
        
        input{
            height : 50px;
            width: 100%;
            border-radius: 2rem;
            box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.75);
            border: none;
            font-size: 1.5rem;
            padding-left: 2rem;
        }
        div{
            position: absolute;
            height: 50px;
            width: 10%;
            border-radius: 0 2rem 2rem 0;
            background-color: #eee;
            right: 0;
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
`

const MainSearch = () => {
  return (
    <MainStyled>
      <h2> 캠핑장을 검색해 주세요 !</h2>
      <div className="search_input">
        <input type="text" placeholder="캠핑장 검색"/>
        <div><BsSearch /></div>
      </div>
    </MainStyled>
  );
};

export default MainSearch;
