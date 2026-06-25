import type {
  NavItem,
  Person,
  ContentSection,
  Project,
  Video,
  Resource,
  Skater,
  ArtPiece,
  MusicTrack,
  BandMember,
} from '@/types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'More!',
    href: '#',
    children: [
      { label: 'Skateboarding', href: '/skateboarding' },
      { label: 'Music', href: '/music' },
      { label: 'Art', href: '/art' },
      { label: 'Electronics', href: '/electronics' },
    ],
  },
]

export const people: Person[] = [
  {
    id: 'david',
    name: 'David Wilson',
    image: '/images/hmm.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea assumenda architecto beatae incidunt magni facilis aliquam in sint neque praesentium omnis dolores nulla, dolor quae possimus? Atque exercitationem rem voluptatibus?',
    imageLeft: true,
  },
  {
    id: 'arden',
    name: 'Arden lalala',
    image: '/images/standing_square.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore laboriosam corporis, animi placeat modi quaerat nulla maxime consequatur est, ipsam distinctio eos consequuntur vitae voluptas quia dicta, officiis soluta dolore?',
    imageLeft: false,
  },
]

// Ported 1:1 from the original app.js `sections` array.
// NOTE: only "Skateboarding" had a `link` in the original data. Since this
// is now an SPA with real routes for all four ("/music", "/art",
// "/electronics" already exist as views), I've added internal links for
// all of them so every card is clickable — easy to remove if you'd rather
// only Skateboarding link out.
export const sections: ContentSection[] = [
  {
    id: 'skateboarding-transition',
    title: 'Skateboarding',
    description: "Skating is where most of this stemmed from. Take a look at what we've been up to!",
    img: '/skating.jpg',
    link: '/skateboarding',
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Music being one of largest passions and inspirations should be no surprise. Take a listen',
    img: '/skratBanner.png',
    link: '/music',
  },
  {
    id: 'art',
    title: 'Art',
    description: 'Self-expression through art is necessary for humanity to survive. Take a look',
    img: '/SLUDGE_LIFE_2.jpeg',
    link: '/art',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    description: 'Being a nerd has never been better. Some more STEM-focused projects',
    img: '/electronics.jpg',
    link: '/electronics',
  },
]

// Ported 1:1 from app.js — used on the Electronics page.
export const projects: Project[] = [
  {
    img: '/images/web_project.jpg',
    title: 'IoT Weather Dashboard',
    description: 'A real-time weather dashboard using web APIs and ESP32 sensors.',
    credit: 'Alex',
  },
  {
    img: '/images/ai_project.jpg',
    title: 'ML Skate Trick Classifier',
    description: 'A machine learning model that recognizes skate tricks from video.',
    credit: 'Jordan',
  },
  {
    img: '/images/robotics_project.jpg',
    title: 'Line-Following Robot',
    description: 'A simple robot that follows a line using IR sensors and Arduino.',
    credit: 'Sam',
  },
]

export const videos: Video[] = [
  {
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'IoT Weather Dashboard Demo',
    description: 'See the dashboard in action with live sensor data.',
  },
  {
    url: 'https://www.youtube.com/embed/3fumBcKC6RE',
    title: 'ML Skate Trick Classifier Demo',
    description: 'Watch how the AI recognizes different skate tricks.',
  },
]

export const resources: Resource[] = [
  {
    name: 'Vue.js',
    link: 'https://vuejs.org/',
    description: 'Progressive JavaScript framework for building user interfaces.',
  },
  {
    name: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    description: 'CSS framework for responsive layouts.',
  },
  {
    name: 'Arduino',
    link: 'https://www.arduino.cc/',
    description: 'Open-source electronics platform for hardware projects.',
  },
]

// ───────────────────────── Skateboarding ─────────────────────────
// Ported from skate_app.js (the more complete version — jart.js had an
// unfinished "Yap." placeholder for Jon's setup, this one has the real specs).
export const skaters: Skater[] = [
  {
    id: 'frankye',
    title: 'Frankye',
    descriptionHtml:
      'Deck: 8.38” Welcome<br> Wheels: Spitfire Radial Fulls<br> Bearings: Bone Reds<br> Trucks: Thunder trucks',
    img: '/images/GOPR1337.JPG',
  },
  {
    id: 'arden',
    title: 'Arden',
    descriptionHtml:
      'Deck: 8.75” Crooked<br> Wheels: Spitfire Lockins<br> Bearings: Bone Reds<br> Trucks: 159 Hollow Indie',
    img: '/images/arden_skate.jpg',
  },
  {
    id: 'jon',
    title: 'Jon',
    descriptionHtml:
      'Deck: Chocolate JS Pro<br> Wheels: Spitefire OG Classics<br> Bearings: Bronson Raw<br> Trucks: 5.6 Venture',
    img: '/images/G0061400.JPG',
  },
  {
    id: 'david',
    title: 'David',
    descriptionHtml:
      'Deck: 8.125” Toy Machine<br> Wheels: Spitefire Forumla Fours<br> Bearings: Bone Reds<br> Trucks: Thunder Light Hollows',
    img: '/images/G0071409.JPG',
  },
]

// Recent Clips & Pics carousel (Skateboarding.html)
export const skateCarouselImages: string[] = [
  '/images/G0081413.JPG',
  '/images/G0091423.JPG',
  '/images/G0071409.JPG',
  '/images/img5281_copy.jpg',
  '/images/pyramid_gap.png',
]

// "All The Clips" collage grid (Skateboarding.html)
export const skateCollageImages: string[] = [
  '/images/IMG_6868.jpg',
  '/images/IMG_5400.jpg',
  '/images/IMG_5281.jpg',
  '/images/IMG_8379.jpg',
  '/images/IMG_8388.jpg',
  '/images/standing.jpg',
  '/images/jon1.jpg',
  '/images/jon2.jpg',
  '/images/midskate.jpg',
  '/images/mmfood.jpg',
  '/images/shoes.jpg',
  '/images/skratboard.jpg',
  '/images/board.jpg',
  '/images/camera.JPG',
  '/images/flip.jpg',
  '/images/goodday.jpg',
  '/images/heart.jpg',
  '/images/arden1.png',
  '/images/arden2.png',
  '/images/arden3.png',
  '/images/arden4.png',
  '/images/arden5.png',
  '/images/david1.png',
  '/images/david2.png',
  '/images/frankye1.png',
]

// Skateboarding Clips video carousel (Skateboarding.html)
export const skateVideoClips: string[] = ['/vids/clean_run.mp4', '/vids/clean_run2.mp4']

// Juelz's collage grid was empty in the original jart.js — add real image
// paths here once you have them.
export const juelzCollageImages: string[] = []

// ───────────────────────────── Art ─────────────────────────────
// "Art Gallery" section (art.html)
export const artGeneralPieces: ArtPiece[] = [
  {
    img: '/images/art1.jpg',
    title: 'Painting',
    description: 'Acrylic and mixed media works exploring emotion and abstraction.',
  },
  {
    img: '/images/art2.jpg',
    title: 'Digital Art',
    description: 'Experimental digital pieces, glitch art, and surreal compositions.',
  },
  {
    img: '/images/Heaven_Sent_Hellbent.jpg',
    title: 'Photography',
    description: 'Capturing fleeting moments and surreal perspectives through light and shadow.',
  },
]

// "Skrat/Gothic Skateboarding & Visuals" section (art.html)
export const artGothicPieces: ArtPiece[] = [
  {
    img: '/images/shirt_two.jpg',
    title: 'Gothic Skateboarding',
    description:
      'Dark, moody deck designs and street art inspired by gothic themes interwoven with brutalist style.',
  },
  {
    img: '/images/zeitgeist.jpg',
    title: 'Photography & Videography',
    description: 'Raw skate footage, night photography, and experimental video edits.',
  },
]

// Juelz feature blurb (art.html)
export const juelzBio =
  "Juelz specializes in sketching and drawing 3d volumes/forms with lines. Using a ballpoint pen, Juelz draws inspiration from a Korean artist named Kim Jung Gi, a master of forms and perspective. Using Kim Jung Gi's methods, Juelz observes a subject to traces their movement and detail on paper with the least amount of pen strokes possible. This also applies to the environment a subject could be placed in since perspective varies from the view of his position to the subject he is viewing.\n\nJuelz currently aims to be a draftsman, a technical artist who aims to practice and perfect the fundamentals of art so that he may pursue his main endeavor, animation."
export const juelzImg = '/images/ethan_art.jpg'

// ──────────────────────────── Music ────────────────────────────
// Two featured tracks (music.html)
export const musicTracks: MusicTrack[] = [
  {
    title: 'Song 1',
    vinylImg: '/images/vinyl2.png',
    audioSrc: '/audio/Skrat1.mp3',
    description: '(Arden fills out)',
  },
  {
    title: '2LOVERS',
    vinylImg: '/images/viny1.png',
    audioSrc: '/audio/2LOVERS.mp3',
    description: '(Arden fills out)',
  },
]

// Band member cards (music.html) — original text was the same lorem-ipsum
// placeholder repeated for every member; ported verbatim.
export const bandMembers: BandMember[] = [
  {
    name: 'Gabriel',
    instrument: 'Piano/Ukelele',
    img: '/images/vinyl2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, magnam quibusdam? Porro at maxime id, distinctio, quaerat reprehenderit similique tempore adipisci provident ea autem nam repellat praesentium molestiae? Non, molestias?',
  },
  {
    name: 'Frankye',
    instrument: 'Guitar',
    img: '/images/frankyeguitar.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, magnam quibusdam? Porro at maxime id, distinctio, quaerat reprehenderit similique tempore adipisci provident ea autem nam repellat praesentium molestiae? Non, molestias?',
  },
  {
    name: 'Jon',
    instrument: 'Drums',
    img: '/images/vinyl2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, magnam quibusdam? Porro at maxime id, distinctio, quaerat reprehenderit similique tempore adipisci provident ea autem nam repellat praesentium molestiae? Non, molestias?',
  },
  {
    name: 'Arden',
    instrument: 'Guitar/Drums',
    img: '/images/ard_instra.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, magnam quibusdam? Porro at maxime id, distinctio, quaerat reprehenderit similique tempore adipisci provident ea autem nam repellat praesentium molestiae? Non, molestias?',
  },
]

// "Take a Listen" genre/recent/phasing-out/favorites lists were left as
// unfilled "bleh" placeholders in the original — ported as-is.
export const musicListPlaceholders = ['bleh', 'bleh', 'bleh']

export const spotifyEmbedUrl = 'https://open.spotify.com/embed/album/7uatFjjGOQoccdiFh8uOHx?utm_source=generator'
export const spotifyAlbumUrl = 'https://open.spotify.com/album/7uatFjjGOQoccdiFh8uOHx?si=sCGo7LLVSfaWi8hFa0kyWQ'

// ──────────────────────────── About ────────────────────────────
export const aboutImg = '/images/us.jpg'
