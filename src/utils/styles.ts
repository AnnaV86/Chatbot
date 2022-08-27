import { stylesForNewMessage } from '../constants';

export const resetStyles = (inputEl) => {
	Object.entries(stylesForNewMessage).forEach(([_, [first, second]]) => {
		if (second && inputEl.current) {
			inputEl.current.style[first] = 'unset';
		}
	});
};
