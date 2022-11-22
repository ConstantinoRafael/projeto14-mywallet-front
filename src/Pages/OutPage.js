import styled from "styled-components"; 
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/User";

export default function OutPage() {
  const { user } = useUser();
  const [amount, setAmount] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const body = {
      amount: amount,
      description: description,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.post("https://mywallet-api-zdo8.onrender.com/out", body, config);

    promise.then((res) => {
      navigate("/records")
      console.log("entrada cadastrada");
    });

    promise.catch((err) => console.log("Não cadastrou"));
  }

  return (
    <Out>
      <Logo>Nova saída</Logo>
      <Form onSubmit={sendData}>
        <Input
          placeholder="Valor"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        ></Input>
        <Input
          placeholder="Descrição"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
        <Button type="submit">Salvar entrada</Button>
      </Form>
    </Out>
  );
}

const Out = styled.div`
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
  font-size: 26px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 24px;
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