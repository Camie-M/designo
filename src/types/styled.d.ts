'use client'

// styled.d.ts
import 'styled-components'

interface IFont {
  fontSize: string
  fontWeight: number
  lineHeight: string
  letterSpacing?: string
  textTransform?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      primary: string
      primaryLight: string
      font: string
      fontLight: string
      contrastMain: string
      contrastSecondary: string
    }
    fonts: {
      h1: IFont
      h2: IFont
      h3: IFont
      text: IFont
    }
  }
}
