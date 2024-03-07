'use client'

import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  palette: {
    primary: '#e7806b',
    primaryLight: '#ffac9b',
    font: '#1d1c1e',
    fontLight: '#333136',
    contrastMain: '#fff',
    contrastSecondary: '#f3f5f6'
  },
  fonts: {
    h1: {
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: '48px'
    },
    h2: {
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '48px',
      letterSpacing: '2px'
    },
    h3: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '26px',
      letterSpacing: '5px',
      textTransform: 'uppercase'
    },
    text: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '26px'
    }
  }
}
