import React from 'react';
import styles from './Information.module.css'

export default function InformationLayout({ text }) {
	return <h1 className={styles.title}>{text}</h1>;
}
