import React,{useState} from 'react'
import Square from './Square';
import "./style.css";

function TicTac2() {
    const[square,setSquare]=useState(Array(9).fill(null));
    const[xIsNext,setXIsNext]=useState(true);

    const handleClick=(i)=>{
        if(square[i]||calculateWinner(square)){
            return;
        }
        const nextSquare=square.slice();
        if(xIsNext){
            nextSquare[i]="X"
        }
        else{
            nextSquare[i]='O';
        }
        setSquare(nextSquare);
        // onPlay(nextSquare);
        setXIsNext(!xIsNext);
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
      

    
    const winner=calculateWinner(square);
    let status;
    if(winner){
        status="Winner: "+ winner;
    }
    else{
        status="Next player: " + (xIsNext ? "X" :"O")
    }

    
    return (
        <>
            <div className='status'>{status}</div>
            <div className='board-row'>
            <Square value={square[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
            </div>
            <div className='board-row'>
            <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>
            </div>
            <div className='board-row'>
            <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
        </>
    )
}

export default TicTac2;


