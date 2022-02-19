function Calendar({ ageInWeeks }) {
  const grid = [];
  const oneYear = [];
  const years = 99;
  const weeks = 52;
  const blackSquare = "▣";
  const whiteSquare = "□";

  console.log(ageInWeeks);

  function createGrid() {
    if (ageInWeeks) {
      for (let i = 0; i < weeks; i++) {
        oneYear.push(blackSquare);
      }

      for (let j = 0; j <= ageInWeeks / 52; j++) {
        grid.push(oneYear);
      }
    } else {
      for (let i = 0; i < weeks; i++) {
        oneYear.push(whiteSquare);
      }

      for (let j = 0; j <= years; j++) {
        grid.push(oneYear);
      }
      console.log("oneYear", oneYear);
      console.log("grid", grid);
    }
  }

  createGrid();

  return (
    <>
      <h6>Weeks</h6>
      {grid.map((el, i) => {
        return (
          <p key={i}>
            <span>{i}.</span> {el}
          </p>
        );
      })}
    </>
  );
}

export default Calendar;
