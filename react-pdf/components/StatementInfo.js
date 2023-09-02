import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { formatDate } from '../lib/formatters'

const StatementInfoContainer = styled.div`
  font-size: 0.875em;
`

const ItemContainer = styled.div`
  margin: 15px 0;
`

const ItemLabel = styled.div`
  color: #999;
  font-weight: bold;
  font-size: 0.75em;
  text-transform: uppercase;
  margin-bottom: 5px;
`

const ItemInfo = styled.div`
`

const StatementInfo = ({
  accountName,
  accountNumber,
  startDate,
  endDate,
}) => (
  <StatementInfoContainer>
    <ItemContainer>
      <ItemLabel>Account</ItemLabel>
      <ItemInfo>{accountName} - {accountNumber}</ItemInfo>
    </ItemContainer>
    <ItemContainer>
      <ItemLabel>Period</ItemLabel>
      <ItemInfo>{formatDate(startDate)} - {formatDate(endDate)}</ItemInfo>
    </ItemContainer>
  </StatementInfoContainer>
)

StatementInfo.propTypes = {
  accountName: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
}

export default StatementInfo
