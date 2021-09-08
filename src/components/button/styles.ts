import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-family: Nunito;
  font-size: 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors.button.background};
  cursor: pointer;

  position: fixed;
  width: 220px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
`;
