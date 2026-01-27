const ArtistCard = ({ name, img, desc, genre, origin, spotify }) => (
  <div className="card">
    <img src={`/images/${img}`} alt={name} className="artist-img" />
    <h3>{name}</h3>
    <p>{desc}</p>
    <p><strong>Genre:</strong> {genre}</p>
    <p><strong>Origin:</strong> {origin}</p>

    {spotify && (
      <iframe
        style={{ borderRadius: "10px", marginTop: "10px" }}
        src={spotify}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media;"
      />
    )}
  </div>
);

export default ArtistCard;
