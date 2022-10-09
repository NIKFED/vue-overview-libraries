<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const desires = computed(() => store.getters.validDesires);
const desiresCount = computed(() => store.getters.validDesiresCount);
</script>

<template>
    <div>
        <div class="h1 serif_font fw-semibold">
            Desire list ({{ desiresCount }})
        </div>

        <ul class="list-group list-group-flush list-group-numbered">
            <li class="list-group-item"
                v-for="desire in desires"
            >
                {{ desire.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>