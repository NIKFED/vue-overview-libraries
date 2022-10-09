<script setup>
import Navbar from './components/Navbar.vue';
import { useStore } from "vuex";

const store = useStore();

store.dispatch('fetchUser');
</script>

<template>
  <main>
    <Navbar/>
    <div class="mt-3">
      <router-view/>
    </div>
  </main>
</template>

<style scoped>

</style>
