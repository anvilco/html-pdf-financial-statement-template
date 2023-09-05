import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import GlobalStyle from './GlobalStyle'

const Info = styled.div`
  position: running(footer);
  margin-top: -25px;
  font-size: 0.75em;
  color: #ccc;

  span {
    padding: 0 5px;
    color: black;

    &:last-child {
      padding-right: 0;
    }
    &:first-child {
      padding-left: 0;
    }
  }
`

// The `content` here references `position` from the FooterContainer
const FooterPlacement = createGlobalStyle`
  @page {
    @bottom-left {
      content: element(footer);
    }
  }
`

const Footer = ({companyURL, companyEmail, companyPhone}) => (
  <>
    <FooterPlacement />
    <Info className="pdf-only">
      <span>{companyEmail}</span>|{' '}
      <span>{companyPhone}</span> |{' '}
      <span>{companyURL}</span>
    </Info>
  </>
)

Footer.propTypes = {
  companyURL: PropTypes.string.isRequired,
  companyEmail: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired,
}

export default Footer
