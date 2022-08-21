import React from 'react'
import styled from 'styled-components';

const FooterStyled = styled.div`
    width: 100%;
    height: 100px;
    background-color: #222;
    color: white;
    div{
      margin: auto;

      max-width: 1100px;
      width: 100%;
    }
`

const Footer = () => {
  return (
    <FooterStyled>
      <div>
          cyd5538@naver.com
      </div>
    </FooterStyled>
  )
}

export default Footer