import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecordsList from "../Components/RecordsList";
import { useUser } from "../Context/User";
import { BsPlusCircle, BsDashCircle, BsBoxArrowRight } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

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
      setName(res.data.user.name);
      setRecordsList(res.data.recordsUser);
    });

    promise.catch((err) => console.log(err.response.data));
  }, [user.token, setName]);

  return (
    <Records>
      <Header>
        <Logo>Olá, {name}</Logo>
        <RiLogoutBoxRLine />
      </Header>

      <BoxList>
        {recordsList.length === 0 ? (
          <NoInAndOut>
            <h2>Não há registros de </h2>
            <h2>entrada ou saída</h2>
          </NoInAndOut>
        ) : (
          <RecordsList recordsList={recordsList} />
        )}
      </BoxList>

      <FooterBoxes>
        <Link to={"/in"}>
          <Box>
            <BsPlusCircle />
            <span>
              Nova <br></br>entrada
            </span>
          </Box>
        </Link>
        <Link to={"/out"}>
          <Box>
            <BsDashCircle />
            <span>
              Nova <br></br>saída
            </span>
          </Box>
        </Link>
      </FooterBoxes>
    </Records>
  );
}

const Records = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  h2 {
    color: #868686;
    font-size: 20px;
  }
`;

const Header = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 25px;
`;

const Logo = styled.h1`
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const BoxList = styled.div`
  width: 326px;
  height: 446px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: #000000;
  }
`;

const NoInAndOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  margin: auto;
`;

const FooterBoxes = styled.div`
  display: flex;
  width: 326px;
  justify-content: space-between;
  margin-top: 13px;
`;

const Box = styled.div`
  width: 135px;
  height: 94px;
  border-radius: 5px;
  background-color: #a328d6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
`;
