import Input from "../../components/Input/Input";
import styles from "./Cadastro.module.css";
import { url } from "../../services/api";
import { useState } from "react";
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
  console.log(body);

  const postApi = () => {
    url
      .post("/clientes", body)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setBody({ ...body, [name]: value });
  };
  const limpaCampos = () => {
    setBody(valoresIniciais);
  };
  return (
    <form>
      <Input
        label="Nome: "
        name="nome"
        id="nome"
        placeholder="Digite seu primeiro Nome aqui"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={body.nome}
      />
      <Input
        label="Sobrenome: "
        name="sobrenome"
        id="sobrenome"
        placeholder="Digite seu ultimo Nome aqui"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={body.sobrenome}
      />
      <Input
        label="Cpf: "
        name="cpf"
        id="cpf"
        placeholder="ex.: 111.111.111-11"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={body.cpf}
      />
      <Input
        label="Endereço: "
        name="endereco"
        id="endereco"
        placeholder="ex.: Rua da Benção"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={body.endereco}
      />
      <Input
        label="Cidade: "
        name="cidade"
        id="cidade"
        placeholder="ex.: Araruama"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={body.cidade}
      />
      <Input
        label="Bairro: "
        name="bairro"
        id="bairro"
        placeholder="ex.: Parque RD"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={body.bairro}
      />
      <Input
        label="Numero: "
        name="numero"
        id="numero"
        placeholder="ex.: 01"
        type="number"
        onChange={(e) => handleOnChange(e)}
        value={body.numero}
      />
      <Input
        label="Email: "
        name="email"
        id="email"
        placeholder="ex.: email@example.com"
        type="e-mail"
        onChange={(e) => handleOnChange(e)}
        value={body.email}
      />
      <Input
        label="Senha: "
        name="senha"
        id="senha"
        placeholder="Digite sua senha aqui."
        type="password"
        onChange={(e) => handleOnChange(e)}
        // definindo um valor, conseguimos utilizar a função limpaCampos(), que reseta os inputs para vazios
        value={body.senha}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          postApi();
          limpaCampos();
        }}
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  );
}
