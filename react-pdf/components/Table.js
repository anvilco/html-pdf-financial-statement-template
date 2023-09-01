import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableContainer = styled.table`
  margin: 70px 0;
  font-size: 0.875em;

  th {
    text-align: left;
    color: #999;
    padding: 10px 0 15px 0;
    font-size: 0.75em;
    text-transform: uppercase;

    &:last-child {
      text-align: right;
    }
  }

  thead th {
    border-bottom: 2px solid #ddd;
  }

  tfoot td, tfoot th {
    padding: 15px 0;
    border-top: 2px solid #ddd;
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
`

const Table = ({
  headRow,
  footRow,
  children,
  hasBottomBorder,
}) => (
  <TableContainer className={hasBottomBorder ? 'has-bottom-border' : ''}>
    <thead>
      <tr>
        {headRow}
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
    {
      footRow ? (
        <tfoot>
          <tr>
            {footRow}
          </tr>
        </tfoot>
      ) : null
    }
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
