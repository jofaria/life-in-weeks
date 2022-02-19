import { useEffect, useState } from "react";

function AgeForm({ ageHandler }) {
  const [date, setDate] = useState(null);

  return (
    <>
      <label>
        <input type="date" value={date} onChange={ageHandler} />
      </label>
    </>
  );
}

export default AgeForm;
