const app = Vue.createApp({
    data() {
        return {
            sections: [
                { id: "skateboarding transition", title: "Skateboarding", description: "Skating is where most of this stemmed from. Take a look at what we've been up to!", img: "skating.jpg", link: "Skateboarding.html" },
                { id: "music", title: "Music", description: "Take a listen", img: "skratBanner.png" },
                { id: "art", title: "Art", description: "Take a look", img: "SLUDGE_LIFE_2.jpeg" },
                { id: "electronics", title: "Electronics", description: "SOme more STEM-focused projects", img: "electronics.jpg" }

            ]
        }
    }
});

app.mount("#app")