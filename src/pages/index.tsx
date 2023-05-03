import Image from 'next/image'
import { Inter } from 'next/font/google'

import palette from '@/palette.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>Hello World</h1>
    <p>{JSON.stringify(palette)}</p>
    </>
  )
}
