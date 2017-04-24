import Vue from 'vue'
import Form from './Form.vue'

window.Store = {
	value1: 'HelloWorld'
};

new Vue({
	el: '#root',
	render: h => h(Form)
}) 