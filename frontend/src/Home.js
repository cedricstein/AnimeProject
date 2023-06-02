import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/genrepage");
  }
  return (
    <>
      <Wrapper>
        <ContentDiv>
          <LoginDiv>
            <Title>Welcome to Animoo</Title>
            <LoginButton>Log in or Sign up here</LoginButton>
            <StyledLink to={`/genrepage`}>
              Continue without signing in?
            </StyledLink>
          </LoginDiv>
        </ContentDiv>
      </Wrapper>
    </>
  );
};

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  border: none;
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px;
  background-color: pink;
  font-size: 15px;
`;

const Input = styled.input`
  border: none;
  margin: 10px;
  font-size: 15px;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-family: "Cherry Bomb", sans-serif;
  color: dark-pink;
  top: 0;
  margin: 0;
`;
const Subtitle = styled.h3`
  font-family: "Cherry Bomb", sans-serif;
  color: dark-pink;
  top: 0;
  margin: 10px;
`;

const LoginDiv = styled.div`
  background-color: white;

  position: absolute;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 60%;
  max-width: 475px;
  padding: 24px 24px 24px;
  border-radius: 16px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const Wrapper = styled.div`
  background-color: pink;
  position: relative;
  padding-top: 100%;
  padding-bottom: 100%;
`;

export default Home;
