import React from 'react';
import style from './message.module.css';

export const Message = ({ logo, post }) => {
	return (
		<>
			<img className={style.image} src={logo}></img>
			<p className={style.name}>{post.name}</p>
			<p className={style.text}>{post.message}</p>
			<p className={style.time}>{post.date}</p>
		</>
	);
};
