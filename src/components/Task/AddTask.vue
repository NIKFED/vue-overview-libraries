<template>
    <div class="d-grid gap-2">
        <input v-model="title"
               placeholder="Title"
               type="text"
        >
        <input v-model="description"
               placeholder="Description"
               type="text"
        >
        <button class="btn btn-lg"
                @click="onAddTask"
        >
            <i class="bi bi-plus-circle"></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({

});

const emit = defineEmits({
    onAddTask({ title, description }) {
        if (title === '' || description === '') {
            alert('Fill title and description please!');
            return false;
        }
        return true;
    }
});

const title = ref('');
const description = ref('');

const onAddTask = () => {
    emit('onAddTask', {
        title: title.value,
        description: description.value,
    });
}

</script>

<style scoped>

</style>