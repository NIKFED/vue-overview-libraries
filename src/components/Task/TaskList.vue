<script setup>
import TaskCard from './TaskCard.vue';
import { ref } from 'vue';
import { useToggle } from "../../composition/toggle";

const props = defineProps({
    tasks: {
        required: false,
        default: [],
    },
});

const emit = defineEmits(['onDone', 'onRemove']);

const emitOnDone = (id) => {
    emit('onDone', id);
};

const emitOnRemove = (id) => {
    emit('onRemove', id);
};

const { visible: show, toggle: changeShow } = useToggle();
</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <div class="h1 my_font fw-semibold">
                Todo List
            </div>
            <button class="btn btn-lg" @click="changeShow">
                <i class="bi bi-arrows-collapse"></i>
            </button>
        </div>


        <ul v-if="show" class="list-group list-group-flush">
            <li v-if="tasks.length > 0" class="list-group-item"
                v-for="task in tasks"
                :key="task.id"
            >
                <TaskCard :task="task"
                          @onDone="emitOnDone(task.id)"
                          @onRemove="emitOnRemove(task.id)"
                />
            </li>
            <div v-else class="my_font">
                No tasks
            </div>
        </ul>
    </div>
</template>

<style scoped>

</style>