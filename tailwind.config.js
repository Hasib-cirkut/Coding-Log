module.exports = {
	theme: {
		extend: {
			fontFamily: {
				roboto: [ 'Roboto', 'sans-serif' ],
				montserrat: [ 'Montserrat', 'sans-serif' ],
				playfair: [ 'Playfair Display', 'sans-serif' ],
				bitter: [ 'Bitter', 'sans-serif' ]
			},
			backgroundColor: {
				primary: '#041C32',
				secondary: '#04293A'
			},

			textColor: {
				accent: '#ECB365'
			}
		}
	},
	plugins: [ require('@tailwindcss/typography') ]
};
