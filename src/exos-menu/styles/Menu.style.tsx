import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";



export const MyNav = styled.nav`
  background-color : ${AppTheme.colors.medium};
  position : absolute;
  bottom: 2rem;
  left: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  border-radius: 0.6rem;
  padding: 0.6rem;
`;

export const MyLink = styled(Link)`
  text-decoration: none;

`

