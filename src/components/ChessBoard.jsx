import './ChessBoard.css'
import {FaChessRook, FaChessKnight,FaChessBishop,FaChessKing,FaChessQueen, FaChessPawn} from 'react-icons/fa'




function ChessBoard () {
    const squares = [];

    for(let i=1; i<9; i++) {
        for(let j=1; j<9; j++ ) {
            const isDark = (i+j) % 2 === 0; 

            let pieceBlack = null;
            if (i==1 && j==1 || i==1 && j==8) {pieceBlack = <FaChessRook/>};
            if (i==1 && j==2 || i==1 && j==7) {pieceBlack = <FaChessKnight/>}
            if (i==1 && j==3 || i==1 && j==6) {pieceBlack = <FaChessBishop/>}
            if (i==1 && j==4 ) {pieceBlack = <FaChessKing/>}
            if (i==1 && j==5 ) {pieceBlack = <FaChessQueen/>}
            if(i==2 && j==1 || i==2 && j==2 || i==2 && j==3 || i==2 && j== 4 || i==2 && j==5 || i==2 && j==6 || i==2 && j==7 || i==2 && j==8 ) {pieceBlack = <FaChessPawn/> }

            
      
            
            let pieceWhite = null;
            if (i==8 && j==1 || i==8 && j==8) {pieceWhite = <FaChessRook/>};
            if (i==8 && j==2 || i==8 && j==7) {pieceWhite = <FaChessKnight/>}
            if (i==8 && j==3 || i==8 && j==6) {pieceWhite = <FaChessBishop/>}
            if (i==8 && j==4 ) {pieceWhite = <FaChessKing/>}
            if (i==8 && j==5 ) {pieceWhite = <FaChessQueen/>}
            if(i==7 && j==1 || i==7 && j==2 || i==7 && j==3 || i==7 && j== 4 || i==7 && j==5 || i==7 && j==6 || i==7 && j==7 || i==7 && j==8 ) {pieceWhite = <FaChessPawn/> }
            




            squares.push(<div className={`square ${isDark ? 'bright' : 'dark'}`}>
                <span className='icon black'>
                    {pieceBlack}
                </span>
                <span className='icon white'> {pieceWhite} 
                </span>
            </div>)
        }




    }
    
    return (
        <div className='board'>
            {squares}
        </div>
    )
}

export default ChessBoard;