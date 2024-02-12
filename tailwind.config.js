/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				appPrimaryColor: "#07789C",
				appCompleteColor: "#0bd674",
			},
		},
	},
	plugins: [],
};
