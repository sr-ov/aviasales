import React from 'react'
import styled from 'styled-components'
import { GridWrapper } from '../../../GridWrapper'

const Top = styled.div`
	font-weight: 600;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #a0b0b9;
`

const Bottom = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
	color: #4a4a4a;
`

const MiddleElement = styled.div`
	@media (max-width: 400px) {
		justify-self: center;
	}
`

const getHoursMinutes = (min) => ({
	h: ~~(min / 60) % 60,
	m: ~~(min % 60),
})

const getTime = (date) => {
	return new Date(date).toLocaleString('ru', { hour: 'numeric', minute: 'numeric' })
}

const text = ['без пересадок', '1 ПЕРЕСАДКA', '2 ПЕРЕСАДКИ', '3 ПЕРЕСАДКИ']

const Row = ({ date, destination, duration, origin, stops }) => {
	const originTime = getTime(date)
	const destTime = getTime(new Date(date).getTime() + duration * 60000)
	const { h, m } = getHoursMinutes(duration)

	return (
		<GridWrapper styles="grid-template-columns: 1fr 1fr 1fr;">
			<div>
				<Top>
					{origin} – {destination}
				</Top>
				<Bottom>
					{originTime} – {destTime}
				</Bottom>
			</div>
			<MiddleElement>
				<Top>В пути</Top>
				<Bottom>
					{h}ч {m !== 0 && `${m}м`}
				</Bottom>
			</MiddleElement>
			<div>
				<Top>{text[stops.length]}</Top>
				<Bottom>{stops.join(', ')}</Bottom>
			</div>
		</GridWrapper>
	)
}
export default Row
