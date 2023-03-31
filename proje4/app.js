const app = Vue.createApp({
    data() {
        return {
            search: "",
            itemList :["elma", "armut", "kiraz", "çilek"],
            // filterList: [],
        }
    },
    methods: {
        searchList(){
            // this.filterList = this.itemList.filter(i => i.includes(this.search));
        },
    },
    computed: {
        filterList(){
            return this.itemList.filter(i => i.includes(this.search));
        },
    },
}).mount("#app");