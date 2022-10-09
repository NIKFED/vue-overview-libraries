<script setup>
import TaskList from './TaskList.vue';
import AddTask from "./AddTask.vue";
import { useManageTask } from "../../composition/task/manageTask";

const {
    taskList: taskList,
    addTask: addTask,
    completeTask: completeTask,
    removeTask: removeTask,
} = useManageTask();
</script>

<template>
    <div>
        <AddTask @onAddTask="addTask"/>
        <hr>
        <TaskList :tasks="taskList"
                  @onDone="completeTask"
                  @onRemove="removeTask"
        />
    </div>
</template>

<style scoped>

</style>