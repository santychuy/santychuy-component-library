import tw, { styled, css, theme } from 'twin.macro'

export const Button = styled.button(() => [
  tw`px-8 py-2 rounded focus:outline-none transform duration-75`,
  tw`hocus:(scale-105 text-yellow-400)`,
  css`
    color: ${theme`colors.ribbon`};
  `,
]);