# HTML monthly financial statement template

This repo contains a monthly statement template for financial institutions. Both React + styled components and plain HTML & CSS are supported here. The template contains all information needed to produce a compliant monthly statement according to the [Electronic Fund Transfer Act / Regulation E (12 CEFR part 1005)](https://www.consumerfinance.gov/rules-policy/regulations/1005/9/). Download it! Fork it! Customize to fit your business needs!

The template is intended to be rendered as a PDF with Anvil's [HTML to PDF API](https://www.useanvil.com/docs/api/generate-pdf#html--css-to-pdf). Learn more using Anvil to fill, generate, and sign PDFs on our [developer page](https://www.useanvil.com/developers/). It can also be used in a browser.

Rendered as a PDF via the Anvil HTML to PDF API:

<img width="1063" alt="HTML to PDF monthly financial statement" src="https://github.com/anvilco/html-pdf-financial-statement-template/assets/69169/4d31a3bc-8da3-46c9-80ea-f6ff027d1034" />

And rendered in a browser:

<img width="780" alt="Monthly financial statement template" src="https://github.com/anvilco/html-pdf-financial-statement-template/assets/69169/a0bfee87-ba9f-44eb-93f0-d23ab3b592e5" />

## Installing

Fork or clone this repo and run `yarn install` at the root.

## Rendering as a PDF

You can render the statement to PDF with either React + styled-components, or plain HTML and CSS. For use with React, see the [react-pdf](./react-pdf/README.md) directory.

### First get an API key

First [sign up](https://app.useanvil.com/signup) for Anvil and get your [API key](https://www.useanvil.com/docs/api/getting-started#api-key).

### Rendering a PDF with React

See the [react-pdf](./react-pdf/README.md) directory for full details on using React to generate an statement PDF. The [react-pdf/generate-pdf.js](./react-pdf/generate-pdf.js) script is used to generate the PDF.

The tl;dr to generate a PDF with React is to `yarn install` at the root of this repo, then run:

```sh
ANVIL_API_TOKEN=<YOURKEY> yarn generate-pdf:react && open ./generate-react.output.pdf
```

### Rendering a PDF with plain HTML + CSS

There is an [example node script](./generate-pdf.js) you can use to generate the PDF from plain HTML and CSS. Run the following command at the root of this repo

```sh
$ ANVIL_API_TOKEN=<YOURKEY> node ./generate-pdf.js && open ./generate-plain-html.output.pdf
```

Plain HTML and CSS for the statement template is in the root of this repo. Feel free to view and edit these files to change the output PDF:

* [statement.html](./statement.html) - the statement's HTML
* [statement.css](./statement.css) - the statement's CSS
* [statement-pdf.css](./statement-pdf.css) - the statement's PDF-specific CSS

The script simply reads the HTML and CSS from this repo, then generates a PDF.

```js
function buildHTMLToPDFPayload () {
  const html = fs.readFileSync('./statement.html').toString()
  const css =
    fs.readFileSync('./statement.css').toString() +
    fs.readFileSync('./statement-pdf.css').toString()
  return {
    type: 'html',
    title: 'HTML Monthly Statement',
    data: {
      html,
      css,
    },
  }
}
const exampleData = buildHTMLToPDFPayload()
const { statusCode, data, errors } = await client.generatePDF(exampleData)
```

## Running in a browser

You can run both the React and plain HTML versions of the template from the browser:

```sh
yarn web:plain-html
# Visit http://localhost:8085

yarn web:react
# Visit http://localhost:8086
```

See [index.html](./index.html) for more information

## Template provided by Anvil

This repo is provided by [Anvil](https://www.useanvil.com/developers/). Anvil provides easy APIs for all things paperwork.

1. [PDF filling API](https://www.useanvil.com/products/pdf-filling-api/) - fill out a PDF template with a web request and structured JSON data.
2. [PDF generation API](https://www.useanvil.com/products/pdf-generation-api/) - send markdown or HTML and Anvil will render it to a PDF.
3. [Etch e-sign with API](https://www.useanvil.com/products/etch/) - customizable, embeddable, e-signature platform with an API to control the signing process end-to-end.
4. [Anvil Workflows (w/ API)](https://www.useanvil.com/products/workflows/) - Webforms + PDF + e-sign with a powerful no-code builder. Easily collect structured data, generate PDFs, and request signatures.

Learn more on our [Anvil developer page](https://www.useanvil.com/developers/). See the [API guide](https://www.useanvil.com/docs) and the [GraphQL reference](https://www.useanvil.com/docs/api/graphql/reference/) for full documentation.

## License

MIT
