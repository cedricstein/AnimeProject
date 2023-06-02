//import node fetch
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getAnimeByGenre = async (req, res) => {
  try {
    const { genre } = req.params;

    const queryArray = [genre];
    const query = JSON.stringify(queryArray);

    console.log(genre);
    const response = await fetch(
      `https://api.consumet.org/meta/anilist/advanced-search?genres=${query}&type=ANIME`
    );
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error.msg);
    res.status(500).json({ error: "Internal server error" });
  }
};

// const getAnimeByName = async (req, res) => {
//   try {
//     const { id } = req.params;

//     console.log(id);
//     const response = await fetch(
//       `https://c.delusionz.xyz/meta/anilist/info/=${id}&type=ANIME`
//     );
//     const data = await response.json();
//     console.log(data);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error.msg);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

const getProfile = async (req, res) => {
  try {
    const { email } = req.params;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db("db-name");

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const savedAnimeIds = user.savedanime || [];
    // const fetchSavedAnime = savedAnimeIds.map((id) =>
    //   fetch(`https://c.delusionz.xyz/meta/anilist/info/${id}`)
    // );
    // const animeList = await Promise.all(fetchSavedAnime);
    // const savedAnime = await Promise.all(
    //   animeList.map((response) => response.json())
    // );
    res.status(200).json(savedAnimeIds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Mongo client.close...

const saveAnime = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);
  try {
    console.log(req.body);
    const { id, email } = req.body;

    // connect to the client
    await client.connect();

    // connect to the database (db name is provided as an argument to the function)

    const db = client.db("db-name");

    console.log("connected!");

    const insertId = await db
      .collection("users")
      .updateOne({ email: email }, { $push: { savedanime: id } });
    console.log(insertId);
    //NO MORE THAN 1 RES.JSON!!!
    res.status(201).json({
      status: 201,
      data: req.body,
      message: "Anime saved successfully",
    });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
    console.log(err.stack);
  } finally {
    // close the connection to the database server
    await client.close();
  }
};

module.exports = {
  getAnimeByGenre,
  getProfile,
  saveAnime,
};
