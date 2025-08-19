import styles from "./Field.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setField} from "../../../actions/index.js";
import {selectFields} from "../../../selectors/select-fields.js";
import {selectDraw} from "../../../selectors/select-draw.js";
import {selectGameEnd} from "../../../selectors/select-gameEnd.js";

export default function FieldLayout() {
	const fields = useSelector(selectFields);
	const draw = useSelector(selectDraw);
	const gameEnd = useSelector(selectGameEnd);
  const dispatch = useDispatch();

  const putMove = (i) => {
		if (draw || gameEnd) return;

    dispatch(setField(i));
  };

  return (
    <div className={styles.board}>
      {fields.map((item, i) => (
        <button key={i} onClick={() => putMove(i)} className={styles.field}>
          {item}
        </button>
      ))}
    </div>
  );
}
