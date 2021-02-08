import vue from "@vitejs/plugin-vue";
const path = require("path");

module.exports = {
	plugins: [vue()],
	build: {
		cssCodeSplit: true,
		lib: {
			entry: path.resolve(__dirname, "lib/main.js"),
			name: "ViteBugCssnotimported",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
};
