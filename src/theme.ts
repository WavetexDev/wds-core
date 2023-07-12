import { getSchoolColors } from './utils/get-school-colors';
import { isColorDark } from './utils/check-color-brigthness';

export const theme = {
	light: {
		colors: {
			primary: getSchoolColors().primaryColor,
			secondary: getSchoolColors().secondaryColor,
			dynamicTextColor: (bgColor: string): string =>
				isColorDark(bgColor)
					? '#FFFFFF'
					: '#000000',
			black: '#000000',
			white: '#FFFFFF',
			gray700: '#6E6E6E',
			gray500: '#868686',
			gray300: '#C4C4C4',
			gray100: '#E3E3E3',
			error: '#FF0000',
			warning: '#FFB800',
			info: '#0085FF',
			success: '#00FF0A',
		},
		fontSizes: {
			fs8: '8px',
			fs10: '10px',
			fs12: '12px',
			fs14: '14px',
			fs16: '16px',
			fs18: '18px',
			fs20: '20px',
			fs22: '22px',
			fs24: '24px',
			fs26: '26px',
			fs28: '28px',
			fs30: '30px',
			fs32: '32px',
			fs34: '34px',
			fs36: '36px',
			fs38: '38px',
			fs40: '40px',
		},
		spacing: {
			sp2: '2px',
			sp4: '4px',
			sp6: '6px',
			sp8: '8px',
			sp10: '10px',
			sp12: '12px',
			sp14: '14px',
			sp16: '16px',
			sp18: '18px',
			sp20: '20px',
			sp22: '22px',
			sp24: '24px',
			sp26: '26px',
			sp28: '28px',
			sp30: '30px',
			sp32: '32px',
		},
		shadows: {
			light: '0px 4px 4px rgba(214, 214, 214, 0.25);',
			medium: '0px 4px 4px rgba(125, 124, 124, 0.25);',
			dark: '0px 4px 4px rgba(0, 0, 0, 0.25);',
		},
	},
	dark: {
		colors: {
			primary: getSchoolColors().primaryColor,
			secondary: getSchoolColors().secondaryColor,
			dynamicTextColor: (bgColor: string): string =>
				isColorDark(bgColor) ? '#FFF' : '#000',
			black: '#000',
			white: '#FFF',
			gray700: '#6E6E6E',
			gray500: '#868686',
			gray300: '#C4C4C4',
			gray100: '#E3E3E3',
			error: '#FF0000',
			warning: '#FFB800',
			info: '#0085FF',
			success: '#00FF0A',
		},
		fontSizes: {
			fs8: '8px',
			fs10: '10px',
			fs12: '12px',
			fs14: '14px',
			fs16: '16px',
			fs18: '18px',
			fs20: '20px',
			fs22: '22px',
			fs24: '24px',
			fs26: '26px',
			fs28: '28px',
			fs30: '30px',
			fs32: '32px',
			fs34: '34px',
			fs36: '36px',
			fs38: '38px',
			fs40: '40px',
		},
		spacing: {
			sp2: '2px',
			sp4: '4px',
			sp6: '6px',
			sp8: '8px',
			sp10: '10px',
			sp12: '12px',
			sp14: '14px',
			sp16: '16px',
			sp18: '18px',
			sp20: '20px',
			sp22: '22px',
			sp24: '24px',
			sp26: '26px',
			sp28: '28px',
			sp30: '30px',
			sp32: '32px',
		},
		shadows: {
			light: '0px 4px 4px rgba(214, 214, 214, 0.25);',
			medium: '0px 4px 4px rgba(125, 124, 124, 0.25);',
			dark: '0px 4px 4px rgba(0, 0, 0, 0.25);',
		},
	},
};

interface ThemeOptions {
	colors: {
		primary: string;
		secondary: string;
		dynamicTextColor: (bgColor: string) => string;
		black: string;
		white: string;
		gray700: string;
		gray500: string;
		gray300: string;
		gray100: string;
		error: string;
		warning: string;
		info: string;
		success: string;
	};
	fontSizes: {
		fs8: string;
		fs10: string;
		fs12: string;
		fs14: string;
		fs16: string;
		fs18: string;
		fs20: string;
		fs22: string;
		fs24: string;
		fs26: string;
		fs28: string;
		fs30: string;
		fs32: string;
		fs34: string;
		fs36: string;
		fs38: string;
		fs40: string;
	};
	spacing: {
		sp2: string;
		sp4: string;
		sp6: string;
		sp8: string;
		sp10: string;
		sp12: string;
		sp14: string;
		sp16: string;
		sp18: string;
		sp20: string;
		sp22: string;
		sp24: string;
		sp26: string;
		sp28: string;
		sp30: string;
		sp32: string;
	};
	shadows: {
		light: string;
		medium: string;
		dark: string;
	};
}

export interface Theme {
	light: ThemeOptions;
	dark: ThemeOptions;
}
