import React from "react";
import styled from "styled-components";

const SpinnerStyled = styled.div`
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(34, 5, 112, 0.2);
    border-right: 1.1em solid rgba(34, 5, 112, 0.2);
    border-bottom: 1.1em solid rgba(34, 5, 112, 0.2);
    border-left: 1.1em solid #220570;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerStyled className="spin">
      <div class="loader"></div>
    </SpinnerStyled>
  );
};

export default Spinner;
