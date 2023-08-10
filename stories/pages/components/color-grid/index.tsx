import React from 'react';
import { getThemeMode } from '../../../../src/utils/get-theme-mode';
import { theme } from '../../../../src/theme';

import { getContrast } from 'polished';

const currentMode = getThemeMode();

const colors = theme[currentMode].colors;
const { dynamicTextColor, ...friendlyColors } = colors;

export function ColorsGrid() {
	return Object.entries(friendlyColors).map(
		([key, color]) => {
			return (
				<div
					key={key}
					style={{
						backgroundColor: color,
						padding: '2rem',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							fontFamily: 'monospace',
							color:
								getContrast(color, '#FFF') <
								3.5
									? '#000'
									: '#FFF',
						}}
					>
						<strong>{key}</strong>
						<span>{color}</span>
					</div>
				</div>
			);
		}
	);
}
