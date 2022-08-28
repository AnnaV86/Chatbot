import { addNumberList } from '../styles';

describe('Функция addCheckList которая добавляет нумерацию строк', () => {
	const dataNewMessage = {
		name: '',
		message: 'первая строка\nвторая строка',
		id: '',
		date: '',
		answer: { name: '', message: '', styles: '' },
		styles: ''
	};

	const resultAddNumberList = `1 первая строка\n2 вторая строка`;

	test('Добавление символа', () => {
		expect(addNumberList(dataNewMessage)).toEqual(resultAddNumberList);
	});
});
