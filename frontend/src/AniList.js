import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AniList = ({ animeList }) => {
  return (
    <Wrapper>
      {animeList.map((anime) => (
        <Container key={anime.id}>
          <AnimeIcon>
            <StyledLink to={`/anime/${anime.malId}`}>
              <Image src={anime.image} alt={anime} />
              <Title>{anime.title.english}</Title>
            </StyledLink>
          </AnimeIcon>
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
const AnimeIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
`;
const Container = styled.div`
  padding: 15px;
`;
const Image = styled.img`
  width: 150px;
  border-radius: 20px;
`;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
`;
const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
export default AniList;
