export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Person {
  id: string
  name: string
  image: string
  bio: string
  imageLeft: boolean
}

export interface ContentSection {
  id: string
  title: string
  description: string
  img?: string
  link?: string
}

export interface Particle {
  x: number
  y: number
  r: number
  dx: number
  dy: number
  color: string
}

export interface Project {
  img: string
  title: string
  description: string
  credit: string
}

export interface Video {
  url: string
  title: string
  description: string
}

export interface Resource {
  name: string
  link: string
  description: string
}

export interface Skater {
  id: string
  title: string
  /** May contain inline HTML (<br>) — ported verbatim from the original v-html usage */
  descriptionHtml: string
  img: string
}

export interface ArtPiece {
  img: string
  title: string
  description: string
}

export interface MusicTrack {
  title: string
  vinylImg: string
  audioSrc: string
  description: string
}

export interface BandMember {
  name: string
  instrument: string
  img: string
  description: string
}

export interface CarouselItem {
  type: 'image' | 'video'
  src: string
  alt?: string
}
