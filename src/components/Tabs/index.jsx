import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from '..'
import { Context } from '../../App'

const StyledTabs = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 53px;
`

const tabs = [
	{
		styles: 'border-radius: 5px 0 0 5px;',
		text: 'Самый дешевый',
	},
	{
		styles: 'border-radius: 0 5px 5px 0;',
		text: 'Самый быстрый',
	},
]

const Tabs = () => {
	const { sortBy, setSortBy } = useContext(Context)

	return (
		<StyledTabs>
			{tabs.map((el, i) => (
				<Button onClick={() => setSortBy(i)} key={i} active={i === sortBy} {...el}>
					{el.text}
				</Button>
			))}
		</StyledTabs>
	)
}

export default Tabs
