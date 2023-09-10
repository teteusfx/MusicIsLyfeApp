import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/Albuns">ÁLBUNS</Link>
        <Link to="/Singles">SINGLES</Link>
      </nav>
      <h1>MUSIC IS LYFE.</h1>
      <nav>
        <Link to="/artistas">ARTISTAS</Link>
        <Link to="/">HOME</Link>
      </nav>
    </header>
  );
}

export default Header;
