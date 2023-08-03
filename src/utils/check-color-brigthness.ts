import { getContrast } from 'polished';

export function isColorDark(bgColor: string): boolean {
	/* 
	Returns a contrast value between the background color of the element and white, where a higher number means more contrast and a lower number means less constrast.
	*/
	const contrastRatio = getContrast(bgColor, '#FFFFFF');

	if (contrastRatio >= 3) {
		return true;
	} else {
		return false;
	}
}
