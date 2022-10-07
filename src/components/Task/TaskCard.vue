<script setup>
const props = defineProps({
    task: {
        required: true,
        default: {},
    },
});

const emit = defineEmits(['onDone', 'onRemove']);

const emitOnDone = () => {
    emit('onDone');
};

const emitOnRemove = () => {
    emit('onRemove');
};
</script>

<template>
    <div class="d-flex justify-content-between align-items-center my-card">
        <div>
            <h4 class="my_font fw-semibold">{{ task.title }}</h4>
            <p class="my_font">{{ task.description }}</p>
        </div>
        <div>
            <button v-if="!task.status"
                    @click="emitOnDone"
                    class="btn btn-lg"
            >
                <i class="bi bi-check link-success"></i>
            </button>
            <button v-else
                    @click="emitOnRemove"
                    class="btn btn-lg"
            >
                <p class="text-danger">x</p>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>