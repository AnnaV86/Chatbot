import React, { FC } from 'react';
import { Chatbot } from '../Chatbot';

import style from './main.module.css';

export const Main: FC = () => {
	return (
		<>
			<section className={style.main}></section>
			<Chatbot />
		</>
	);
};
