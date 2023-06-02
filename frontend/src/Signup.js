import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Signup = () => {
  return (
    <>
      <Wrapper>
        <ContentDiv>
          <LoginDiv>
            <StyledLink to="/">
              {" "}
              <FiArrowLeft />
            </StyledLink>
            <DumplingLogo src="favicon.ico" alt="dumpling" />
            <Input type="text" id="fullname" placeholder="Your name" />
            <Input type="text" id="email" placeholder="E-mail address" />
            <Input type="text" id="password" placeholder="Password" />
          </LoginDiv>
        </ContentDiv>
      </Wrapper>
    </>
  );
};
export default Signup;

const Input = styled.input`
  border: none;
  font-size: 15px;
  margin: 10px;
`;

const DumplingLogo = styled.img`
  max-width: 80px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: black;
  right: 150px;
  bottom: 90px;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 30px;
`;
const LoginButton = styled.button`
  border: none;
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px;
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
  padding: 100px;
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
