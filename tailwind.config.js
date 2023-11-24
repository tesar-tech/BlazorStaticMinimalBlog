const colors = require('tailwindcss/colors');
module.exports = {
    content:
        [
            './Components/**/*.razor',
        ],
    theme: {
        extend: {
            
            colors: {

                primary: colors.violet

            },
        },},
    plugins: [require('@tailwindcss/typography')],
}


