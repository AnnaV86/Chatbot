import React, { FC, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import style from './create.module.css';
import { IMessage, StylesTextarea } from '../../../../models';
import {
	addCheckList,
	addNumberList,
	addStyle,
	resetStyles
} from '../../../../utils';

interface ICreateMessage {
	onClickSendMessage: (message: IMessage) => void;
	styleTextarea: string[];
}

export const CreateMessage: FC<ICreateMessage> = ({
	onClickSendMessage,
	styleTextarea
}) => {
	const [dataNewMessage, setDataNewMessage] = useState<IMessage>({
		name: '',
		message: '',
		id: '',
		date: '',
		answer: { name: '', message: '', styles: '' },
		styles: ''
	});
	const inputEl = useRef<HTMLTextAreaElement>(null);

	const handleChange = evt => {
		const { name, value } = evt.target;

		setDataNewMessage(prev => ({ ...prev, [name]: value }));
	};

	const handleSendMessage = evt => {
		evt.preventDefault();
		const dateNow = new Date();
		const newMessage = {
			...dataNewMessage,
			styles: dataNewMessage.styles?.trim(),
			id: nanoid(),
			date: `${dateNow.getHours()}:${dateNow.getMinutes()}`
		};

		onClickSendMessage(newMessage);
		setDataNewMessage({
			name: '',
			message: '',
			id: '',
			date: '',
			answer: { name: '', message: '', styles: '' },
			styles: ''
		});
	};

	useEffect(() => {
		const [first, second] = styleTextarea;

		if (inputEl.current) {
			if (first === StylesTextarea.CHECK_LIST) {
				setDataNewMessage(prev => ({
					...prev,
					message: addCheckList(dataNewMessage)
				}));
			}

			if (first === StylesTextarea.NUMBER_LIST) {
				setDataNewMessage(prev => ({
					...prev,
					message: addNumberList(dataNewMessage)
				}));
			}

			if (first === StylesTextarea.RESET) {
				resetStyles(inputEl);
				setDataNewMessage(prev => ({ ...prev, styles: '' }));
			}

			if (second) {
				inputEl.current.style[first] = second;
				setDataNewMessage((prev: IMessage) => ({
					...prev,
					styles: addStyle(prev, first, second)
				}));
			}
		}
	}, [styleTextarea]);

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
				ref={inputEl}
			></textarea>
			<button
				className={style.buttonSend}
				onClick={handleSendMessage}
			></button>
		</form>
	);
};
