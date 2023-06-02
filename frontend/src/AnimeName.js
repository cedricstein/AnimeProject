import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FiArrowLeft } from "react-icons/fi";
const AnimeName = () => {
  const { user } = useAuth0();
  const { malId } = useParams();
  const [anime, setAnime] = useState({});
  const [displayCharacters, setDisplayCharacters] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(
          `https://c.delusionz.xyz/meta/anilist/info/${malId}`
        );
        const data = await response.json();
        setAnime(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };
    fetchAnimeDetails();
  }, [malId]);

  if (!anime) {
    return <div>Loading...</div>;
  }

  const toggleDisplay = () => {
    setDisplayCharacters(!displayCharacters);
  };

  const toggleSave = async () => {
    try {
      console.log(user);
      const savedAnimeData = { id: malId, email: user.email };
      console.log(savedAnimeData);
      const response = await fetch(`/api/saveAnime`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savedAnimeData),
      });
      if (response.ok) {
        setSaved(!saved);
        console.log("anime saved");
      } else {
        console.log("anime failed to save");
      }
    } catch (error) {
      console.error("Error saving title:", error);
    }
  };

  return (
    <>
      <StyledLink to="/genrepage">
        {" "}
        <FiArrowLeft />
      </StyledLink>
      <PageContainer>
        <Container>
          <Image src={anime.image} alt={anime.title} />
          <Title>{anime.title?.english}</Title>
          <Title>
            {anime.title?.romaji} ({anime.title?.native})
          </Title>
          <Title>{anime.title?.userPreferred}</Title>
          <Genre>{anime.genres?.join(", ")}</Genre>
          <Description>{anime.description}</Description>

          <SaveButton onClick={toggleSave}>
            {saved ? "Saved ✅" : "Not saved🚫"}
          </SaveButton>

          <ToggleButton onClick={toggleDisplay}>
            {displayCharacters
              ? "Hide Character List"
              : "Display Character List"}
          </ToggleButton>
          {displayCharacters && (
            <>
              <CastIntro>Here's the cast:</CastIntro>
              <List>
                {anime.characters?.map((character) => (
                  <CharacterWrapper key={character.id}>
                    <CharacterImg
                      src={character.image}
                      alt={character.name.full}
                    />
                    <Genre>{character.name.full}</Genre>
                    {/* <Genre>{character.role}</Genre> */}
                  </CharacterWrapper>
                ))}
              </List>
            </>
          )}
        </Container>
      </PageContainer>
    </>
  );
};

const Genre = styled.h2`
  font-family: "Poppins", sans-serif;
  margin: 20px;
`;

const CastIntro = styled.h1`
  font-family: "Poppins", sans-serif;
  margin: 20px;
`;
const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  background-color: white;
  font-size: 18px;
  max-width: 1300px;

  border-radius: 5px;
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: 150px;
  border-radius: 20px;
`;

const CharacterImg = styled.img`
  max-width: 150px;
  border-radius: 20px;
  margin: 20px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: white;
  border: none;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
`;

const SaveButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: white;
  border: none;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
`;
const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  font-size: 60px;
  margin: 40px;
  width: 20px;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
`;

export default AnimeName;
