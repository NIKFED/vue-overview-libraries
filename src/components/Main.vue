<script setup>
import { ref } from "vue";

const completed = ref([
    {
        title: 'Vue 3 + Composition API',
    },
    {
        title: 'Vue router 4',
    },
    {
        title: 'Vuex 4',
    },
]);
</script>

<template>
    <div>
        <ul class="list-group list-group-numbered list-group-flush">
            <li class="list-group-item"
                v-for="task in completed"
                :key="task.id"
            >
                {{ task.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>