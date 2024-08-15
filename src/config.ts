import { getCollection, type CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Sommer Lawn & Landscape',
  description: 'Quality & Reliable Service',
  author: {
    name: 'Cayden Sommer',
    url: 'https://sommerlawn.com',
    email: 'cayden@sommerlawn.com',
    summary: 'Owner and operator of Sommer Lawn & Landscape'
  },
  org: {
    name: 'Sommer Lawn & Landscape',
    url: 'https://sommerlawn.com',
    email: 'cayden@sommerlawn.com',
    summary:
      'Sommer Lawn & Landscape is dedicated to quality and reliable service and communication.'
  },
  location: 'Overland Park, KS',
  latlng: [38.94371925828973, -94.64324605724325] as [number, number],
  repository: 'https://github.com/AdmiralFraggle/sommer-lawn',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/AdmiralFraggle/sommer-lawn`

export const COMMUNITY_INVITE_URL = `https://sommerlawn.com`

export type Sidebar = Record<string, { text: string; link: string }[]>

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return posts.sort((a, b) =>
    a.data.pubDate && b.data.pubDate ? +b.data.pubDate - +a.data.pubDate : 0
  )
}
