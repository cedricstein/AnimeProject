import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPRETTY from "react-json-pretty";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { FiArrowLeft } from "react-icons/fi";
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [savedAnimeIds, setSavedAnimeIds] = useState([]);
  const [savedAnime, setSavedAnime] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchSavedAnimeIds = async () => {
      try {
        const response = await fetch(`/profile/${user.email}`);

        if (response.ok) {
          const data = await response.json();
          setSavedAnimeIds(data);
          console.log(data);
        } else {
          console.log("Failed to fetch saved anime");
        }
      } catch (error) {
        console.error("Error fetching saved anime IDs:", error);
      }
    };

    if (isAuthenticated && user && user.email) {
      fetchSavedAnimeIds();
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      const promises = savedAnimeIds.map((animeId) =>
        fetch(`https://c.delusionz.xyz/meta/anilist/info/${animeId}`)
          .then((res) => res.json())
          .then((data) => {
            return data;
          })
      );
      Promise.all(promises)
        .then((data) => {
          setSavedAnime(data);
        })
        .catch((error) => {
          console.error("Error fetching anime details:", error);
        });
    };
    if (savedAnimeIds.length > 0) {
      fetchAnimeDetails();
    }
  }, [savedAnimeIds]);

  //   };
  //   const fetchSavedAnime = savedAnimeIds.map((id) =>
  //   fetch(`https://c.delusionz.xyz/meta/anilist/info/${id}`)
  // );
  // const animeList = await Promise.all(fetchSavedAnime);
  // const savedAnime = await Promise.all(
  //   animeList.map((response) => response.json())
  // );
  //   if (isAuthenticated && user && user.email) {
  //     fetchSavedAnime();
  //   }
  // }, [isAuthenticated, user]);

  // if (!isAuthenticated || !user || !user.email) {
  //   return null;
  // }
  return (
    isAuthenticated && (
      <>
        <Wrapper>
          <ContentDiv>
            <WhiteSpace>
              <BackButton to="/genrepage">
                {" "}
                <FiArrowLeft />
              </BackButton>
              <Pfp src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              {/* <p>{user.email}</p> */}
              {/* <JSONPRETTY data={user} /> */}
              {/* <ProfileWrapper>Hi</ProfileWrapper> */}
              <LogoutButtonWrapper>
                <LogoutButton />
              </LogoutButtonWrapper>
            </WhiteSpace>
          </ContentDiv>

          <SavedAnime>
            {savedAnime.length > 0 ? (
              savedAnime
                .filter((anime) => savedAnimeIds.includes(String(anime.id)))
                .map((anime) => (
                  <Container key={anime.id}>
                    <AnimeIcon>
                      <StyledLink to={`/anime/${anime.malId}`}>
                        <Image src={anime.image} alt={anime} />
                        <Title>{anime.title.english}</Title>
                      </StyledLink>
                    </AnimeIcon>
                  </Container>
                ))
            ) : (
              <p>No saved anime:</p>
            )}
          </SavedAnime>
        </Wrapper>
      </>
    )
  );
};
export default Profile;

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 15px;
`;

const LogoutButtonWrapper = styled.div`
  align-self: flex-end;
`;
const BackButton = styled(Link)`
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
  align-self: flex-start;
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
const AnimeIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
`;
const Image = styled.img`
  width: 150px;
  border-radius: 20px;
`;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
`;

const SavedAnime = styled.h2`
  font-family: "Cherry Bomb", sans-serif;
  color: dark-pink;
  padding: 10px;
  display: flex;
  width: 600px;
  top: 0px;
  margin-left: 80px;
`;

const WhiteSpace = styled.div`
  background-color: white;

  top: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  padding: 10px;
  border-radius: 16px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  margin: 0px;
`;

const Wrapper = styled.div`
  background-color: pink;
`;

const Pfp = styled.img`
  border-radius: 50px;
`;
