import artists from "./data/artists";
import ArtistCard from "./components/ArtistCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="grid">
        {artists.map((artist, index) => (
          <ArtistCard key={index} {...artist} />
        ))}
      </div>
    </>
  );
}

export default App;


