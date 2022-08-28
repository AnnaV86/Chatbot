import React, { FC } from 'react';
import { IMessage } from '../../../../../../models';
import style from './message.module.css';

interface IMessageData {
	logo: string;
	post: IMessage;
}

export const Message: FC<IMessageData> = ({ logo, post }) => {
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
