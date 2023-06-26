export const getSchoolColors = (): SchoolColors => {
	return {
		buttonColor: '#F91064',
		primaryColor: '#F91064',
		secondaryColor: '#001334',
		secondaryLogo: '',
	};
};

interface SchoolColors {
	buttonColor: string;
	primaryColor: string;
	secondaryColor: string;
	secondaryLogo: string;
}
