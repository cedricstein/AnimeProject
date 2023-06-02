import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import GenreBubble from "./GenreBubble";

const GenrePage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [filteredAnimeList, setFilteredAnimeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.consumet.org/meta/anilist/advanced-search?genre=${searchQuery}&type=ANIME`
      );

      const JsonRes = await response.json();
      console.log(JsonRes.results);
    };

    fetchData();
  }, [searchQuery]);

  return (
    <>
      <ProfileLink to={`/profile`}>Profile</ProfileLink>
      <Wrapper>
        <ContentDiv>
          <LoginDiv>
            <GenreBubble />
          </LoginDiv>
        </ContentDiv>
      </Wrapper>
    </>
  );
};

export default GenrePage;

const ProfileLink = styled(Link)`
  color: black;
  display: inline-block;
  text-decoration: none;
  border-radius: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-right: 0;
  margin-left: auto;
  padding: 10px;
  font-size: 30px;
  background-color: white;
`;

const DumplingLogo = styled.img`
  max-width: 80px;
  margin-bottom: 20px;
`;

const AnimeDiv = styled.div`
  background-color: white;
  top: 800px;
  justify-content: center;
  position: absolute;
  margin-top: 0px;
  display: flex;
  align-items: center;
  opacity: 60%;
  min-width: 400px;
  max-width: 1100px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 16px;
  flex-wrap: wrap;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
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
  display: flex;
  top: 40px;
  align-items: center;
  min-width: 400px;
  max-width: 1100px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 16px;
  flex-wrap: wrap;
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

//FUNCTIONAL FETCH FOR ANIME DEPENDING ON GENRE
// useEffect(() => {
//   const fetchData = async () => {
//     const response = await axios.get(
//       `https://api.consumet.org/meta/anilist/advanced-search?genre=${searchQuery}&type=ANIME`
//     );
//     console.log(response.data.results);
