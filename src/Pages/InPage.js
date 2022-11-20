import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/User";

export default function InPage() {
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

    const promise = axios.post("http://localhost:5000/in", body, config);

    promise.then((res) => {
      console.log("entrada cadastrada");
    });

    promise.catch((err) => console.log("Não cadastrou"));
  }

  return (
    <>
      <h1>Nova entrada</h1>
      <form onSubmit={sendData}>
        <input
          placeholder="Valor"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <input
          placeholder="Descrição"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button type="submit">Salvar entrada</button>
      </form>
    </>
  );
}
