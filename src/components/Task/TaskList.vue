<script setup>
import TaskCard from './TaskCard.vue';
import AddTask from "./AddTask.vue";
import { ref } from 'vue';

const taskList = ref([]);

const addTask = ({ title, description }) => {
    taskList.value = [...taskList.value, {
        id: taskList.value.length > 0 ? taskList.value.at(-1).id + 1 : 0,
        title,
        description,
        status: false
    }];
}

const setDoneTask = (id) => {
    taskList.value = taskList.value.map(item => {
        if (item.id === id) {
            item.status = true;
        }
        return item;
    });
};

const removeTask = (id) => {
    taskList.value = taskList.value.filter(item => item.id !== id);
};
</script>

<template>
    <div>
        <h1 class="my_font fw-semibold">Todo List</h1>

        <AddTask @onAddTask="addTask"></AddTask>

        <ul class="list-group list-group-flush">
            <li class="list-group-item"
                v-for="item in taskList"
                :key="item.id"
            >
                <TaskCard :model="item"
                          @onRemove="removeTask(item.id)"
                          @onDone="setDoneTask(item.id)"
                ></TaskCard>
            </li>
        </ul>
    </div>

</template>

<style scoped>

</style>