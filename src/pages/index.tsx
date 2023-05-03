import Disclaimer from '@/components/Disclaimer'
import Palette from '@/components/Palette'
import paletteRaw from '@/palette.json'
import { AllPalettes, paletteNames } from '@/types/palette'

const palette = paletteRaw as AllPalettes

export default function Home() {
  return (
    <main className="h-full overflow-scroll px-8 py-6">
      <div className="flex flex-col items-center gap-16">
        {paletteNames.map(name => (
          <Palette key={name} name={name} palette={palette[name]} />
        ))}
        <Disclaimer />
      </div>
    </main>
  )
}
