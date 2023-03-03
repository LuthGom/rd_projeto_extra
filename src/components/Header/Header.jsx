import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.Header}>
      <span>
        <img
          src="https://static.vecteezy.com/ti/vetor-gratis/t2/10071546-medicina-logo-modelo-farmacia-logo-modelo-vetor.jpg"
          alt=""
        />
      </span>
      <span>
        <Link to={"/cadastro"}>Cadastro</Link>
      </span>
      <Nav />
    </header>
  );
}
