import React from 'react'
import { GridWrapper } from '../GridWrapper'
import Header from './Header'
import Rows from './Rows'

const Ticket = ({ price, segments }) => (
	<GridWrapper
		styles="grid-template-rows: 36px 1fr;
						gap: 20px 0;
						padding: 20px;
						background-color: #ffffff;
						box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
						border-radius: 5px;"
	>
		<Header price={price} />
		<Rows segments={segments} />
	</GridWrapper>
)

export default Ticket
