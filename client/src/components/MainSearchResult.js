import React from "react";
import styled from "styled-components";

const MainSearchResultStyled = styled.div`
  .search_result {
    color: black;
    background-color: white;
    width: 460px;
    height: 100%;
    max-height: 150px;
    overflow-y: scroll;
    display: flex;
    z-index: 50;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 410px;
    padding-top: 100px;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2f3542;
    }
    ::-webkit-scrollbar-track {
      background-color: grey;
    }
  }
  .none{
    display : none;
  }
  .search_list{
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
  }
  .search_list:hover{
    background-color: #eee;
  }
`;

const MainSearchResult = ({ searchData, searchBoolean }) => {
  console.log(searchData)
  return (
    <MainSearchResultStyled>
      <div className={searchData ===  "" || searchData === undefined ? "none" : "search_result"}>
        {searchData === "" ? (
          <div>No data</div>
        ) : (
          searchData?.map((data) => <div className="search_list" key={data.facltNm}>{data.facltNm}</div>)
        )}
      </div>
    </MainSearchResultStyled>
  );
};

export default MainSearchResult;
