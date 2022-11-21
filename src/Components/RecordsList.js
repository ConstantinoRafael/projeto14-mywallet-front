import styled from "styled-components";

export default function RecordsList({ recordsList }) {
  let total = 0;

  for (let i = 0; i < recordsList.length; i++) {
    if (recordsList[i].type === "in") {
      total = total + parseFloat(recordsList[i].amount);
    } else {
      total = total - parseFloat(recordsList[i].amount);
    }
  }

  //const decimalTotal = total.toFixed(2)

  

  return (
    <>
      <div>
        {recordsList.map((r) => (
          <Record>
            <div>
              <Date>{r.date}</Date>
              <Description>{r.description}</Description>
            </div>
            {r.type === "in" ? (
              <AmountGreen>{r.amount}</AmountGreen>
            ) : (
              <AmountRed>{r.amount}</AmountRed>
            )}
          </Record>
        ))}
      </div>
      <Balance>
        <p>SALDO</p>
        {total >= 0 ? (
          <AmountGreen>{total}</AmountGreen>
        ) : (
          <AmountRed>{total}</AmountRed>
        )}
      </Balance>
    </>
  );
}

const Record = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 23px 12px 0px 12px;

  div {
    display: flex;
  }
`;

const AmountGreen = styled.span`
  color: green;
`;

const AmountRed = styled.span`
  color: red;
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 12px 12px 12px;

  p {
    color:#000000;
    font-size: 17px;
    font-weight: 700;
  }

  span {
    font-size: 17px;
    font-weight: 400;
  }
 
`;

const Date = styled.span`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: 400;
`
const Description = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`