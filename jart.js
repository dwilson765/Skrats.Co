const app = Vue.createApp({
    data() {
        return {
          sections2: [
                { id: "Frankye", title: "Frankye", description: "Deck: 8.38” Welcome<br> Wheels: Spitfire Radial Fulls<br> Bearings: Bone Reds<br> Trucks: Thunder trucks", img: "images/GOPR1337.JPG" },
                { id: "Arden", title: "Arden", description: "Deck: 8.75” Crooked<br> Wheels: Spitfire Lockins<br> Bearings: Bone Reds<br> Trucks: 159 Hollow Indie", img: "images/arden_skate.jpg" },
                { id: "Jon", title: "Jon", description: "Yap.", img: "images/G0061400.JPG" },
                { id: "David", title: "David", description: "Board: 8.125” Toy Machine<br> Wheels: Spitefire Forumla Fours<br> Bearings: Bone Reds<br> Trucks: Thunder Light Hollows", img: "images/G0071409.JPG" }

            ],

            collageColumns: 4, // Default number of columns
            collageImages: [
                
                
                
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
