const app = Vue.createApp({
    data() {
        return {
          sections2: [
                { id: "Frankye", title: "Frankye", description: "Deck: 8.38” Welcome<br> Wheels: Spitfire Radial Fulls<br> Bearings: Bone Reds<br> Trucks: Thunder trucks", img: "images/GOPR1337.JPG" },
                { id: "Arden", title: "Arden", description: "Deck: 8.75” Crooked<br> Wheels: Spitfire Lockins<br> Bearings: Bone Reds<br> Trucks: 159 Hollow Indie", img: "images/arden_skate.jpg" },
                { id: "Jon", title: "Jon", description: "Deck: Chocolate JS Pro<br> Wheels: Spitefire OG Classics<br> Bearings: Bronson Raw<br> Trucks: 5.6 Venture", img: "images/G0061400.JPG" },
                { id: "David", title: "David", description: "Deck: 8.125” Toy Machine<br> Wheels: Spitefire Forumla Fours<br> Bearings: Bone Reds<br> Trucks: Thunder Light Hollows", img: "images/G0071409.JPG" }

            ],

            collageColumns: 4, // Default number of columns
            collageImages: [
                "images/IMG_6868.jpg",
                "images/IMG_5400.jpg",
                "images/IMG_5281.jpg",
                "images/IMG_8379.jpg",
                "images/IMG_8388.jpg",
                "images/standing.jpg",
                "images/jon1.jpg",
                "images/jon2.jpg",
                "images/midskate.jpg",
                "images/mmfood.jpg",
                "images/shoes.jpg",
                "images/skratboard.jpg",
                "images/board.jpg",
                "images/camera.JPG",
                "images/flip.jpg",
                "images/goodday.jpg",
                "images/heart.jpg",
                "images/arden1.png",
                "images/arden2.png",
                "images/arden3.png",
                "images/arden4.png",
                "images/arden5.png",
                "images/david1.png",
                "images/david2.png",
                "images/frankye1.png",
                
                // Add more image paths as needed
            ]};
    },          
    computed: {
        collageGrid() {
        // Split images into columns for the grid
        const cols = Array.from({ length: this.collageColumns }, () => []);
        this.collageImages.forEach((img, i) => {
            cols[i % this.collageColumns].push(img);
        });
        return cols;
            }
        }
});

// Carousel
app.mount("#app");


$('.carousel').carousel({
  interval: 4000,
  ride: "carousel"
})

// vue

