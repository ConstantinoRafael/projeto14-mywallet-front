import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  //const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    const promise = axios.post("http://localhost:5000/sign-in", body);

    promise.then(() => console.log("entrooou"));

    promise.then((err) => console.log("Deu erro no login"));
  }

  return (
    <>
      <h1>MyWallet</h1>

      <form onSubmit={sendData}>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Entrar</button>
      </form>

      <Link to={"/sign-up"}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </>
  );
}
