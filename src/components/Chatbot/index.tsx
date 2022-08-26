import React, { useState } from 'react';

import style from './chatbot.module.css';
import { Chat } from './components/Chat';
import { initMessages } from '../../constants/chatMessages';
import boldIcon from '../../images/bold_line.svg';
import italicIcon from '../../images/italic_line.svg';
import underLineIcon from '../../images/underline_line.svg';
import listOrderIcon from '../../images/list_ordered_line.svg';
import listCheckIcon from '../../images/list_check_line.svg';
import backIcon from '../../images/back_line.svg';
import { CreateMessage } from './components/CreateMessage';

export const Chatbot = () => {
	const [messages, setMessages] = useState(initMessages);
	const [openAnswer, setOpenAnswer] = useState(false);
	const [dataAnswer, setDataAnswer] = useState({ name: '', message: '' });

	const onClickAnswer = ({ name, message }) => {
		setDataAnswer({ name, message });
		setOpenAnswer(true);
	};

	const onClickSendMessage = message => {
		if (openAnswer) {
			const messageWithAnswer = { ...message, answer: dataAnswer };
			console.log('messageWithAnswer:', messageWithAnswer);
			setMessages(prev => prev.concat(messageWithAnswer));
			setOpenAnswer(false);
			return setDataAnswer({ name: '', message: '' });
		} else setMessages(prev => prev.concat(message));
		console.log('message:', message);
		setOpenAnswer(false);
		return setDataAnswer({ name: '', message: '' });
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
					<div className={style.update}>
						<button className={style.updateButtons}>
							<img src={boldIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img src={italicIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img src={underLineIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img src={listOrderIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img src={listCheckIcon}></img>
						</button>
						<button className={style.updateButtons}>
							<img src={backIcon}></img>
						</button>
					</div>
					<div className={style.answer}>
						{openAnswer && (
							<div>
								<h2 className={style.answerTitle}>
									Ответ на сообщение:
								</h2>
								<div className={style.answerUserText}>
									<p className={style.answerUser}>
										{dataAnswer.name}
									</p>
									<p className={style.answerText}>
										{dataAnswer.message}
									</p>
								</div>
							</div>
						)}
					</div>
					<CreateMessage onClickSendMessage={onClickSendMessage} />
				</div>
				<div className={style.buttonClose}></div>
			</div>
		</section>
	);
};
