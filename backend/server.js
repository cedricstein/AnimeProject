"use strict";

// import the needed node_modules.
const express = require("express");
const { getAnimeByGenre, getProfile, saveAnime } = require("./handlers");
const morgan = require("morgan");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())
  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  //   .get("/api/getprofile", (req, res) => {
  //     res.status(200).json({ status: 200, data: top50 });
  //   })

  .get("/anime/:genre", getAnimeByGenre)
  //   .get("/anime/:id", getAnimeByName)
  .put("/api/saveAnime", saveAnime)
  .get("/profile/:email", getProfile)
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint. If a user navigates to any endpoint that is not
  // defined above, they get to see our 404 page.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not the page you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
