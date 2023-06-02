import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import AniList from "./AniList";

const genreList = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

const GenreBubble = () => {
  const [animeList, setAnimeList] = useState([]);

  const handleBubbleClick = async (genre) => {
    try {
      const animeData = await fetchAnimeData(genre);

      setAnimeList(animeData.results);
    } catch (error) {
      console.log("Error fetching anime data:", error);
    }
  };

  const fetchAnimeData = async (genre) => {
    try {
      //instead of : put ${} for links/fetches, : only in routes and endpoint
      const response = await fetch(`/anime/${genre}`);

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch anime data");
    }
  };

  return (
    <>
      {genreList.map((genre) => (
        <Bubble key={genre} onClick={() => handleBubbleClick(genre)}>
          {genre}
        </Bubble>
      ))}

      <AniList animeList={animeList} />
    </>
  );
};

const Bubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  text-align: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export default GenreBubble;
