import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import React from 'react';

import { ScaleUpCenter, ScaleUpRight } from './animations';

interface Props {
	children: React.ReactNode;
}

export const WaveclassTheme = ({
	children,
}: Props): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};

export const ScaleUpCenterAnimation = ({
	children,
}: Props): JSX.Element => {
	return <ScaleUpCenter>{children}</ScaleUpCenter>;
};

export const ScaleUpRightAnimation = ({
	children,
}: Props): JSX.Element => {
	return <ScaleUpRight>{children}</ScaleUpRight>;
};
