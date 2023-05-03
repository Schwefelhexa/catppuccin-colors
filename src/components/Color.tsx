import { ColorDefinition } from "@/types/palette"
import { usePress } from 'react-aria'

interface ColorProps {
  name: string
  color: ColorDefinition
}
export default function Color({ color }: ColorProps) {
  const { pressProps } = usePress({
    onPress: () => navigator.clipboard.writeText(color.hex)
  })

  return (
    <div className="w-32 h-32">
      <div
        {...pressProps}
        role="button"
        className="w-full h-full hover:scale-110 transition-transform ease-in-out bg-[--bg] rounded-lg"
        style={{ "--bg": color.hex, "--shadow": `rgba(${color.raw}, 0.5)` }}
      />
    </div>
  )
}

