declare module '@waveclass/wds-core' {
	export function Avatar(props: {
		size: 'sm' | 'md' | 'lg' | 'xl';
		img?: string;
		name: string;
		online?: boolean;
	}): JSX.Element;
	export function NumberBadge(props: {
		value: number;
	}): JSX.Element;
	export function RegularButton(props: {
		onClick: () => void;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset' | undefined;
		text: string;
		variant:
			| 'primary-contained'
			| 'primary-ghost'
			| 'primary-text'
			| 'secondary-contained'
			| 'secondary-ghost'
			| 'secondary-text';
		customStyles?: Record<string, string>;
	}): JSX.Element;
	export function FilterButton(props: {
		onClick: () => void;
		disabled?: boolean;
		text: string;
		icon?: any;
		customStyles?: Record<string, string>;
	}): JSX.Element;
	export function FloatingButton(props: {
		onClick: () => void;
		disabled?: boolean;
		variant: 'primary' | 'secondary';
		icon?: any;
		customStyles?: Record<string, string>;
	}): JSX.Element;
	export function OptionButton(props: {
		onClick: () => void;
		disabled?: boolean;
		text: string;
		icon?: any;
		customStyles?: Record<string, string>;
	}): JSX.Element;
	export function LectureCard(props: {
		variant?: 'primary' | 'secondary';
		type: 'VIDEO' | 'AUD' | 'MAT' | 'TXT';
		name: string;
		thumbnail: string;
		teacher: string;
		duration: number;
		finished?: boolean;
		onClick: () => void;
		avaliable: boolean;
		avaliableMessage?: string;
		toggleFavorite?: () => void;
		favorite?: boolean;
		remainingSeconds?: number;
	}): JSX.Element;
	export function GridItem(props: {
		id?: string;
		variant:
			| 'row'
			| 'col-1'
			| 'col-2'
			| 'col-3'
			| 'col-4'
			| 'col-5'
			| 'col-6'
			| 'col-7'
			| 'col-8'
			| 'col-9'
			| 'col-10'
			| 'col-11'
			| 'col-12';
		customStyles?: Record<string, any>;
		children: any;
	}): JSX.Element;
	export function Modal(props: {
		isShowing: boolean;
		position: 'center' | 'right';
		onClose: () => void;
		children: React.ReactNode;
		size?: 'sm' | 'md' | 'lg';
		title?: string;
		subtitle?: string;
		confirmButton?: {
			show?: boolean;
			disabled?: boolean;
			text?: string;
			action?: () => void;
		};
		cancelButton?: {
			show?: boolean;
			disabled?: boolean;
			text?: string;
			action?: () => void;
		};
		dangerButton?: {
			show?: boolean;
			disabled?: boolean;
			text?: string;
			action?: () => void;
		};
		customStyles?: {
			overlay?: Record<string, any>;
			modal?: Record<string, any>;
			title?: Record<string, any>;
			subtitle?: Record<string, any>;
			childrenContainer?: Record<string, any>;
			confirmButton?: Record<string, any>;
			cancelButton?: Record<string, any>;
			dangerButton?: Record<string, any>;
		};
	}): JSX.Element;
	export function SearchInput(props: {
		onChange: (e: {
			target: { value: string };
		}) => void;
		value:
			| string
			| ReadonlyArray<string>
			| number
			| undefined;
		disabled?: boolean;
		max?: number | string | undefined;
		maxLength?: number | undefined;
		min?: number | string | undefined;
		minLength?: number | undefined;
		placeholder?: string;
		required?: boolean;
		showError?: boolean;
		errorMessage?: string;
		icon?: any;
		hideDefaultIcon?: boolean;
	}): JSX.Element;
	export function Input(props: {
		onChange: (e: {
			target: { value: string };
		}) => void;
		value:
			| string
			| ReadonlyArray<string>
			| number
			| undefined;
		disabled?: boolean;
		max?: number | string | undefined;
		maxLength?: number | undefined;
		min?: number | string | undefined;
		minLength?: number | undefined;
		placeholder?: string;
		required?: boolean;
		type?:
			| 'button'
			| 'color'
			| 'date'
			| 'datetime-local'
			| 'email'
			| 'file'
			| 'hidden'
			| 'month'
			| 'number'
			| 'password'
			| 'search'
			| 'tel'
			| 'text'
			| 'time'
			| 'url'
			| 'week';
		showError?: boolean;
		errorMessage?: string;
		icon?: any;
		hideDefaultIcon?: boolean;
	}): JSX.Element;
	export function Typography(props: {
		text: string;
		variant:
			| 'h1-bold'
			| 'h2-bold'
			| 'h3-bold'
			| 'h4-bold'
			| 'h5-bold'
			| 'h6-bold'
			| 'small-bold'
			| 'paragraph-bold'
			| 'h1-regular'
			| 'h2-regular'
			| 'h3-regular'
			| 'h4-regular'
			| 'h5-regular'
			| 'h6-regular'
			| 'small-regular'
			| 'paragraph-regular'
			| 'h1-italic'
			| 'h2-italic'
			| 'h3-italic'
			| 'h4-italic'
			| 'h5-italic'
			| 'h6-italic'
			| 'small-italic'
			| 'paragraph-italic';
		customStyles?: Record<string, string>;
	}): JSX.Element;
	export function isColorDark(color: string): boolean;
	export function getSchoolColors(): {
		buttonColor: string;
		primaryColor: string;
		secondaryColor: string;
		secondaryLogo: string;
	};
	export function getThemeMode(): 'light' | 'dark';
	export const theme: {
		light: {
			colors: {
				primary: string;
				secondary: string;
				dynamicTextColor: (
					bgColor: string
				) => string;
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
		};
		dark: {
			colors: {
				primary: string;
				secondary: string;
				dynamicTextColor: (
					bgColor: string
				) => string;
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
		};
	};
}
