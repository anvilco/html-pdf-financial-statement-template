import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Logo from './Logo'
import PageCounter from './PageCounter'
import CompanyInfo from './CompanyInfo'
import StatementInfo from './StatementInfo'
import Summary from './Summary'
import Transactions from './Transactions'
import ContactUs from './ContactUs'
import Footer from './Footer'

import companyData from '../data/company-details'
import statementData from '../data/statement-details'

const Container = styled.div`
`

const Statement = () => (
  <Container>
    <GlobalStyle />
    <PageCounter />

    <CompanyInfo
      logo={<Logo />}
      {...companyData}
    />

    <h1>Account Statement</h1>

    <StatementInfo {...statementData} />

    <h2>Summary</h2>

    <Summary {...statementData} />

    <h2>Transactions</h2>

    <Transactions
      transactions={statementData.transactions}
    />

    <ContactUs {...companyData} />

    <Footer {...companyData} />
  </Container>
)

export default Statement
