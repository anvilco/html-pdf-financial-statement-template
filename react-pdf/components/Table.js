import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableContainer = styled.table`
  margin: 70px 0;
  font-size: 0.875em;

  th {
    text-align: left;
    color: #999;
    border-bottom: 2px solid #ddd;
    padding: 10px 0 15px 0;
    font-size: 0.75em;
    text-transform: uppercase;

    &:last-child {
      text-align: right;
    }
  }


  td {
    padding: 15px 0;
  }

  tbody tr:first-child td {
    padding-top: 25px;
  }

  &.has-bottom-border {
    margin-bottom: 0;

    tbody tr:last-child td {
      padding-bottom: 25px;
      border-bottom: 2px solid #ddd;
    }
  }

  th.heading-quantity {
    width: 50px;
  }
  th.heading-price {
    text-align: right;
    width: 100px;
  }
  th.heading-subtotal {
    width: 100px;
  }
`

const Table = ({
  headings,
  children,
  hasBottomBorder,
}) => (
  <TableContainer className={hasBottomBorder ? 'has-bottom-border' : ''}>
    <thead>
      <tr>
        {headings}
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </TableContainer>
)

Table.defaultProps = {
  hasBottomBorder: false,
}

Table.propTypes = {
  headings: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  hasBottomBorder: PropTypes.bool,
}

export default Table
