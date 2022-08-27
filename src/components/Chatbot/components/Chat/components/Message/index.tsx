import React from 'react';
import style from './message.module.css';

export const Message = ({ logo, post }) => {
	let styles = {};
	if (post.styles) {
		styles = Object.fromEntries(
			post.styles.split(' ').map(style => style.split(':'))
		);
	}
	return (
		<>
			<img className={style.image} src={logo}></img>
			<p className={style.name}>{post.name}</p>
			<div className={style.text} style={styles}>
				{post.message.split('\n').map((el, index) => (
					<p key={index}>{el}</p>
				))}
			</div>
			<p className={style.time}>{post.date}</p>
		</>
	);
};
