<template>
    <div class="container">
      <h2>Menus Data</h2>
      <table class="flex">
        <thead>
          <tr>
            <th>Image</th>
            <th>Menu Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {

  };
  </script>

<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
}

.flex {
    width: 100%
}
</style>
  