import { Avatar } from './components/Avatar';
import { NumberBadge } from './components/number-badge';
import { FilterButton } from './components/buttons/filter';
import { FloatingButton } from './components/buttons/floating';
import { OptionButton } from './components/buttons/option';
import { RegularButton } from './components/buttons/regular';
import { SearchInput } from './components/inputs/search';
import { Input } from './components/inputs/input';
import { Typography } from './components/typography';
import { Modal } from './components/Modal';

import { theme } from './theme';

import { getThemeMode } from './utils/get-theme-mode';
import { getSchoolColors } from './utils/get-school-colors';
import { isColorDark } from './utils/check-color-brigthness';
import { toStyledComponent } from './utils/css-properties-to-styled-component';

export {
	Avatar,
	NumberBadge,
	RegularButton,
	FilterButton,
	FloatingButton,
	OptionButton,
	SearchInput,
	Input,
	Typography,
	Modal,
	theme,
	getThemeMode,
	getSchoolColors,
	isColorDark,
	toStyledComponent,
};
