import styles from "./Field.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setField} from "../../../actions/index.js";
import {selectFields} from "../../../selectors/select-fields.js";

export default function FieldLayout() {
	const fields = useSelector(selectFields);
  const dispatch = useDispatch();

  const putMove = (i) => {
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
