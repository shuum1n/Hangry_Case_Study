<template>
  <div class="container">
    <h2>Cart Data</h2>
    <ul>

    </ul>
    <button @click="checkout">Checkout</button>
  </div>
</template>
  
<script>

import { mapActions, mapState } from 'pinia';
import { rootStore } from '@/stores/counter';

export default {
  computed: {
    ...mapState(rootStore, ['cartData'])
  },
  methods: {
    ...mapActions(rootStore, ['getCartData'])
  },
  created()
  {
    this.getCartData(this.$route.params.id)
  }
};
</script>
  
<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
}
</style>