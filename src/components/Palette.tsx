import { Palette } from "@/types/palette"
import Color from "./Color"

interface PaletteProps {
  name: string
  palette: Palette
}
export default function Palette({ name, palette }: PaletteProps) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-medium text-pink mb-4 md:mb-6">{capitalizedName}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-10 w-fit">
        {Object.entries(palette).map(([name, color]) => (
          <Color key={name} name={name} color={color} />
        ))}
      </div>
    </div>
  )
}

