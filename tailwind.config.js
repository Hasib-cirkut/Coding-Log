module.exports = {
	theme: {
		extend: {
			fontFamily: {
				roboto: [ 'Roboto', 'sans-serif' ],
				montserrat: [ 'Montserrat', 'sans-serif' ],
				playfair: [ 'Playfair Display', 'sans-serif' ],
				bitter: [ 'Bitter', 'sans-serif' ]
			}
		}
	},
	plugins: [ require('@tailwindcss/typography') ]
};
