import React, { FC, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { botMessages } from '../../../../constants/botMessages';
import userLogo from '../../../../images/user_3_fill.svg';
import botLogo from '../../../../images/android_2_line.svg';
import { ICreateMessage, IMessage } from '../../../../models';

import style from './chat.module.css';
import { Message } from './components/Message';

interface IChat {
	onClickAnswer: ({ name, message }: ICreateMessage) => void;
	messages: IMessage[];
	setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

export const Chat: FC<IChat> = ({ onClickAnswer, messages, setMessages }) => {
	console.log('я тут:', messages);
	const answerBot = () => {
		const dateNow = new Date();
		const botPost =
			botMessages[Math.floor(Math.random() * botMessages.length)];
		const newBotMessage: IMessage = {
			...botPost,
			id: nanoid(),
			date: `${dateNow.getHours()}:${dateNow.getMinutes()}`,
			answer: { name: '', message: '' }
		};
		setMessages(prev => prev.concat(newBotMessage));
	};

	useEffect(() => {
		let idInterval = setInterval(() => answerBot(), 30000);
		return () => clearInterval(idInterval);
	}, []);

	return (
		<div className={style.chat}>
			{messages.slice(-4).map(post =>
				post.name === 'Чат-бот' ? (
					<div className={style.botMessage} key={post.id}>
						<Message logo={botLogo} post={post} />
						<p
							className={style.answer}
							onClick={() => onClickAnswer(post)}
						>
							Ответить
						</p>
					</div>
				) : (
					<div className={style.usersMessage} key={post.id}>
						{post.answer.name && (
							<div className={style.answerMessage}>
								<p className={style.answerUser}>
									{post.answer.name}
								</p>
								<p className={style.answerText}>
									{post.answer.message}
								</p>
							</div>
						)}
						<Message logo={userLogo} post={post} />
						<p
							className={style.answer}
							onClick={() => onClickAnswer(post)}
						>
							Ответить
						</p>
					</div>
				)
			)}
		</div>
	);
};
