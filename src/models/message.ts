export interface IMessage {
	id: string;
	name: string;
	message: string;
	styles: string;
	date?: string;
	answer?: { name: string; message: string; styles: string };
}
