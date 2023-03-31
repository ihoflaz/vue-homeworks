const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        }
    },
    computed: {
        getCountResault () {
            console.log("Counter 1 çalıştı");
            return this.counter > 0 ? "Büyük" : "Küçük";
        },
        getCount2Resault () {
            console.log("Counter 2 çalıştı");
            return this.counter2 > 0 ? "Büyük" : "Küçük";
        },
    },
    watch: {
        counter(newValue, oldValue){
            console.log("COUNTER", oldValue, "=>" , newValue);
        },
        getCountResault(newValue, oldValue){
            console.log("RESAULT", oldValue, "=>" , newValue);
        },
    }
}).mount("#app");