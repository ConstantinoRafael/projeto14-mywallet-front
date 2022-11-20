export default function RecordsList({ recordsList }) {
  let total = 0;

  for (let i = 0; i < recordsList.length; i++) {
    if (recordsList[i].type === "in") {
      total = total + parseFloat(recordsList[i].amount);
    } else {
      total = total - parseFloat(recordsList[i].amount);
    }
  }

  console.log(total);

  return (
    <>
      {recordsList.map((r) => (
        <>
          <div>
            <p>{r.date}</p>
            <p>{r.description}</p>
            <p>{r.amount}</p>
          </div>
          <p>Saldo</p>
          <p>{total}</p>
        </>
      ))}
    </>
  );
}
