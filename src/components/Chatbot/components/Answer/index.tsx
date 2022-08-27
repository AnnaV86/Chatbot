import React from 'react';
import style from './answer.module.css';

export const Answer = ({ dataAnswer }) => {
	let styles = {};
	if (dataAnswer.styles) {
		styles = Object.fromEntries(
			dataAnswer.styles.split(' ').map(style => style.split(':'))
		);
	}
	return (
		<>
			<h2 className={style.answerTitle}>Ответ на сообщение:</h2>
			<div className={style.answerUserText}>
				<p className={style.answerUser}>{dataAnswer.name}</p>
				<div style={styles}>
					<p className={style.answerText}>
						{dataAnswer.message.split('\n').map((el, index) => (
							<p key={index}>{el}</p>
						))}
					</p>
				</div>
			</div>
		</>
	);
};
