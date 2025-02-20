import React from "react";
import Counter from "./components/Counter";
import Pantek from "./components/pantek";

function App() {
  return (
    <>
      <Counter />
      <br />
      <Pantek />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <Counter />
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React <Pantek />
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
