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
      <h2 className="text-3xl font-medium text-pink mb-4">{capitalizedName}</h2>
      <div className="grid grid-cols-6 gap-8 w-fit">
        {Object.entries(palette).map(([name, color]) => (
          <Color key={name} name={name} color={color} />
        ))}
      </div>
    </div>
  )
}

