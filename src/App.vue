<script setup>
import TaskList from './components/Task/TaskList.vue';
</script>

<template>
  <main>

    <div>
      <TaskList/>

      <router-view/>
    </div>
  </main>
</template>

<style scoped>

</style>
