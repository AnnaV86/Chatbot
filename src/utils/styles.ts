import { stylesForNewMessage } from '../constants';
import { IMessage } from '../models';

export const resetStyles = (inputEl: React.RefObject<HTMLTextAreaElement>) => {
	Object.entries(stylesForNewMessage).forEach(([_, [first, second]]) => {
		if (second && inputEl.current) {
			inputEl.current.style[first] = 'unset';
		}
	});
};

export const addCheckList = (dataNewMessage: IMessage) =>
	dataNewMessage.message
		.split('\n')
		.map(el => `${'*'} ${el}`)
		.join('\n');

export const addNumberList = (dataNewMessage: IMessage) =>
	dataNewMessage.message
		.split('\n')
		.map((el, index) => `${index + 1} ${el}`)
		.join('\n');

export const addStyle = (prev: IMessage, first: string, second: string) =>
	`${prev.styles} ${first}:${second} `;
