import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Logo from './Logo'
import PageCounter from './PageCounter'
import StatementInfo from './StatementInfo'
import LineItems from './LineItems'
import Totals from './Totals'
import Footer from './Footer'

import statementData from '../data/statement-details'

const Container = styled.div`
`

const Statement = () => (
  <Container>
    <GlobalStyle />
    <PageCounter />
    <Logo />
    <StatementInfo
      invoiceNumber="12345"
      invoiceDate="May 24th, 2024"
      clientName="Client Name"
      companyName="Anvil Co"
      companyEmail="hello@useanvil.com"
      addressStreet="123 Main Street"
      addressCityStateZip="San Francisco CA, 94103"
    />

    <LineItems
      transactions={statementData.transactions}
    />

    <Totals
      accountNumber="123567744"
      routingNumber="120000547"
      dueDate="May 30th, 2024"
      total="$105.00"
    />

    <Footer />
  </Container>
)

export default Statement
