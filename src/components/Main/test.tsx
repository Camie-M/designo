import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>
    )
    expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the colors correctly', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': defaultTheme.palette.contrastSecondary
    })
  })
})
