import React from 'react';

import InformationLayout from './InformationLayout.jsx';

export default function Information({ gameEnd, draw, currentPlayer }) {
	return (
		<InformationLayout
			text={
				draw
					? 'Ничья'
					: gameEnd
						? `Победитель: ${currentPlayer}`
						: `Ход: ${currentPlayer}`
			}
		/>
	);
}
