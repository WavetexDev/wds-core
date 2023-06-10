import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import React from 'react';

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
