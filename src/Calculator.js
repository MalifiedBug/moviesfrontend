import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export default function Calculator() {
  // const [display, setDisplay] = useState("");
    
  // setDisplay(document.getElementById("screen"))
  // let calculations = [];

  // function clicked(value) {
  //  setDisplay(value)
  // }

  // function calculate() {
  //   // eslint-disable-next-line no-useless-escape
  //   var regex = /^(-?\d+(?:\.\d+)?)([-+*\/])(-?\d+(?:\.\d+)?)$/;

  //   let str = display.value;
  //   let res = str.match(regex);
  //   let num1 = "";
  //   let num2 = "";

  //   if (res !== null) {
  //     num1 = parseFloat(res[1]);
  //     var operator = res[2];
  //     num2 = parseFloat(res[3]);

  //     if (operator === "*") {
  //       let total = num1 * num2;
  //       display.value = total.toFixed(2);
  //       let myData = {
  //         input: res[0],
  //         output: total.toFixed(2),
  //       };
  //       calculations.push(myData);
  //     } else if (operator === "/") {
  //       let total = num1 / num2;
  //       display.value = total.toFixed(2);
  //       let myData = {
  //         input: res[0],
  //         output: total.toFixed(2),
  //       };
  //       calculations.push(myData);
  //     } else if (operator === "+") {
  //       let total = num1 + num2;
  //       display.value = total.toFixed(2);
  //       let myData = {
  //         input: res[0],
  //         output: total.toFixed(2),
  //       };
  //       calculations.push(myData);
  //     } else if (operator === "-") {
  //       let total = num1 - num2;
  //       display.value = total.toFixed(2);
  //       let myData = {
  //         input: res[0],
  //         output: total.toFixed(2),
  //       };
  //       calculations.push(myData);
  //     }
  //   } else {
  //     alert("Enter valid input. One calculation at a time");
  //     display.value = "";
  //   }

  //   const table = document.getElementById("user-table-data");
  //   let userHtml = "";
  //   calculations.forEach((user, i) => {
  //     userHtml += `<tr><th scope="row">${i + 1}</th><td>${user.input}</td><td>${
  //       user.output
  //     }</td></tr>`;
  //   });
  //   table.innerHTML = userHtml;

  //   console.log(calculations);
  // }

  // function clearall() {
  //   setDisplay(0)
  // }

  // function clearHistory() {
  //   const table = document.getElementById("user-table-data");
  //   calculations = [];
  //   table.innerHTML = null;
  // }

  // function backspace() {
  //   let string = display;
  //   string = string.substring(0, string.length - 1);
  //   setDisplay(string)
  // }

  return (
    <div>
      <div className="border border-primary rounded bg-light w-80 p-4">
        <div className="w-100">
          <div className="d-flex justify-content-center">
            <input
              style={{
                height: "5rem",
                width: "80%",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
              className="border bg-secondary text-white rounded border-success input-lg"
              id="screen"
              // onChange={(e)=>setDisplay(e.target.value)}
              // value={display}
            />
          </div>
        </div>
        <div className="container text-center">
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-auto">
              <input
                className="btn btn-md btn-info"
                style={{ marginBottom: "1rem" }}
                type="button"
                defaultValue="clearInput"
                // onclick={clearall()}
              />
            </div>
            <div className="col col-lg-auto">
              <input
                className="btn btn-md btn-warning"
                style={{ marginBottom: "1rem" }}
                type="button"
                defaultValue="Backspace"
                // onclick={backspace()}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={7}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={8}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={9}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue="*"
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={4}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={5}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={6}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue="/"
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={1}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={2}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={3}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue="-"
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue="+"
                type="button"
                className="btn btn-lg btn-info"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue={0}
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={(e) => clicked(e.target.value)}
                style={{ marginBottom: "1rem" }}
                defaultValue="."
                type="button"
                className="btn btn-lg btn-primary"
              />
            </div>
            <div className="col col-lg-auto">
              <input
                // onclick={calculate()}
                defaultValue="="
                type="button"
                className="btn btn-lg btn-info"
              />
            </div>
          </div>
        </div>
        <div></div>
        <div className="d-flex justify-content-end m-3">
          <input
            className="btn btn-md btn-danger"
            type="button"
            defaultValue="clearHistory"
            // onclick={clearHistory()}
          />
        </div>
        <div>
          <h1>History</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>#</td>
                <td>Input</td>
                <td>Output</td>
              </tr>
            </thead>
            <tbody id="user-table-data">
              <tr>
                <td>Sr No.</td>
                <td>Arithmetic Operation</td>
                <td>Result</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
