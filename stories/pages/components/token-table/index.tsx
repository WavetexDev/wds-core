import React from 'react';

import { getThemeMode } from '../../../../src/utils/get-theme-mode';
import { theme } from '../../../../src/theme';

const currentMode = getThemeMode();

interface TokensTableProps {
	token: 'spacing' | 'fontSizes' | 'shadows';
}

export function TokenTable({ token }: TokensTableProps) {
	console.log(token);

	const tokensToMap =
		token === 'spacing'
			? theme[currentMode].spacing
			: token === 'fontSizes'
			? theme[currentMode].fontSizes
			: theme[currentMode].shadows;

	console.log(tokensToMap);

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
				{Object.entries(tokensToMap).map(
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
