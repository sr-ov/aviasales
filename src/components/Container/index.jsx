import React from 'react'
import { GridWrapper } from '../GridWrapper'

const styles = `
	max-width: 755px;
	margin: 0 auto;
	grid-template-columns: 232px 1fr;
	column-gap: 20px;
	padding: 0 15px;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		max-width: 500px;
	}
`

const Container = (props) => <GridWrapper styles={styles} {...props} />

export default Container
