import React from 'react'
import styled from 'styled-components'
import logo from '../../icons/logo.svg'

const StyledLogo = styled.div`
	height: 82px;
	width: 89px;
	margin: 0 auto;
	margin-bottom: 50px;
	background-image: url('${logo}');
	background-repeat: no-repeat;
	background-position: center;
`

const Logo = () => <StyledLogo />

export default Logo
