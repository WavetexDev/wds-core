import { create } from '@storybook/theming/create';
// @ts-ignore
import WaveclassLogo from './assets/waveclass.png';

export default create({
	base: 'dark',
	brandTitle: 'Waveclass',
	brandUrl: 'https://dev.waveclass.com.br/',
	brandImage: WaveclassLogo,
	brandTarget: '_blank',

	colorPrimary: '#F91064',
	colorSecondary: '#F91064',

	appBg: '#202121',
	appContentBg: '#202121',
	appBorderColor: '#6E6E6E',
});
