import { ColorDefinition } from "@/types/palette"
import { usePress } from 'react-aria'
import { motion } from "framer-motion"

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
      <motion.div
        {...pressProps}
        role="button"
        className="w-full h-full bg-[--bg] rounded-lg focus:outline-none"
        style={{ "--bg": color.hex, "--shadow": `rgba(${color.raw}, 0.5)` }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9, rotate: 5 }}
      />
    </div>
  )
}

