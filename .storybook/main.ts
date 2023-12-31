import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
	stories: [
		'../stories/pages/**/*.mdx',
		'../stories/docs/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-docs',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};
export default config;
