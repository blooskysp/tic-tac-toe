import React from 'react';
import styles from './Field.module.css';

export default function FieldLayout({ field, putMove }) {
	return (
		<div className={styles.board}>
			{field.map((item, i) => (
				<button onClick={() => putMove(i)} key={i} className={styles.field}>
					{item}
				</button>
			))}
		</div>
	);
}
