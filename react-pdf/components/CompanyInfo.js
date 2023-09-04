import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CompanyInfoContainer = styled.div`
  float: right;
  font-size: 0.875em;
  margin-top: 5px;
  text-align: right;
  color: #999;
  line-height: 1.3;
`

const CompanyInfo = ({
  logo,
  companyEmail,
  companyPhone,
  addressStreet,
  addressCityStateZip,
}) => (
  <CompanyInfoContainer>
    {logo}
    <div>{addressStreet}</div>
    <div>{addressCityStateZip}</div>
    <div>{companyEmail}</div>
    <div>{companyPhone}</div>
  </CompanyInfoContainer>
)

CompanyInfo.propTypes = {
  logo: PropTypes.element.isRequired,
  companyEmail: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired,
  addressStreet: PropTypes.string.isRequired,
  addressCityStateZip: PropTypes.string.isRequired,
}

export default CompanyInfo
