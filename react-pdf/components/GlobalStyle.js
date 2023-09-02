import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
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
    margin: 0 0 40px 0;
  }

  h2 {
    margin: 60px 0 30px;
  }
`

export default GlobalStyle
