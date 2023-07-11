type CSSPropertyT = Record<string, string | number>;

const toStyledComponent = (
	CSSProperties: React.CSSProperties
) => {
	const properties = CSSProperties as CSSPropertyT;

	const formated = Object.keys(properties).reduce(
		(acc, prop) => {
			const property = prop
				.replace(/[A-Z]/g, '-$&')
				.toLowerCase();
			const value = properties[prop];

			return `${acc}${property}: ${value};`;
		},
		''
	);

	return formated;
};

export { toStyledComponent };
