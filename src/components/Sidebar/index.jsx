import React from 'react'
import styled, { css } from 'styled-components'
import { Stops } from '..'

const StyledSidebar = styled.aside`
	height: fit-content;
	background-color: #ffffff;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 20px 0;
	transition: transform 0.1s linear;
	position: sticky;
	top: 10px;

	${({ hide }) =>
		hide &&
		css`
			@media (max-width: 700px) {
				display: none;
			}
		`}
`

const Title = styled.h2`
	font-weight: 600;
	font-size: 12px;
	line-height: 12px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	text-align: center;
	margin-top: 0;
	margin-bottom: 20px;
`

const Sidebar = ({ hide, style, ...props }) => (
	<StyledSidebar style={style} hide={hide}>
		<Title>Количество пересадок</Title>
		<Stops {...props} />
	</StyledSidebar>
)

export default Sidebar
