module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
	daisyui: {
		themes: false,
	},
};
