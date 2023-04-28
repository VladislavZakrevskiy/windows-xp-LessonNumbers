import React from 'react'
import { calculateWinner } from './Game';
import Square from './Square';
import { Box, IconButton, Typography } from '@mui/material';
import RestartAlt from '@mui/icons-material/RestartAlt';

function Board({ xIsNext, squares, onPlay, jumpTo }) {
    function clearState(){
        jumpTo(0)
    }

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
      status = 'Winner__' + winner;
    } else {
      status = 'Next__' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <Box component={'div'} display='flex' flexDirection={'row'} padding={2}>
        <Box component={'div'} display="flex" flexDirection={'column'} justifyContent='center' alignContent={'center'}>
            <Typography 
                fontFamily={'Tahoma'}
                fontSize={24}
                sx={{
                    padding: 3,
                    width: '100%'
                }}
            >
                {status}
            </Typography>
        </Box>
        <Box
            
        >
            <Box 
                component={'div'}
                sx = {{
                    '&:after': {
                        clear: 'both',
                        content: '""',
                        display: 'table',
                        margin: 0
                    },
                    display: 'flex',
                    gap: 0,
                }}
            >
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </Box>
            <Box 
                component={'div'}
                sx = {{
                    '&:after': {
                        clear: 'both',
                        content: '""',
                        display: 'table',
                        margin: 0,
                        display: 'flex',
                        gap: 0,
                    }
                }}
            >
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </Box>
            <Box 
                component={'div'}
                sx = {{
                    '&:after': {
                        clear: 'both',
                        content: '""',
                        display: 'table',
                        margin: 0,
                        display: 'flex',
                        gap: 0,
                    }
                }}
            >
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </Box>
        </Box>
      </Box>
    );
  }

export default Board