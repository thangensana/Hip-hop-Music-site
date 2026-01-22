import React from "react";
import artists from "./data/artists";
import ArtistCard from "./components/ArtistCard";

const App = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>Hip-Hop & Pop Vibes</h1>
      <div className="grid">
        {artists.map((artist, i) => (
          <ArtistCard key={i} {...artist} />
        ))}
      </div>
    </div>
  );
};


