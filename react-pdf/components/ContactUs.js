import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContactUsContainer = styled.p`
  font-size: 0.75em;
  margin-top: 70px;
`

const ContactUs = ({
  companyName,
  companyEmail,
  companyPhone,
  addressStreet,
  addressCityStateZip,
}) => (
  <ContactUsContainer>
    If you have found errors or have questions about your statement, please
    contact {companyName} via email at {companyEmail}, by phone
    at {companyPhone}, or by mail at {addressStreet} {addressCityStateZip}.
  </ContactUsContainer>
)

ContactUs.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyEmail: PropTypes.string.isRequired,
  companyPhone: PropTypes.string.isRequired,
  addressStreet: PropTypes.string.isRequired,
  addressCityStateZip: PropTypes.string.isRequired,
}

export default ContactUs
