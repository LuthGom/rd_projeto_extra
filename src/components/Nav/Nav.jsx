import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <Link to={"/"}>Home</Link>
      <Link to={"/medicamentos"}>Medicamentos</Link>
      <Link to={"/carrinho"}>Carrinho</Link>
      <Link to={"/ofertas"}>Ofertas</Link>
    </nav>
  );
}
