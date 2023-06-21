export const getSchoolColors = (): SchoolColors => {
	return {
		buttonColor:
			localStorage.getItem(
				'waveclass_personalized_button_color'
			) ?? '#F91064',
		primaryColor:
			localStorage.getItem(
				'waveclass_personalized_primary_color'
			) ?? '#F91064',
		secondaryColor:
			localStorage.getItem(
				'waveclass_personalized_secondary_color'
			) ?? '#001334',
		secondaryLogo:
			localStorage.getItem(
				'waveclass_personalized_secondary_logo'
			) ?? '',
	};
};

interface SchoolColors {
	buttonColor: string;
	primaryColor: string;
	secondaryColor: string;
	secondaryLogo: string;
}
