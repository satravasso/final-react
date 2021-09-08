import styled, { keyframes } from "styled-components";

export const StyledHome = styled.div`
  /* margin-top: 20vh; */
`;

const typing = keyframes`
  from {
    width: 0
  }
`;

const blink = keyframes`
   50% {
    border-color: transparent
  }
`;

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Typing = styled.div`
  font-family: Nunito;
  width: 57ch;
  animation: ${typing} 3s steps(30), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
`;
