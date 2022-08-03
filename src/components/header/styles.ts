import styled from "styled-components";

export const NavLinks = styled.nav`
  & a {
    margin-right: 20px;
  }

  & a:hover {
    text-decoration: none;
  }
`;

export const LogoutButton = styled.button`
  background: #256;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #256;
  }
`;
