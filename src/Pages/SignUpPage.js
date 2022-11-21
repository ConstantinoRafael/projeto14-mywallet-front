import styled from "styled-components";
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
    <SignUp>
      <Logo>MyWallet</Logo>
      <Form onSubmit={sendData}>
        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          placeholder="Confirme a senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
        <Button type="submit">Cadastrar</Button>
      </Form>

      <Link to={"/"}>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </SignUp>
  );
}

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  p{
    color:#ffffff;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Logo = styled.h1`
  color: #ffffff;
  font-size: 32px;
  margin-top: 159px;
  margin-bottom: 24px;
  font-family: "Saira Stencil One", cursive;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`

const Input = styled.input`
  width: 326px;
  height: 58px;
  background-color: #ffffff;
  color: #000000;
  font-size: 20px;
  border-radius: 5px;
  border-style: solid;
  padding-left: 10px;
  margin-bottom: 13px;

   ::placeholder{
    color: #000000;
    font-size: 20px;
    font-weight: 400;
   }
`

const Button = styled.button`
  width: 346px;
  height: 46px;
  border-radius: 5px;
  border:none;
  background-color: #A328D6;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 36px;

`
