export const secondsToFriendlyString = (
	duration: number
) => {
	const minutes = Math.floor(duration / 60);
	const seconds = duration % 60;

	let formattedDuration = '';
	if (minutes > 0) {
		formattedDuration += `${minutes}min `;
	}
	if (seconds > 0) {
		formattedDuration += `${seconds}seg`;
	}

	return formattedDuration;
};
