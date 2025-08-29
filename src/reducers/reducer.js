const initialState = {
	fields: Array(9).fill(''),
	currentPlayer: 'X',
	gameEnd: false,
	draw: false,
	WIN_PATTERNS: [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	],
};

export const reducer = (state = initialState, actions) => {
	const { type, payload } = actions;

	switch (type) {
		case 'SET_FIELD': {
			if (state.fields[payload]) return state;

			const { draw, gameEnd, currentPlayer } = state;

			const fieldsCopy = [...state.fields];
			fieldsCopy[payload] = state.currentPlayer;

			if (draw || gameEnd) return state;

			for (let i = 0; i < state.WIN_PATTERNS.length; i++) {
				const [a, b, c] = state.WIN_PATTERNS[i];
				if (
					fieldsCopy[a] &&
					fieldsCopy[a] === fieldsCopy[b] &&
					fieldsCopy[a] === fieldsCopy[c]
				) {
					return {
						...state,
						fields: fieldsCopy,
						gameEnd: true,
					};
				}
			}

			if (fieldsCopy.every((field) => field)) {
				return {
					...state,
					fields: fieldsCopy,
					draw: true,
				};
			}

			return {
				...state,
				fields: fieldsCopy,
				currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
			};
		}

		case 'RESTART_GAME':
			return initialState;

		default:
			return state;
	}
};
