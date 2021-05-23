import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/default'
import { ThemeProps } from './interface'

const ThemeWrapper = ({ children, ...props }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme} {...props}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default ThemeWrapper
