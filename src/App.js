import "./styles.css";
import { useState } from "react";

export default function App() {
  var [meaaeage, messageSetter] = useState("");
  var dob;
  var num;
  function changeHandler(event) {
    dob = event.target.value;
  }
  function numberChange(event) {
    num = event.target.value;
  }
  function clickHandler() {
    const sum = calculateSum(dob);
    compareValues(sum, num);
  }
  function compareValues(sum, num) {
    if (sum % num === 0) messageSetter("your birthday is lucky");
    else messageSetter("your birthday is not lucky");
  }
  function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
      sum = sum + Number(dob.charAt(i));
    }
    return sum;
  }
  return (
    <div className="App">
      <h1>is your Birthday Lucky?</h1>
      <label>Birth Date:</label>
      <input type="date" id="date-of-birth" onChange={changeHandler}></input>
      <label>Lucky Number:</label>
      <input type="number" id="number" onChange={numberChange}></input>
      <button onClick={clickHandler}>Check number</button>
      <p>{meaaeage}</p>
    </div>
  );
}
