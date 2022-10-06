export default {
    data: () => ({
        msg: '',
    }),

    methods: {
        fromComponent() {
            return `I'm from ${this.msg}`;
        }
    },
}