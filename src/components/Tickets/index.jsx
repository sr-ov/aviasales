import React, { useContext } from 'react'
import { Ticket } from '..'
import { Context } from '../../App'
import { GridWrapper } from '../GridWrapper'

const Tickets = () => {
	const { tickets } = useContext(Context)

	return (
		<GridWrapper
			styles="grid-template-rows: 184px;
						row-gap: 20px;"
		>
			{tickets.map((el) => (
				<Ticket key={`${el.carrier}--${el.price}`} {...el} />
			))}
		</GridWrapper>
	)
}

export default Tickets
