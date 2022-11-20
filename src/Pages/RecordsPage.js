import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecordsList from "../Components/RecordsList";
import { useUser } from "../Context/User";

export default function RecordsPage() {
  const { user } = useUser(undefined);
  const [recordsList, setRecordsList] = useState([]);
  const [name, setName] = useState(undefined);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.get("http://localhost:5000/records", config);

    promise.then((res) => {
      console.log(res.data);
      setName(res.data.user.name);
      setRecordsList(res.data.recordsUser);
    });

    promise.catch((err) => console.log(err.responde.data));
  }, [user.token, setName]);

  console.log(recordsList);

  return (
    <>
      <h1>Olá, {name}</h1>
      {recordsList.length === 0 ? (
        <p>Não há registros de entrada ou saída</p>
      ) : (
        <RecordsList recordsList={recordsList} />
      )}

      <div>
        <Link to={"/in"}>
          <div>Nova entrada</div>
        </Link>
        <Link to={"/out"}>
          <div>Nova saída</div>
        </Link>
      </div>
    </>
  );
}
