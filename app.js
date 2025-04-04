const app = Vue.createApp({
    data() {
        return {
            sections: [
                { id: "electronics", title: "Electronics", description: "Explore electronic projects.", img: "electronics.jpg" },
                { id: "skateboarding", title: "Skateboarding", description: "Discover the best skateboarding gear and tricks.", img: "skating.jpg" },
                { id: "music", title: "Music", description: "Learn how to create your own music.", img: "skratBanner.png" },
                { id: "art", title: "Art", description: "Improve your art skills with tutorials.", img: "SLUDGE_LIFE_2.jpeg" }
            ]
        };
    }
});
app.mount("#app");