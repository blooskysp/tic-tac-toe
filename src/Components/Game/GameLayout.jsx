import React from 'react';
import styles from './Game.module.css';

import Information from './Information/Information.jsx';
import Field from './Field/Field.jsx';

export default function GameLayout({
	reset,
	field,
	draw,
	gameEnd,
	currentPlayer,
	putMove,
}) {
	return (
		<div className={styles.container}>
			<Information
				field={field}
				draw={draw}
				gameEnd={gameEnd}
				currentPlayer={currentPlayer}
			/>
			<Field field={field} putMove={putMove} />
			<button onClick={reset} className={styles.reset}>
				Начать заново
			</button>
		</div>
	);
}
