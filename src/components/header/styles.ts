import styled from "styled-components";

export const StyledHeader = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: row;
  max-height: 3rem;
  width: 100%;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.headerColor};
  position: fixed;
`;

export const StyledLogo = styled.img`
  max-width: 45px;
  padding: 0 3.5rem 0 0.5rem;
  margin-right: 1rem;
`;

export const StyledChildren = styled.a`
  font-family: Nunito Regular 400;
  font-weight: light;
  text-decoration: none;
  align-items: center;
  padding: 2rem;
  color: #0f0a0a;
  text-transform: uppercase;
`;

export const StyledListChildren = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMenu = styled.img`
  max-width: 60px;
  max-height: 40px;
  position: absolute;
  right: 5%;
`;
