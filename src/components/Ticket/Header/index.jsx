import React from 'react'
import styled from 'styled-components'
import logoAirlines from '../../../icons/logo_airlines.svg'

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Price = styled.span`
	font-weight: 600;
	font-size: 24px;
	line-height: 24px;
	color: #2196f3;
`
const LogoAirlines = styled.span`
	height: 37px;
	width: 110px;
	background-image: url('${logoAirlines}');
	background-repeat: no-repeat;
	background-position: center;
`

const Header = ({ price }) => (
	<StyledHeader>
		<Price>{price.toLocaleString('ru')} Р </Price>
		<LogoAirlines />
	</StyledHeader>
)

export default Header
