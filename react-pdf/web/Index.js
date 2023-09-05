import React from 'react'

const Index = ({title, css, children}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style media="screen">
          {css}
        </style>
      </head>
      <body>
        <div className="web-container" dangerouslySetInnerHTML={{ __html: children }} />
      </body>
    </html>
  )
}

export default Index
