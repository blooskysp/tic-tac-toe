import styles from './Game.module.css';

import Information from './Information/Information.jsx';
import Field from './Field/Field.jsx';
import {useDispatch} from "react-redux";
import {restartGame} from "../../actions/index.js";

export default function GameLayout() {
	const dispatch = useDispatch();

	const reset = () => {
		dispatch(restartGame);
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
