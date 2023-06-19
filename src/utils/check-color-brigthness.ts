export function isColorDark(color: string): boolean {
	const elem = document.createElement('div');
	elem.style.backgroundColor = color;

	document.body.appendChild(elem);

	const computedStyle = window.getComputedStyle(elem);

	const rgb =
		computedStyle.backgroundColor!.match(/\d+/g);
	let r = parseInt(rgb![0]);
	let g = parseInt(rgb![1]);
	let b = parseInt(rgb![2]);

	let h: number = 0,
		s: number = 0,
		l: number = 0;
	(r /= 255), (g /= 255), (b /= 255);
	const max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	l = (max + min) / 2;

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	document.body.removeChild(elem);

	return l < 0.6;
}
