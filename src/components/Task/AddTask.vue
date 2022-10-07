<script setup>
import { useToggle } from "../../composition/toggle";
import { useForm } from "../../composition/form";

const emit = defineEmits(['onAddTask']);

const onAddTask = () => {
    emit('onAddTask', {
        title: form.title,
        description: form.description,
    });
};

const { form: form, valid: valid } = useForm();
const { visible: show, toggle: changeShow } = useToggle();
</script>

<template>
    <form class="form">
        <div class="d-flex justify-content-between">
            <div class="h1 my_font fw-semibold">
                Add Todo
            </div>
            <button class="btn btn-lg" @click="changeShow">
                <i class="bi bi-arrows-collapse"></i>
            </button>
        </div>

        <div v-if="show" class="d-grid gap-2">
            <input v-model="form.title"
                   placeholder="Title"
                   type="text"
            >
            <input v-model="form.description"
                   placeholder="Description"
                   type="text"
            >
            <button class="btn btn-lg"
                    :disabled="!valid"
                    @click="onAddTask"
            >
                <i class="bi bi-plus-circle"></i>
            </button>
        </div>
    </form>
</template>

<style scoped>

</style>