import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Logo from './Logo'
import PageCounter from './PageCounter'
import CompanyInfo from './CompanyInfo'
import StatementInfo from './StatementInfo'
import Summary from './Summary'
import LineItems from './LineItems'
import Footer from './Footer'

import statementData from '../data/statement-details'

const Container = styled.div`
`

const Statement = () => (
  <Container>
    <GlobalStyle />
    <PageCounter />

    <CompanyInfo
      logo={<Logo />}
      companyName="Anvil Co"
      companyPhone="(415) 555-3231"
      companyEmail="hello@useanvil.com"
      addressStreet="123 Main Street"
      addressCityStateZip="San Francisco CA, 94103"
    />

    <h1>Account Statement</h1>

    <StatementInfo {...statementData} />

    <h2>Summary</h2>

    <Summary {...statementData} />

    <h2>Transactions</h2>

    <LineItems
      transactions={statementData.transactions}
    />

    <Footer />
  </Container>
)

export default Statement
