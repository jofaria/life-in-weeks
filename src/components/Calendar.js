function Calendar({ ageInWeeks }) {
  const grid = [];
  const lifeExpectancy = 99;
  let weeksInYear = 52;
  let oneYear = [];

  let yearsLived = ageInWeeks / weeksInYear;
  //let roundedYearsLived = Math.floor(yearsLived);
  console.log("yearsLived", yearsLived);
  let decimal = yearsLived - Math.floor(yearsLived);
  console.log("decimal", decimal);
  let remainingWeeks = Math.floor(decimal * weeksInYear);
  console.log("remainingWeeks", remainingWeeks);
  let unlivedWeeks = weeksInYear - remainingWeeks;

  const blackSquare = "■";
  const whiteSquare = "▢";
  console.log("age in weeks in calendar", ageInWeeks);

  function createGrid() {
    if (ageInWeeks) {
      // If less than one year old
      if (ageInWeeks <= weeksInYear) {
        remainingWeeks = weeksInYear - ageInWeeks;
        oneYear.push([
          blackSquare.repeat(ageInWeeks),
          whiteSquare.repeat(remainingWeeks),
        ]);

        grid.push(oneYear);
      }
      // if more than one year old
      else {
        // Add 52 black squares to a year
        for (let i = 0; i < weeksInYear; i++) {
          oneYear.push(blackSquare);
        }

        // add years lived to the grid
        for (let j = 1; j < yearsLived; j++) {
          grid.push(oneYear);
        }

        // add year with unfinished weeks
        grid.push([
          blackSquare.repeat(remainingWeeks),
          whiteSquare.repeat(unlivedWeeks),
        ]);
      }
      // add all the remaining unlived year
      for (let k = grid.length; k < lifeExpectancy; k++) {
        grid.push([whiteSquare.repeat(52)]);
      }
    } else {
      // start out with all white squares per year
      for (let i = 0; i < weeksInYear; i++) {
        oneYear.push(whiteSquare);
      }
      // start out with all 99 years in grid
      for (let j = 0; j <= lifeExpectancy; j++) {
        grid.push(oneYear);
      }
    }
  }

  createGrid();

  return (
    <>
      <h6>Weeks</h6>
      <div className="calendar-container">
        {grid.map((el, i) => {
          return (
            <p key={i} className="year-row">
              <span className="year-number">{i}.</span>
              <span className="year-array">{el}</span>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Calendar;
