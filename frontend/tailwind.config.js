/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'richblack800':'#161D29',
      'richblack200':'#999DAA',
      'richblack600':'#424854',
      'richblack900':'#000814',
      'richblack5':'#F1F2FF',
      'blue50':'#7EC0D9',
      'blue100':'#47A5C5',
      'blue200':'#118AB2',
      'yellow':'#FFD60A'

    },
    boxShadow: {
      'button': '2px 2px 0px 0px #424854',
    }
  },
  plugins: [],
}

