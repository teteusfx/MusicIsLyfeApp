//import styles from './Singles.module.css'
import React, { useState, useEffect } from "react";

function Singles() {

    const [singles, setSingles] = useState([]);

    useEffect(() => {
        const apiUrl = "https://raw.githubusercontent.com/teteusfx/apimusic/main/apisingles.json";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setSingles(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <section className="container">
            <div className="App">
                <h1>Singles</h1>
                <ul>
                    {singles.map((singles) => (
                        <li key={singles.id}>
                            <img src={singles.img_url} alt={`${singles.album - name} Cover`} />
                            <h2>{singles["single-name"]}</h2>
                            <p>Artista: {singles.artist}</p>
                            <p>Genêro: {singles.genre}</p>
                            <p>Ano: {singles["year"]}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Singles


