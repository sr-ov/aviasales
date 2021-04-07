import React from 'react'
import { Button, Tabs, Tickets } from '..'
import { GridWrapper } from '../GridWrapper'

const Main = ({ setCountTickets, addRest, ending }) => (
	<GridWrapper styles="row-gap: 20px;">
		<Tabs />
		<Tickets />

		{addRest > 0 && (
			<Button
				onClick={() => setCountTickets((prev) => (prev += addRest))}
				styles="border-radius: 5px;"
				active
			>
				Показать еще {addRest} билет{ending}!
			</Button>
		)}
	</GridWrapper>
)

export default Main
