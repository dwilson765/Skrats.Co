const app = Vue.createApp({
    data() {
        return {
            sections: [
                { id: "skateboarding transition", title: "Skateboarding", description: "Discover the best skateboarding gear and tricks.", img: "skating.jpg", link: "Skateboarding.html" },
                { id: "music", title: "Music", description: "Learn how to create your own music.", img: "skratBanner.png" },
                { id: "art", title: "Art", description: "Improve your art skills with tutorials.", img: "SLUDGE_LIFE_2.jpeg" },
                { id: "electronics", title: "Electronics", description: "Explore electronic projects.", img: "electronics.jpg" }

            ],
            sections2: [
                { id: "Frankye", title: "Frankye", description: "Yap.", img: "images/GOPR1337.JPG" },
                { id: "Arden", title: "Arden", description: "Yap.", img: "images/GOPR1354.JPG" },
                { id: "Jon", title: "Jon", description: "Yap.", img: "images/G0061400.JPG" },
                { id: "David", title: "David", description: "Yap.", img: "images/G0071409.JPG" }

            ]
        };
    }
});
app.mount("#app");


$('.carousel').carousel({
  interval: 4000,
  ride: "carousel"
})

