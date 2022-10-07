import {computed, reactive} from "vue";

export function useForm() {
    const form = reactive({
        title: '',
        description: '',
    });

    const valid = computed(() => {
        return form.title.trim() && form.description.trim();
    });

    return { form, valid };
}