import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>{username}</h1>
      <p>City: {city}</p>
    </div>
  );
}

export default Home;