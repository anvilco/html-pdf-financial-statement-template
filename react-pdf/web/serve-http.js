import { App } from '@tinyhttp/app'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import Index from './Index'
import WebGlobalStyle from './WebGlobalStyle'
import Statement from '../components/Statement'

const PORT = 8086

function renderIndex () {
  const sheet = new ServerStyleSheet()
  const statementHTML = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(
      <>
        <WebGlobalStyle />
        <Statement />
      </>
    )
  )
  const statementCSS = sheet.instance.toString()

  const html = ReactDOMServer.renderToStaticMarkup(
    <Index title="Monthly statement" css={statementCSS}>
      {statementHTML}
    </Index>
  )

  return `<!doctype html>${html}`
}

const app = new App()
app
  .get('/', (req, res) => {
    res.status(200).send(renderIndex())
  })
  .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
