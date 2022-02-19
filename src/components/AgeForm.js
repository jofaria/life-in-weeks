import { useEffect, useState } from "react";

function AgeForm({ ageHandler }) {
  const [date, setDate] = useState("");

  const handleChange = (e) => setDate(e.target.value);

  return (
    <form onSubmit={ageHandler}>
      <label>
        <input type="date" value={date} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AgeForm;
