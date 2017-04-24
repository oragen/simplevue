<template>
<div>
<p>Name: <input type="text"></p>
<p>Email: <input type="text"></p>
<CrazyButton></CrazyButton>
</div>
</template>

<script>
import CrazyButton from './CrazyButton.vue'
export default {
	components: {CrazyButton},
	computed: {
		msg() {
			return window.Store.value1;
		}
	}
}
</script>


<style>
p {
	font-size: 20px;	
}
</style>