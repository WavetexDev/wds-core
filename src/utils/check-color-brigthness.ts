export function isColorDark(color: string): boolean {
	if (!color) return false;

	// Remove any leading '#' character from the color
	const cleanedColor = color.replace('#', '');

	// Convert the color to RGB format
	const hexToRgb = (hex: string) => {
		const bigint = parseInt(hex, 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;
		return { r, g, b };
	};

	// Calculate the brightness of the color
	const { r, g, b } = hexToRgb(cleanedColor);
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	// Return 'light' or 'dark' based on the brightness threshold
	return brightness < 128;
}
