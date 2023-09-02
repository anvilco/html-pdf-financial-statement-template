import { createGlobalStyle } from 'styled-components'

const WebGlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
    padding: 50px;
  }

  .web-container {
    max-width: 700px;
    margin: 0 auto;
  }
`

export default WebGlobalStyle
