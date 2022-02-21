import AgeForm from "../components/AgeForm";
import Calendar from "../components/Calendar";
import { useState } from "react";

function HomePage() {
  const [ageInWeeks, setAgeInWeeks] = useState(0);

  let currentDate = new Date();

  const calculateAge = (e) => {
    e.preventDefault();

    let birthDate = new Date(e.target[0].value);

    function millisecsToWeeks(millisecs) {
      let result = Math.floor(millisecs / 604800000);
      return result;
    }

    const milliseconds = currentDate - birthDate;
    let weeksOld = millisecsToWeeks(milliseconds);

    setAgeInWeeks(weeksOld);
  };

  return (
    <>
      <AgeForm ageHandler={calculateAge} />
      <Calendar ageInWeeks={ageInWeeks} />
    </>
  );
}

export default HomePage;
