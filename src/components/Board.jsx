
import Square from "./Square"
import {calculateWinner} from "../Utils/calculate"



function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status bg-slate-50 rounded-xl mb-1 p-3 w-[300px]">{status}</div>
            <div className="grid grid-cols-1 w-[300px] rounded-xl p-1 bg-slate-50">
                <div className="board-row grid gap-2 grid-cols-3 bg-slate-50 p-1">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row grid gap-2 grid-cols-3 bg-slate-50 p-1">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row grid gap-2 grid-cols-3 bg-slate-50 p-1">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
                <div className="board-row grid gap-2 grid-cols-3 bg-slate-50 p-1">
                    <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
                    <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
                    <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
                </div>
                <div className="board-row grid gap-2 grid-cols-3 bg-slate-50 p-1">
                    <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
                    <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
                    <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
                </div>
                <div className="board-row grid gap-2 grid-cols-3 bg-slate-50 p-1">
                    <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
                    <Square value={squares[16]} onSquareClick={() => handleClick(16)} />
                    <Square value={squares[17]} onSquareClick={() => handleClick(17)} />
                </div>
            </div>

        </>
    );
}


export default Board