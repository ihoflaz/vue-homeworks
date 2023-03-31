const app = Vue.createApp({
    data() {
        return {
            title: "Title Denemesi",
            content: "Lorem ipsum dolor sit amet",
            link: {
                title: "Link içi yazısı",
                target: "_blank",
                url: "https://www.google.com",
                alt: "Alternatif Yazı Denemesi",
            },
            special: "Çok özel Bir yazı",
            coords: {
                x: 0,
                y: 0,
            },
        }
    },
    methods: {
        changeTitle(text) {
            this.title = text;
        },
        updateCoords(message, event) {
            console.log(message, event.x, event.y);
            this.changeTitle(`${event.x}, ${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y,
            }
        },
    },
}).mount("#app");