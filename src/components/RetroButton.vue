<template>
	<button class="retro-button" @click="onClick"><slot /></button>
</template>
<script>
export default {
	name: "RetroButton",
	emits: ["click"],
	methods: {
		onClick(e) {
			this.$emit("click", e);
		},
	},
};
</script>
<style>
button.retro-button {
	padding: 0.2rem 0.5rem;
	border: 3px double white;
	outline: 1px solid blue;
	background-color: blue;
	color: yellow;
	font-family: Terminal, Consolas, monospace;
	font-smooth: never;
	-webkit-font-smoothing: never;
	font-size: 0.2rem;
	text-align: center;
	transform: scale(2);
}
</style>
