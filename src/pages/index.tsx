import Palette from '@/components/Palette'
import paletteRaw from '@/palette.json'
import { AllPalettes, paletteNames } from '@/types/palette'

const palette = paletteRaw as AllPalettes

export default function Home() {
  return (
    <main className="h-full bg-base">
      {paletteNames.map(name => (
        <Palette key={name} name={name} palette={palette[name]} />
      ))
      }
    </main>
  )
}
