import { useEffect, useState } from 'react'

function Artistas() {

    const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const apiUrl = "https://raw.githubusercontent.com/teteusfx/apimusic/main/apiartistas.json";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

    return (
        <section className="container">
        <div className="App">
          <h1>Artistas</h1>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>
                <img src={album.img_url} alt={`${album.album - name} Cover`} />
                <h2>{album["artist-name"]}</h2>
                <p>Nome real: {album.realname}</p>
                <p>Gravadora: {album.label}</p>
                <p>Idade: {album["age"]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
}

export default Artistas