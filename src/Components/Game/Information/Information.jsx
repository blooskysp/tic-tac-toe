import styles from './Information.module.css';
import {useSelector} from "react-redux";
import {selectDraw} from "../../../selectors/select-draw.js";
import {selectGameEnd} from "../../../selectors/select-gameEnd.js";
import {selectCurrentPlayer} from "../../../selectors/select-currentPlayer.js";

export default function InformationLayout() {
	const draw = useSelector(selectDraw);
	const gameEnd = useSelector(selectGameEnd);
	const currentPlayer = useSelector(selectCurrentPlayer);

  const text = draw ? 'Ничья' : gameEnd ? `Победил: ${currentPlayer}` : `Ход: ${currentPlayer}`;



  return <h1 className={styles.title}>{text}</h1>;
}
