import React from 'react';

import { getThemeMode } from '../../../../src/utils/get-theme-mode';
import { theme } from '../../../../src/theme';

const currentMode = getThemeMode();

const spacings = theme[currentMode].spacing;

export function TokenTable() {
	return (
		<table className="tokens-grid">
			<thead>
				<tr>
					<th
						style={{
							paddingInline: '5rem',
						}}
					>
						Name
					</th>
					<th
						style={{
							paddingInline: '5rem',
						}}
					>
						Value
					</th>
				</tr>
			</thead>

			<tbody>
				{Object.entries(spacings).map(
					([key, value]) => {
						return (
							<tr key={key}>
								<td>{key}</td>
								<td>{value}</td>
							</tr>
						);
					}
				)}
			</tbody>
		</table>
	);
}
