import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
	font-size: inherit;
	padding: 15px;
	text-align: center;
	background-color: #ffffff;
	border: 1px solid #dfe5ec;
	white-space: nowrap;

	${({ styles }) => styles}

	${({ active }) =>
		active &&
		css`
			background-color: #2196f3;
			color: #fff;
		`}

	@media (min-width: 700px) {
		cursor: pointer;
		transition: background-color 0.2s linear;

		&:hover {
			background-color: ${({ active }) => (active ? 'DeepSkyBlue' : '#f1fcff')};
		}
	}
`

const Button = (props) => <StyledButton {...props} />

export default Button
