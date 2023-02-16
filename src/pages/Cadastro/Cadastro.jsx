import React, { useState } from "react";
import Input from "../../components/Input/Input";
import styles from "./Cadastro.module.css";
import { url } from "../../services/api";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import e from "cors";

export default function Cadastro() {
  const valoresIniciais = {
    nome: "",
    sobrenome: "",
    cpf: "",
    endereco: "",
    cidade: "",
    bairro: "",
    numero: 0,
    email: "",
    senha: "",
  };

  const [body, setBody] = useState(valoresIniciais);
  const postApi = () => {
    url
      .post("https://projeto-extra-api.onrender.com/clientes", body)
      .then((resposta) => resposta.data.error)
      .catch((erro) => console.log(erro));
  };

  const onChangeInput = (evento) => {
    const { name, value } = evento.target;
   
      setBody({ ...body, [name]: value });
    
  };

  return (
    <form className={styles.Cadastro}>
      <Input
        name="nome"
        label="Nome: "
        onChange={(e) => onChangeInput(e)}
        placeholder="Digite seu nome aqui"
        id="nome"
      />
      <Input
        name="sobrenome"
        label="Sobrenome: "
        onChange={(e) => onChangeInput(e)}
        placeholder="Digite seu sobrenome aqui"
        id="sobrenome"
      />
      <Input
        name="cpf"
        label="Cpf: "
        onChange={(e) => onChangeInput(e)}
        placeholder="somente numeros. ex.: 1111111111"
        id="cpf"
      />
      <Input
        name="endereco"
        label="Enderenço: "
        onChange={(e) => onChangeInput(e)}
        placeholder="Ex.: Rua do peró"
        id="endereco"
      />
      <Input
        name="cidade"
        label="Cidade: "
        onChange={(e) => onChangeInput(e)}
        placeholder="Ex.: Cabo Frio"
        id="cidade"
      />
      <Input
        name="bairro"
        label="Bairro: "
        onChange={(e) => onChangeInput(e)}
        placeholder="Ex: Peró"
        id="bairro"
      />
      <Input
        name="numero"
        label="numero: "
        onChange={(e) => onChangeInput(e)}
        placeholder="Ex.: 430"
        id="numero"
      />
      <Input
        name="email"
        label="Email: "
        onChange={(e) => onChangeInput(e)}
        placeholder="exemplo@email.com"
        id="email"
      />
      <Input
        name="senha"
        label="Senha: "
        onChange={(e) => onChangeInput(e)}
        placeholder="Caracteres e numeros"
        type="password"
        id="senha"
      />

      <SubmitButton
        onClick={(e) => {
          e.preventDefault();
          postApi();
        }}
        nome="Cadastrar"
        type="submit"
      />
    </form>
  );
}
