const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            rBG: false,
            boxClass: "border",
            bgColor: "red",
            bRadius: 2,
        }
    },
    computed: {
        boxClasses() {
            return {
                border: this.showBorder,
                red: this.rBG,
            };
        },
    },
}).mount("#app");