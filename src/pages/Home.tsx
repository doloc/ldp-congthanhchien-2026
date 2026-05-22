import Section1Hero from '../components/Section1Hero'
import Section2Video from '../components/Section2Video'
import Section3Leaderboard from '../components/Section3Leaderboard'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Section1Hero />
      <Section2Video />
      <Section3Leaderboard />
    </main>
  )
}
