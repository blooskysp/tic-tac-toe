import React from 'react';
import { useState } from 'react';

import GameLayout from './GameLayout.jsx';

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [gameEnd, setGameEnd] = useState(false);
	const [draw, setDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const putMove = (i) => {
		if (field[i] || draw || gameEnd) return;

		const fieldCopy = [...field];
		fieldCopy[i] = currentPlayer;
		setField(fieldCopy);

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (fieldCopy[a] && fieldCopy[a] === fieldCopy[b] && fieldCopy[a] === fieldCopy[c]) {
				setGameEnd(true);
				return;
			}
		}

		if (!fieldCopy.includes('') && !gameEnd) {
			setDraw(true);
			return;
		}

		currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
	};

	const reset = () => {
		setGameEnd(false);
		setDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X')
	};

	return (
		<GameLayout
			field={field}
			gameEnd={gameEnd}
			draw={draw}
			currentPlayer={currentPlayer}
			putMove={putMove}
			reset={reset}
		/>
	);
}
