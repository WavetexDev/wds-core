export function formatDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZoneName: 'short',
	};

	const formattedTime: string = date
		.toLocaleTimeString('pt-BR', options)
		.slice(0, -3)
		.replace(/,/g, ' - ');

	return formattedTime;
}
