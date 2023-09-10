import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import styles from "./Albuns.module.css";

function Albuns() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const apiUrl = "https://raw.githubusercontent.com/teteusfx/apimusic/main/apialbuns.json";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    
    <>
      <section className="container">
        <div className="App">
          <h1>Álbuns</h1>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>
                <img src={album.img_url} alt={`${album.album - name} Cover`} />
                <h2>{album["album-name"]}</h2>
                <p>Artista: {album.artist}</p>
                <p>Genêro: {album.genre}</p>
                <p>Ano: {album["release-year"]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Albuns;
