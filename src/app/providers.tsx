'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/theme'

import GlobalStyles from '@/styles/global'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </>
  )
}
