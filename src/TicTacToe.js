import "./App.css";
import { useState } from "react";

export default function TicTacToe({ isVisible }) {
  const [turn, setTurn] = useState(true);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const allEqual = (arr) => arr.every((val) => val === "");
  const result = allEqual(data);

  const check = () => {
    if (!result) {
      if (
        (data[0] === data[1] && data[1] === data[2] && data[0] !== "") ||
        (data[3] === data[4] && data[4] === data[5] && data[3] !== "") ||
        (data[6] === data[7] && data[7] === data[8] && data[6] !== "") ||
        (data[0] === data[3] && data[3] === data[6] && data[0] !== "") ||
        (data[1] === data[4] && data[4] === data[7] && data[1] !== "") ||
        (data[2] === data[5] && data[5] === data[8] && data[2] !== "") ||
        (data[0] === data[4] && data[4] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[4] === data[6] && data[2] !== "")
      ) {
        if (turn) {
          alert("X win's");
        } else {
          alert("O win's");
        }

        setTimeout(setData(["", "", "", "", "", "", "", "", ""]), 1000);
      } else if (
        data[0] &&
        data[1] &&
        data[2] &&
        data[3] &&
        data[4] &&
        data[5] &&
        data[6] &&
        data[7] &&
        data[8] === ("X" || "O")
      ) {
        alert("draw");
      }
    } else {
    }
  };

  const write = (e, i) => {
    if (turn === true && data[i] === "") {
      data[i] = "X";
      setData(data);
      check();
    } else if (data[i] === "") {
      data[i] = "O";
      setData(data);
      check();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 grid-rows-3 m-4 gap-2 w-80 h-96 self-center border-4 rounded-lg border-indigo-600 p-2">
        {data.map((e, i) => (
          <div
            id={i}
            onClick={(e) => {
              write(e, i);
              setTurn(!turn);
              console.log(data);
            }}
            className="border bg-slate-400 border-emerald-300 rounded-lg text-5xl flex flex-col justify-center items-center"
          >
            <p className={e === "X" ? "text-red-500" : "text-green-500"}>{e}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setData(["", "", "", "", "", "", "", "", ""]);
          console.log("board reset");
        }}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full w-20 h-auto self-center"
      >
        Reset board
      </button>
    </div>
  );
}

