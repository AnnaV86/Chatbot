import { addStyle } from '../styles';

describe('Функция addStyle которая добавляет стиль', () => {
	const prevStylesEmpty = {
		name: '',
		message: 'первая строка\nвторая строка',
		id: '',
		date: '',
		answer: { name: '', message: '', styles: '' },
		styles: ''
	};

	const prevStylesFilled = {
		name: '',
		message: 'первая строка\nвторая строка',
		id: '',
		date: '',
		answer: { name: '', message: '', styles: '' },
		styles: 'style:style'
	};
	test('Добавление стиля bold c пустым полем styles', () => {
		expect(addStyle(prevStylesEmpty, 'fontWeight', 'bold')).toEqual(
			` fontWeight:bold `
		);
	});
	test('Добавление стиля bold c непустым styles', () => {
		expect(addStyle(prevStylesFilled, 'fontWeight', 'bold')).toEqual(
			`style:style fontWeight:bold `
		);
	});
	test('Добавление стиля italic c пустым полем styles', () => {
		expect(addStyle(prevStylesEmpty, 'fontStyle', 'italic')).toEqual(
			` fontStyle:italic `
		);
	});
	test('Добавление стиля italic c непустым styles', () => {
		expect(addStyle(prevStylesFilled, 'fontStyle', 'italic')).toEqual(
			`style:style fontStyle:italic `
		);
	});
	test('Добавление стиля underline c пустым полем styles', () => {
		expect(
			addStyle(prevStylesEmpty, 'textDecoration', 'underline')
		).toEqual(` textDecoration:underline `);
	});
	test('Добавление стиля underline c непустым styles', () => {
		expect(
			addStyle(prevStylesFilled, 'textDecoration', 'underline')
		).toEqual(`style:style textDecoration:underline `);
	});
});
