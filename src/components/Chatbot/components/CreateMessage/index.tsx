import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import style from './create.module.css';
import { IMessage } from '../../../../models';

interface ICreateMessage {
	onClickSendMessage: (message: IMessage) => void;
}
export const CreateMessage: FC<ICreateMessage> = ({ onClickSendMessage }) => {
	const [dataNewMessage, setDataNewMessage] = useState({
		name: '',
		message: '',
		id: '',
		date: '',
		answer: { name: '', message: '' }
	});

	const handleChange = evt => {
		const { name, value } = evt.target;
		setDataNewMessage(prev => ({ ...prev, [name]: value }));
	};

	const handleSendMessage = evt => {
		evt.preventDefault();
		const dateNow = new Date();
		const newMessage = {
			...dataNewMessage,
			id: nanoid(),
			date: `${dateNow.getHours()}:${dateNow.getMinutes()}`
		};
		console.log('newMessage:', newMessage);

		onClickSendMessage(newMessage);
		setDataNewMessage({
			name: '',
			message: '',
			id: '',
			date: '',
			answer: { name: '', message: '' }
		});
	};

	return (
		<form className={style.form}>
			<input
				onChange={handleChange}
				className={style.inputName}
				type="text"
				name="name"
				placeholder="Имя"
				value={dataNewMessage.name}
			></input>
			<textarea
				onChange={handleChange}
				name="message"
				className={style.inputMessage}
				placeholder="Сообщение"
				value={dataNewMessage.message}
			></textarea>
			<button
				className={style.buttonSend}
				onClick={handleSendMessage}
			></button>
		</form>
	);
};
