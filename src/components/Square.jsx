function Square({ value, onSquareClick }) {
    return (
        <button className="square bg-purple-100 bg-opacity-50 border-x border-purple-400 rounded-md w-full h-20 flex items-center justify-center text-purple-600" onClick={onSquareClick}>
            {value}
        </button>
    );
}


export default Square