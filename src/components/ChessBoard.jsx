import './ChessBoard.css'


function ChessBoard () {
    const squares = [];

    for(let i=1; i<9; i++) {
        for(let j=1; j<9; j++ ) {
            const isDark = (i+j) % 2 === 0; 




            squares.push(<div className={`square ${isDark ? 'bright' : 'dark'}`}></div>)
        }




    }
    
    return (
        <div className='board'>
            {squares}
        </div>
    )
}

export default ChessBoard;