import { addCheckList } from '../styles';

describe('Функция addCheckList которая добавляет символ *', () => {
	const dataNewMessage = {
		name: '',
		message: 'первая строка\nвторая строка',
		id: '',
		date: '',
		answer: { name: '', message: '', styles: '' },
		styles: ''
	};

	const resultAddCheckList = `* первая строка\n* вторая строка`;

	test('Добавление символа', () => {
		expect(addCheckList(dataNewMessage)).toEqual(resultAddCheckList);
	});
});
