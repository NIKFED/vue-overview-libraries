<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const name = ref('');

const addDesire = () => {
    const desire = {
        'name': name.value,
    }
    store.commit('createDesire', desire);
};
</script>

<template>
    <form>
        <div class="h1 serif_font fw-semibold">
            Add desires
        </div>

        <div class="d-grid">
            <input v-model="name" placeholder="Desire" type="text">
            <button class="btn btn-lg" @click="addDesire">
                <i class="bi bi-plus-circle"/>
            </button>
        </div>
    </form>
</template>

<style scoped>

</style>