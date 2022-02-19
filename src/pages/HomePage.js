import AgeForm from "../components/AgeForm";
import Calendar from "../components/Calendar";
import { useState } from "react";

function HomePage() {
  const [ageInWeeks, setAgeInWeeks] = useState(0);

  let currentDate = new Date();

  const calculateAge = (event) => {
    let birthDate = new Date(event.target.value);

    function millisecsToWeeks(millisecs) {
      let result = Math.floor(millisecs / 604800000);
      return result;
    }

    const milliseconds = currentDate - birthDate;
    console.log(milliseconds);
    let weeksOld = millisecsToWeeks(milliseconds);
    console.log(weeksOld);

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