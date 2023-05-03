import palette from '@/palette.json'

export default function Home() {
  return (
    <main className="bg-surface1">
      <p className="text-text">{JSON.stringify(palette)}</p>
    </main>
  )
}
