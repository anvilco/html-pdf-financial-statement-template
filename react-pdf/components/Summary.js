import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Table from './Table'

import { formatDollar } from '../lib/formatters'

const PeriodHeading = styled.th`
`

const PriceHeading = styled.th`
  text-align: right !important;
`

const RightAlignedCell = styled.td`
  text-align: right;
  font-weight: bold;
`

const SummaryRow = styled.tr`
  td {
    font-size: 1.25em;
  }
`

function getMonth (startDate) {
  return 'November 2023'
}

const Summary = ({
  startDate,
  startBalance,
  endBalance
}) => (
  <Table
    hasBottomBorder
    headRow={(
      <>
        <PeriodHeading>Period</PeriodHeading>
        <PriceHeading>Opening Balance</PriceHeading>
        <PriceHeading>Closing Balance</PriceHeading>
      </>
    )}
  >
    <SummaryRow>
      <td>{getMonth(startDate)}</td>
      <RightAlignedCell>{formatDollar(startBalance)}</RightAlignedCell>
      <RightAlignedCell>{formatDollar(endBalance)}</RightAlignedCell>
    </SummaryRow>
  </Table>
)

Summary.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  startBalance: PropTypes.number.isRequired,
  endBalance: PropTypes.number.isRequired,
}



export default Summary
