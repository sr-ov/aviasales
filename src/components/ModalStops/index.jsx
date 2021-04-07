import React from 'react'
import styled from 'styled-components'
import { Sidebar } from '..'

const StyledModal = styled.div`
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 999;
`

const ModalStops = ({ onClickFn, ...props }) => (
	<StyledModal onClick={onClickFn}>
		<Sidebar style={{ margin: 'auto', minWidth: 240 }} {...{ ...props, hide: false }} />
	</StyledModal>
)

export default ModalStops
