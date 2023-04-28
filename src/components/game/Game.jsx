import RestartAlt from '@mui/icons-material/RestartAlt';
import { Box, Button, Grid, IconButton, List, ListItem } from '@mui/material';
import { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
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
      description = 'GO_#' + move;
    } else {
      description = <RestartAlt fontSize='large'/>
    }
    return (
      <Box key={move}>
        <Button variant='outlined' onClick={() => jumpTo(move)}>{description}</Button>
      </Box>
    );
  });

  return (
    <Box component={'div'} display={'flex'} flexDirection={'row'} padding={3} justifyContent='center' alignContent={'center'} >
        <Box component={'div'} display='flex' gap={0}>
            <Board jumpTo={jumpTo} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </Box>
        <Box  component={'div'} display='grid' gridTemplateColumns={'1fr 1fr'} gridTemplateRows={'repeat(5, 50px)'} justifyContent={'center'} alignItems={'center'}> 
            {moves}
        </Box>
    </Box>
  );
}

export function calculateWinner(squares) {
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
