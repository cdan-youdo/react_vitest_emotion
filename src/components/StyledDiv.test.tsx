import React from 'react'
import {render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ThemeProvider } from '@mui/material/styles'
// import { ThemeProvider } from '@emotion/react'

import { default as StyledDiv } from './StyledDiv'
import { theme } from '../styles/theme'

describe('StyledDiv', () => {
  it('resolves the provided Theme', () => {
    render(
      <ThemeProvider theme={theme}>
        <StyledDiv/>
      </ThemeProvider>
    )
    const myComponent = screen.queryByTestId('styled-div');
    expect(myComponent).not.toBeNull();
    expect(myComponent).toHaveStyle({border: `6px solid ${theme.palette.secondary.main}`})
  })
})