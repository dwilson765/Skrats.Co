const app = Vue.createApp({
    data() {
        return {
            sections: [
                { id: "skateboarding transition", title: "Skateboarding", description: "Skating is where most of this stemmed from. Take a look at what we've been up to!", img: "skating.jpg", link: "Skateboarding.html" },
                { id: "music", title: "Music", description: "Music being one of largest passions and inspirations should be no surpise. Take a listen", img: "skratBanner.png" },
                { id: "art", title: "Art", description: "Self-expression through art is necessary for humanity to survive. Take a look", img: "SLUDGE_LIFE_2.jpeg" },
                { id: "electronics", title: "Electronics", description: "Being a nerd has never been better. SOme more STEM-focused projects", img: "electronics.jpg" }

            ],
            projects: [
                {
                img: "images/web_project.jpg",
                title: "IoT Weather Dashboard",
                description: "A real-time weather dashboard using web APIs and ESP32 sensors.",
                credit: "Alex"
                },
                {
                img: "images/ai_project.jpg",
                title: "ML Skate Trick Classifier",
                description: "A machine learning model that recognizes skate tricks from video.",
                credit: "Jordan"
                },
                {
                img: "images/robotics_project.jpg",
                title: "Line-Following Robot",
                description: "A simple robot that follows a line using IR sensors and Arduino.",
                credit: "Sam"
                }
            ],
            videos: [
                {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                title: "IoT Weather Dashboard Demo",
                description: "See the dashboard in action with live sensor data."
                },
                {
                url: "https://www.youtube.com/embed/3fumBcKC6RE",
                title: "ML Skate Trick Classifier Demo",
                description: "Watch how the AI recognizes different skate tricks."
                }
            ],
            resources: [
                {
                name: "Vue.js",
                link: "https://vuejs.org/",
                description: "Progressive JavaScript framework for building user interfaces."
                },
                {
                name: "Bootstrap",
                link: "https://getbootstrap.com/",
                description: "CSS framework for responsive layouts."
                },
                {
                name: "Arduino",
                link: "https://www.arduino.cc/",
                description: "Open-source electronics platform for hardware projects."
                }
            ]
        }
    }
});

app.mount("#app")