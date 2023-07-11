export const convertHexToRgb = (
	hex: string,
	opacity: number
): string => {
	// Remove the '#' character if present
	const cleanHex = hex.replace('#', '');

	// Parse the hexadecimal values
	const r = parseInt(cleanHex.substring(0, 2), 16);
	const g = parseInt(cleanHex.substring(2, 4), 16);
	const b = parseInt(cleanHex.substring(4, 6), 16);

	// Construct and return the RGBA string
	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
