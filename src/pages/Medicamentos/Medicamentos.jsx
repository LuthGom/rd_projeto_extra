import { url } from "../../services/api";
import styles from "./Medicamentos.module.css";
import { useState, useEffect } from "react";

export default function Medicamentos() {
  const [values, setValues] = useState([]);
  console.log("values", values);
  const getApi = () => {
    url.get("/produtos").then((response) => {
      console.log(response.data.produtos);
      setValues(response.data.produtos);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className={styles.Medicamentos}>
      {values.map((produto) => {
        return (
          <span>
            <p>{produto.nome}</p>
            <p>Descrição: {produto.descricao}</p>
            <p>Preço: {produto.preco}</p>
            <img
              src={produto.url_imagem}
              alt={produto.descricao}
              width="150px"
              height="150px"
            />
          </span>
        );
      })}
    </div>
  );
}
