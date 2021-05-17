import React from "react";
function Restarter(props) {
  let gameFinished = props.gameFinished;
  if (gameFinished) {
    return <button className="restart" onClick={props.handleRestart}>Restart game!</button>;
  } else return <p>No winner yet</p>;
}
export default Restarter;
