import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return <LogoutButtonCss onClick={() => logout()}>Log out</LogoutButtonCss>;
};

const LogoutButtonCss = styled.button`
  border: none;
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px;
  font-size: 20px;
`;

export default LogoutButton;
