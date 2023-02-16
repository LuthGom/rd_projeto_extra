import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <Link to="/">Home</Link>
      <Link to="/medicamentos">Medicamentos</Link>
      <Link to="/ofertas">Ofertas</Link>
      <Link>Perfumes</Link>
      <Link>Higiene Pessoal</Link>
    </nav>
  );
}
