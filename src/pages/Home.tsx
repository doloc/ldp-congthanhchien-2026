import Section1Hero from '../components/Section1Hero'
import Section2Video from '../components/Section2Video'
import Section3Leaderboard from '../components/Section3Leaderboard'

// TODO: replace with actual YouTube embed URL, e.g. "https://www.youtube.com/embed/XXXXXXXXX"
const VIDEO_EMBED_URL = ''

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Section1Hero />
      <Section2Video videoEmbedUrl={VIDEO_EMBED_URL} />
      <Section3Leaderboard />
    </main>
  )
}
