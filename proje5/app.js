const app = Vue.createApp({
    data() {
        return {
            title: "Test Deneme bİR iKİ üÇ",
            itemList: [],
        }
    },
    beforeCreate() {
        console.log("beforeCreate Çalıştı");
    },
    created() {
        console.log("created Çalıştı");
        setTimeout(()=> {
            this.itemList = [1,2,3,4,5,6,7,8];
        }, 1000);
        setTimeout(()=> {
            this.title="Yeni Başlık"
        }, 2000);
    },
    beforeMount() {
        console.log("beforeMount Çalıştı");
    },
    mouted() {
        console.log("mouted Çalıştı");
    },
    beforeUpdate() {
        console.log("beforeUpdate Çalıştı");
    },
    updated() {
        console.log("updated Çalıştı");
    },
    beforeUnmount() {
        console.log("beforeUnmount Çalıştı");
    },
    unmounted() {
        console.log("unmounted Çalıştı");
    },
}).mount("#app");