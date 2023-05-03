import { ColorDefinition } from "@/types/palette"
import { usePress } from 'react-aria'
import { HTMLMotionProps, motion } from "framer-motion"
import type { CSSProperties } from "react"

interface ColorProps {
  name: string
  color: ColorDefinition
}
export default function Color({ color }: ColorProps) {
  const { pressProps } = usePress({
    onPress: () => navigator.clipboard.writeText(color.hex)
  })

  return (
    <div className="w-24 h-24 md:w-32 md:h-32">
      <motion.div
        {...pressProps as HTMLMotionProps<'div'>}
        role="button"
        className="w-full h-full bg-[--bg] rounded-lg focus:outline-none"
        style={{ "--bg": color.hex } as CSSProperties}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9, rotate: 5 }}
      />
    </div>
  )
}

