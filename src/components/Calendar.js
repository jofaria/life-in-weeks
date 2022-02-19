function Calendar({ ageInWeeks }) {
  const grid = [];
  const oneYear = [];
  const years = 99;
  const weeks = 52;
  const blackSquare = "▪";
  const whiteSquare = "▫";

  console.log(ageInWeeks);

  function createGrid() {
    if (ageInWeeks) {
      // add black squares to each year lived
      for (let i = 0; i < weeks; i++) {
        oneYear.push(blackSquare);
      }
      // add each lived year to the grid
      for (let j = 0; j <= ageInWeeks / 52; j++) {
        grid.push(oneYear);
      }
      // add remaining unlived years to the grid
      for (let k = grid.length; k <= years; k++) {
        grid.push([whiteSquare.repeat(52)]);
      }
    } else {
      // start out with all white squares per year
      for (let i = 0; i < weeks; i++) {
        oneYear.push(whiteSquare);
      }
      // start out with all 99 years in grid
      for (let j = 0; j <= years; j++) {
        grid.push(oneYear);
      }
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
