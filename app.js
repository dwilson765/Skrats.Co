const app = Vue.createApp({
    data() {
        return {
            sections: [
                { id: "skateboarding transition", title: "Skateboarding", description: "Discover the best skateboarding gear and tricks.", img: "skating.jpg" },
                { id: "music", title: "Music", description: "Learn how to create your own music.", img: "skratBanner.png" },
                { id: "art", title: "Art", description: "Improve your art skills with tutorials.", img: "SLUDGE_LIFE_2.jpeg" },
                { id: "electronics", title: "Electronics", description: "Explore electronic projects.", img: "electronics.jpg" }

            ],
            sections2: [
                { id: "Frankye", title: "Frankye", description: "Discover the best skateboarding gear and tricks.", img: "images/GOPR1337.JPG" },
                { id: "Arden", title: "Arden", description: "Learn how to create your own music.", img: "images/GOPR1354.JPG" },
                { id: "Jon", title: "Jon", description: "Improve your art skills with tutorials.", img: "images/G0061400.JPG" },
                { id: "David", title: "David", description: "Explore electronic projects.", img: "images/G0071409.JPG" }

            ]
        };
    }
});
app.mount("#app");