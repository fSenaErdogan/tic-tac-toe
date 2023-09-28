import { useState } from 'react'
import Board from "./components/Board"

export default function Game() {

  const [history, setHistory] = useState([Array(17).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to step' + move;
    } else {
      description = 'GO TO GAME START';
    }
    return (
      <div key={move}>
        <button className="game bg-purple-300 rounded-xl mt-3 p-3 text-white w-full" onClick={() => jumpTo(move)}>{description}</button>
      </div>
    );
  });

  return (
    <div className='bg-black h-screen p-1'>
      <div className="game flex m-3 gap-2 bg-purple-200 rounded-xl p-3 w-[525px]">
      <div className="game-board w-3/4 text-purple-400 text-center">
        <Board className="game-board bg-white rounded-xl " xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info bg-white rounded-xl p-3 w-2/4 max-h-[85dvh] overflow-auto">
        <div>{moves}</div>
      </div>
    </div>
    </div>

    
  );
}


