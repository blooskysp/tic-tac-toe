import { store } from '../../../store.js';
import { useState, useEffect } from 'react';
import styles from './Information.module.css';

export default function InformationLayout() {
  const state = store.getState();
  const [text, setText] = useState(`Ход: ${state.currentPlayer}`);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { gameEnd, draw, currentPlayer } = store.getState();
      setText(
        gameEnd
          ? `Победитель: ${currentPlayer}`
          : draw
          ? 'Ничья'
          : `Ход: ${currentPlayer}`
      );
    });

    return unsubscribe;
  }, []);

  return <h1 className={styles.title}>{text}</h1>;
}
