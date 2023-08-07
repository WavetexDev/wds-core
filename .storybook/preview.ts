import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/global-styles.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			theme: themes.dark,
		},
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#202121',
				},
				{
					name: 'light',
					value: '#ffffff',
				},
			],
		},
	},
};

export default preview;
