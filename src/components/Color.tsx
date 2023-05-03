import { ColorDefinition } from "@/types/palette"

interface ColorProps {
  name: string
  color: ColorDefinition
}
export default function Color({ color }: ColorProps) {
  return <div className="bg-[--bg] w-32 h-32 rounded-lg shadow-xl shadow-[--shadow]" style={{ "--bg": color.hex, "--shadow": `rgba(${color.raw}, 0.5)` }} />
}

