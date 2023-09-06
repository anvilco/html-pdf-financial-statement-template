import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Table from './Table'

import { formatDate, formatDollar, toUpperCaseFirstLetter } from '../lib/formatters'

const DateHeading = styled.th`
  width: 90px;
`

const DescriptionHeading = styled.th`
`

const PriceHeading = styled.th`
  text-align: right !important;
  width: 80px;
`

const RightAlignedCell = styled.td`
  text-align: right;
`

const FooterTotal = styled.td`
  text-align: right;
  font-weight: bold;
`

function getTotal (transactions, key) {
  return transactions.reduce((acc, transaction) => (acc + transaction[key]), 0)
}

function getFormattedTotal (transactions, key) {
  return formatDollar(getTotal(transactions, key))
}

const Transactions = ({
  transactions
}) => (
  <Table
    headRow={(
      <>
        <DateHeading>Date</DateHeading>
        <DescriptionHeading>Description</DescriptionHeading>

        <PriceHeading>Amount</PriceHeading>
        <PriceHeading>Fees</PriceHeading>
        <PriceHeading>Total</PriceHeading>
      </>
    )}
    footRow={(
      <>
        <th colSpan={2}>Monthly Totals</th>
        <FooterTotal>{getFormattedTotal(transactions, 'amount')}</FooterTotal>
        <FooterTotal>{getFormattedTotal(transactions, 'fee')}</FooterTotal>
        <FooterTotal>{
          formatDollar(
            getTotal(transactions, 'amount') +
            getTotal(transactions, 'fee')
          )
        }</FooterTotal>
      </>
    )}
  >
    {transactions.map((item, i) => (
      <tr key={item.description + i}>
        <td>{formatDate(item.date)}</td>
        <td>{item.description}</td>
        <RightAlignedCell>{formatDollar(item.amount)}</RightAlignedCell>
        <RightAlignedCell>{formatDollar(item.fee)}</RightAlignedCell>
        <RightAlignedCell>{formatDollar(item.amount + item.fee)}</RightAlignedCell>
      </tr>
    ))}
  </Table>
)

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    preposition: PropTypes.string.isRequired,
    party: PropTypes.string.isRequired,
  })).isRequired,
}



export default Transactions
