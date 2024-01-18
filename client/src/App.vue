<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/menus">Menus</router-link>
      <router-link to="/cart">Cart</router-link>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #3498db;
  padding: 10px;
}

a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}

a:hover {
  text-decoration: underline;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
