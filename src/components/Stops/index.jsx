import React from 'react'
import { GridWrapper } from '../GridWrapper'
import Row from '../Sidebar/Row'

const rowText = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const Stops = ({ checkboxes, changeChecked }) => (
	<GridWrapper>
		{rowText.map((text, i) => (
			<Row onChangeFn={() => changeChecked(i)} checked={checkboxes.includes(i)} key={text}>
				{text}
			</Row>
		))}
	</GridWrapper>
)

export default Stops
