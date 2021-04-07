import React from 'react'
import styled from 'styled-components'
import icon from '../../../icons/shape.svg'

const Label = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 10px 20px;
	transition: background-color 0.2s linear;

	&:hover {
		background-color: #f1fcff;
	}
`

const Checkbox = styled.input`
	width: 0;
	height: 0;
	opacity: 0;
	position: absolute;
	z-index: -1;
`

const CustomCheckbox = styled.span`
	position: relative;
	display: inline-block;
	width: 18px;
	height: 18px;
	background: #ffffff;
	border: 2px solid ${({ checked }) => (checked ? '#2196F3' : '#9abbce')};
	border-radius: 4px;
	vertical-align: sub;
	margin-right: 10px;

	&::before {
		content: '';
		display: inline-block;
		width: 15px;
		height: 15px;
		background-image: url('${icon}');
		background-size: contain;
		background-repeat: no-repeat;

		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) ${({ checked }) => (checked ? 'scale(1);' : 'scale(0)')};
		margin-top: 1px;

		transition: 0.2s linear;
	}
`

const Row = ({ children, checked, onChangeFn }) => (
	<Label>
		<Checkbox onChange={onChangeFn} checked={checked} type="checkbox" />
		<CustomCheckbox checked={checked} />
		{children}
	</Label>
)

export default Row
