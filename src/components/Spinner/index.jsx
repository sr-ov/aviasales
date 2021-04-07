import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
100% {
			transform: rotate(360deg);
		}
`

const StyledSpinner = styled.div`
	animation: ${spin} 1s infinite linear;
	border: solid 2vmin transparent;
	border-radius: 50%;
	border-right-color: #09f;
	border-top-color: #09f;
	box-sizing: border-box;
	height: 20vmin;
	left: calc(50% - 10vmin);
	position: fixed;
	top: calc(50% - 10vmin);
	width: 20vmin;
	z-index: 1;
`

const Spinner = () => <StyledSpinner />

export default Spinner
