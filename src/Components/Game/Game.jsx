import { store } from '../../store.js';
import styles from './Game.module.css';

import Information from './Information/Information.jsx';
import Field from './Field/Field.jsx';

export default function GameLayout() {
	const reset = () => {
		store.dispatch({ type: 'RESTART_GAME' })
	}

	return (
		<div className={styles.container}>
			<Information />
			<Field />
			<button onClick={reset} className={styles.reset}>
				Начать заново
			</button>
		</div>
	);
}
