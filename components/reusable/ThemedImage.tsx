import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface Props {
  imgLight: string;
  imgDark: string;
  width: number;
  height: number;
  alt: string;
}

const ThemedImage = (props: Props) => {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = props.imgLight
      break
    case 'dark':
      src = props.imgDark
      break
    default:
      src = props.imgLight
      break
  }

  return <Image src={src} width={props.width} height={props.height} alt={props.alt} />
}

export default ThemedImage