// FieldLayout.jsx
import { useEffect, useState } from "react";
import { store } from "../../../store.js";
import styles from "./Field.module.css";

export default function FieldLayout() {
  const [fields, setFields] = useState(store.getState().fields);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setFields(store.getState().fields);
    });

    return unsubscribe;
  }, []);

  const putMove = (i) => {
    store.dispatch({ type: "SET_FIELD", payload: i });
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
