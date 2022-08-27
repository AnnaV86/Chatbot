import React, { useState } from 'react';

import style from './chatbot.module.css';
import { Chat } from './components/Chat';
import { initMessages, stylesForNewMessage } from '../../constants';
import boldIcon from '../../images/bold_line.svg';
import italicIcon from '../../images/italic_line.svg';
import underLineIcon from '../../images/underline_line.svg';
import listOrderIcon from '../../images/list_ordered_line.svg';
import listCheckIcon from '../../images/list_check_line.svg';
import backIcon from '../../images/back_line.svg';
import { CreateMessage } from './components/CreateMessage';
import { IMessage } from '../../models';
import { Answer } from './components/Answer';

export const Chatbot = () => {
	const [messages, setMessages] = useState<IMessage[]>(initMessages);
	const [openAnswer, setOpenAnswer] = useState(false);
	const [dataAnswer, setDataAnswer] = useState({
		name: '',
		message: '',
		styles: ''
	});
	const [styleTextarea, setStyleTextarea] = useState([]);

	const onClickAnswer = ({ name, message, styles }: IMessage) => {
		setDataAnswer({ name, message, styles });
		setOpenAnswer(true);
	};

	const changeStyle = evt => {
		evt.stopPropagation();
		const styles = evt.target.alt;
		if (styles) {
			setStyleTextarea(stylesForNewMessage[evt.target.alt]);
		}
	};

	const onClickSendMessage = message => {
		if (openAnswer) {
			const messageWithAnswer = { ...message, answer: dataAnswer };
			setMessages(prev => prev.concat(messageWithAnswer));
			setOpenAnswer(false);
			return setDataAnswer({ name: '', message: '', styles: '' });
		} else setMessages(prev => prev.concat(message));
		setOpenAnswer(false);
		return setDataAnswer({ name: '', message: '', styles: '' });
	};

	return (
		<section className={style.chatbot}>
			<div className={style.wrapper}>
				<h1 className={style.title}>Робот-помощник</h1>
				<div className={style.container}>
					<Chat
						onClickAnswer={onClickAnswer}
						messages={messages}
						setMessages={setMessages}
					/>
					<div className={style.update} onClick={changeStyle}>
						<button className={style.updateButtons}>
							<img alt="bold" src={boldIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img alt="italic" src={italicIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img alt="underline" src={underLineIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img alt="numberList" src={listOrderIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img alt="checkList" src={listCheckIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img alt="reset" src={backIcon}></img>
						</button>
					</div>
					<div className={style.answer}>
						{openAnswer && <Answer dataAnswer={dataAnswer} />}
					</div>
					<CreateMessage
						onClickSendMessage={onClickSendMessage}
						styleTextarea={styleTextarea}
					/>
				</div>
				<div className={style.buttonClose}></div>
			</div>
		</section>
	);
};
