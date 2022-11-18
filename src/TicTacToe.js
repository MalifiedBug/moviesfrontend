
import { useState } from "react"

export default function TicTacToe(){
    const [board,setBoard] = useState([
        null,
         null, 
         null,
          null,
          null,
           null,
           null,
           null,
            null])
    const [isXturn, setIsXturn] = useState(true);

    const handleClick = (index) =>{
        const copyBoard = [...board];
        if(board[index]===null && winner===null){
           copyBoard[index] = isXturn ? "X" : "O";
        setIsXturn(!isXturn);
        setBoard(copyBoard)
        }
                
    }

    const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const decideWinner = ()=>{
    for (let i = 0; i < winCondition.length; i++) {
        const [a,b,c] = winCondition[i]; 
        if(board[a]!==null&&board[a]===board[b]&&board[b]===board[c]) {
            console.log("The winner is ", board[a], [a,b,c])
            return board[a];
        }
        return null;      
    }    
}

const winner = decideWinner();


    
    return(
        <div>
            <h1>TicTacToe Game</h1>
            <div className="board">
                {board.map((val, index)=>(
                <GameBox index={index} val={val} onPlayerClick = {()=>handleClick(index)}
                />))}
            </div>

            <h2>The winner is: {winner}</h2>

        </div>
    )
}


function GameBox({val, onPlayerClick}){
    // const [val, setVal ] = useState(null)

    const styles = {
        color: val === "X" ? "green" : "red",
    }
    return(
        <div style={styles} 
        className="game-box"
        onClick={()=>onPlayerClick()}
        >
            {val}
        </div>
    )
}