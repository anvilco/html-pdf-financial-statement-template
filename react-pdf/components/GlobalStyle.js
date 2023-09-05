import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  table tr td {
    padding: 0;
  }

  table tr td:last-child {
    text-align: right;
  }

  h1 {
    font-size: 1.5em;
    margin: 0 0 40px 0;
  }

  h2 {
    font-size: 1.25em;
    margin: 60px 0 10px;
  }
`

export default GlobalStyle
