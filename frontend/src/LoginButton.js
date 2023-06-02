import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <LoginButtonCss onClick={() => loginWithRedirect()}>
      Log in or Sign up here
    </LoginButtonCss>
  );
};

const LoginButtonCss = styled.button`
  border: none;
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px;
  font-size: 15px;
`;

export default LoginButton;
