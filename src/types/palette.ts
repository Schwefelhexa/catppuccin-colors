export type AllPalettes = Record<PaletteName, Palette>

export type Palette = Record<ColorName, ColorDefinition>
export type ColorDefinition = Record<ColorType, string>
export type ColorType = 'hex' | 'rgb' | 'hsl' | 'raw'

export type PaletteName = typeof paletteNames[number]
export const paletteNames = ["latte", "frappe", "macchiato", "mocha"] as const

export type ColorName = typeof colorNames[number]
export const colorNames = [
  'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow', 'green', 'teal', 'sky', 'sapphire',
  'blue', 'lavender', 'text', 'subtext1', 'subtext0', 'overlay2', 'overlay1', 'overlay0',
  'surface2', 'surface1', 'surface0', 'base', 'mantle', 'crust'] as const

