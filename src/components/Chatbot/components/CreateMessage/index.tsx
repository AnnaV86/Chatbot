import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import style from './create.module.css';
import { IMessage } from '../../../../models';

interface ICreateMessage {
	setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}
export const CreateMessage: FC<ICreateMessage> = ({ setMessages }) => {
	const [dataNewMessage, setDataNewMessage] = useState({
		name: '',
		message: '',
		id: '',
		date: ''
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
		setMessages(prev => prev.concat(newMessage));
		setDataNewMessage({
			name: '',
			message: '',
			id: '',
			date: ''
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
