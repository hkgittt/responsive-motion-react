import { css } from 'styled-components';

export const media = {
  xs: (...args) => css`
    @media (min-width: 0em) {
      ${ css(...args) }
    }
  `,
  sm: (...args) => css`
    @media (min-width: 48em) {
      ${ css(...args) }
    }
  `,
  md: (...args) => css`
    @media (min-width: 64em) {
      ${ css(...args) }
    }
  `,
  lg: (...args) => css`
    @media (min-width: 75em) {
      ${ css(...args) }
    }
  `,
}