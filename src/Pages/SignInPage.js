import axios from "axios";
import { useState } from "react";
import { useUser } from "../Context/User";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignInPage() {
  const { setUser } = useUser();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    const promise = axios.post("https://mywallet-api-zdo8.onrender.com/sign-in", body);

    promise.then((res) => {
      setUser(res.data);

      navigate("/records");
    });

    promise.then((err) => console.log(err.responde.data));
  }

  return (
    <SignIn>
      <Logo>MyWallet</Logo>

      <Form onSubmit={sendData}>
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button type="submit">Entrar</Button>
      </Form>

      <Link to={"/sign-up"}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </SignIn>
  );
}

const SignIn = styled.div`
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




