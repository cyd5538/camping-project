import React from 'react'
import styled from 'styled-components';

const MainSearchResultStyled = styled.div`
    padding: 1rem;
    width : 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute;
    top: 60%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%,-50%);
`


const MainSearchResult = ({searchData}) => {
    
  return (
    <MainSearchResultStyled>
      {/* {searchData?.map((data) => (
        <div>

            {data.facltNm}
        </div>
      ))} */}
    </MainSearchResultStyled>
  )
}

export default MainSearchResult
