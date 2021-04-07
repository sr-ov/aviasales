import React from 'react'
import { GridWrapper } from '../../GridWrapper'
import Row from './Row'

const Rows = ({ segments }) => (
	<GridWrapper styles="gap: 10px 0">
		{segments.map((el) => (
			<Row key={el.origin} {...el} />
		))}
	</GridWrapper>
)

export default Rows
