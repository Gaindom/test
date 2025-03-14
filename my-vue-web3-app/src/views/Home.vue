<attachment id="file:/my-vue-web3-app/my-vue-web3-app/src/views/Home.vue">
<content>
<template>
  <div class="home">
    <h1>Welcome to My Vue Web3 App</h1>
    <button @click="callSmartContract">Call Smart Contract</button>
    <p v-if="result">{{ result }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Web3 from 'web3';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      result: ''
    };
  },
  methods: {
    async callSmartContract() {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
        const abi = []; // Replace with your contract ABI

        const contract = new web3.eth.Contract(abi, contractAddress);
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const response = await contract.methods.YOUR_METHOD_NAME().call({ from: accounts[0] });
          this.result = response;
        } catch (error) {
          console.error(error);
          this.result = 'Error calling smart contract';
        }
      } else {
        this.result = 'Please install MetaMask!';
      }
    }
  }
});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
</content>
</attachment>