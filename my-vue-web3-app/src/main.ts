import { createApp } from 'vue';
import App from './App.vue';
import { createWeb3 } from 'web3';

const app = createApp(App);

// Initialize Web3
const web3 = new createWeb3(window.ethereum);

app.config.globalProperties.$web3 = web3;

app.mount('#app');