import React from "react";
import ReactDOM from "react-dom";
import BoardView from "./components/Board";
import "./main.scss";
import "./styles.scss";



const App = () => {
  return (<div>
    <h1>SLUGTERRA</h1>
    <BoardView />;
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));