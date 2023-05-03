import { Palette } from "@/types/palette"

interface PaletteProps {
  name: string
  palette: Palette
}
export default function Palette({ name, palette }: PaletteProps) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div>
      <h2 className="text-3xl font-medium text-pink">{capitalizedName}</h2>
    </div>
  )
}

