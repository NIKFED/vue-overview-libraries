import {ref} from "vue";

export function useManageTask() {
    const taskList = ref([]);

    const addTask = ({ title, description }) => {
        taskList.value = [...taskList.value, {
            id: taskList.value.length > 0 ? taskList.value.at(-1).id + 1 : 0,
            title,
            description,
            status: false
        }];
    }

    const completeTask = (id) => {
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

    return { taskList, addTask, completeTask, removeTask };
}