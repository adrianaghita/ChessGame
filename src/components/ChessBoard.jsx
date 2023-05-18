import './ChessBoard.css'
import {FaChessRook, FaChessKnight,FaChessBishop,FaChessKing,FaChessQueen, FaChessPawn} from 'react-icons/fa'
import { useState } from 'react';




function ChessBoard () {
    const squares = [];
    const [rookPosition, setRookPosition] = useState([{row: 1, col: 1}, {row:1, col:8}]);

    for(let i=1; i<9; i++) {
        for(let j=1; j<9; j++ ) {
            const isDark = (i+j) % 2 === 0; 

            let pieceBlack = null;
            if ((i === rookPosition[0].row && j === rookPosition[0].col) || (i === rookPosition[1].row && j === rookPosition[1].col))
             {pieceBlack = ( <FaChessRook onClick={() => {const updatedPosition = [...rookPosition];
            updatedPosition[0] = {row:3, col:1}; setRookPosition(updatedPosition)}} />
            );
          }
            if (i==1 && (j==2 || j==7)) {pieceBlack = <FaChessKnight/>}
            if (i==1 && (j==3 || j==6)) {pieceBlack = <FaChessBishop/>}
            if (i==1 && j==4 ) {pieceBlack = <FaChessKing/>}
            if (i==1 && j==5 ) {pieceBlack = <FaChessQueen/>}
            if (i==2 && (j==1 || j==2 || j==3 || j== 4 || j==5 || j==6 || j==7 || j==8)) {pieceBlack = <FaChessPawn/> }

            
      
            
            let pieceWhite = null;
            if (i==8 && (j==1 || j==8)) {pieceWhite = <FaChessRook/>};
            if (i==8 && (j==2 || j==7)) {pieceWhite = <FaChessKnight/>}
            if (i==8 && (j==3 || j==6)) {pieceWhite = <FaChessBishop/>}
            if (i==8 && j==4 ) {pieceWhite = <FaChessKing/>}
            if (i==8 && j==5 ) {pieceWhite = <FaChessQueen/>}
            if (i==7 && (j==1 || j==2 || j==3 || j== 4 || j==5 || j==6 || j==7 || j==8)) {pieceWhite = <FaChessPawn/> }
            




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