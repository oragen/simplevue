<template>
<div>
<button @click="test">{{msg}}</button>
</div>
</template>

<script>
export default {
	name: 'CrazyButton',
	data() {
		return {
			msg: 'BUTTON'
		}
	},
	methods: {
		test() {
			window.Store.value1 = "TEST";
			alert(window.Store.value1);
		}
	}
}
</script>


<style>
button {
	background-color: blue;
	border-radius: 20px;
}
</style>