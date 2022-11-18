//import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const body = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    const promise = axios.post("http://localhost:5000/sign-up", body);

    promise.then(() => navigate("/"));

    promise.catch((err) => console.log("Deu erro no cadastro"));
  }

  return (
    <>
      <h1>MyWallet</h1>
      <form onSubmit={sendData}>
        <input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          placeholder="Confirme a senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/"}>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </>
  );
}
