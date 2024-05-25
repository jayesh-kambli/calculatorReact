import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  const [exp, setExp] = useState("");
  const [res, setRes] = useState();

  const CustBtn = ({ text, click }) => {
    return (<button style={{ width: "3rem", height: "3rem", margin: "0.5rem", border: "2px solid black", borderRadius: "0.4rem" }} onClick={click}>{text}</button>)
  }

  const calculate = () => {
    if (exp) {
      if (exp.includes("/0")) {
        setRes("Infinity");
      } else {
        try {
          setRes(evaluate(exp));
        } catch (error) {
          setRes("Error");
        }
      }
    } else {
      setRes("Error")
    }
  };

  return (
    <div className="main">
      <h1>React Calculator</h1>
      <input value={exp} />
      <p>{res}</p>
      <div style={{ marginBlockStart: "2rem" }}>
        <CustBtn text={1} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={2} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={3} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={"+"} click={(event) => setExp((prev) => prev + event.target.innerHTML)} /><br />
        <CustBtn text={4} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={5} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={6} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={"-"} click={(event) => setExp((prev) => prev + event.target.innerHTML)} /><br />
        <CustBtn text={7} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={8} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={9} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={"*"} click={(event) => setExp((prev) => prev + event.target.innerHTML)} /><br />
        <CustBtn text={"c"} click={(event) => {
          setExp("");
          setRes();
        }} />
        <CustBtn text={0} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
        <CustBtn text={"="} click={calculate} />
        <CustBtn text={"/"} click={(event) => setExp((prev) => prev + event.target.innerHTML)} />
      </div>
    </div>
  );
}

export default App;
