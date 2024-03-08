'use client'

import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${(props) => props.theme.palette.light};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2,
  p {
    color: ${(props) => props.theme.palette.darkest};
  }

  h1 {
    font-size: ${(props) => props.theme.fonts.h1.fontSize};
    font-weight: ${(props) => props.theme.fonts.h1.fontWeight};
    line-height: ${(props) => props.theme.fonts.h1.lineHeight};
  }

  h2 {
    font-size: ${(props) => props.theme.fonts.h2.fontSize};
    font-weight: ${(props) => props.theme.fonts.h2.fontWeight};
    line-height: ${(props) => props.theme.fonts.h2.lineHeight};
    letter-spacing: ${(props) => props.theme.fonts.h2.letterSpacing};
  }

  h3 {
    color: ${(props) => props.theme.palette.primary};
    font-size: ${(props) => props.theme.fonts.h3.fontSize};
    font-weight: ${(props) => props.theme.fonts.h3.fontWeight};
    line-height: ${(props) => props.theme.fonts.h3.lineHeight};
    letter-spacing: ${(props) => props.theme.fonts.h3.letterSpacing};
    text-transform: ${(props) => props.theme.fonts.h3.textTransform};
  }

  p {
    font-size: ${(props) => props.theme.fonts.text.fontSize};
    font-weight: ${(props) => props.theme.fonts.text.fontWeight};
    line-height: ${(props) => props.theme.fonts.text.lineHeight};
  }
`
