import React, { createContext, useCallback, useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Container, Sidebar, Main, Logo, Error, Button, ModalStops, Spinner } from './components'

const getData = async () => {
	const resId = await fetch('https://front-test.beta.aviasales.ru/search')
	const { searchId } = await resId.json()
	const resData = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
	const { tickets } = await resData.json()
	return transformTickets(tickets)
}

export const Context = createContext()

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		background-color: #f1fcff;
		padding: 50px 0 100px 0;
		${({ isOpen }) => isOpen && 'overflow: hidden;'}

		@media (min-width: 700px) {
			padding: 50px 0;
		}
	}
`
const transformTickets = (tickets) => {
	return tickets.slice(0, 50).map((el) => ({
		...el,
		totalDuration: el.segments.reduce((acc, el) => acc + el.duration, 0),
		maxStops: Math.max(...el.segments.map((el) => el.stops.length)),
	}))
}

const stylesBtn = `
	@media (min-width: 700px) {
		display: none;
	}

	@media (max-width: 700px) {
		position: fixed;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 5px;
	}
`

const App = () => {
	const [initialTickets, setInitialTickets] = useState([])
	const [filteredByStopsTickets, setFilteredByStopsTickets] = useState(initialTickets)
	const [checkboxes, setCheckboxes] = useState([0])
	const [countTickets, setCountTickets] = useState(5)
	const [sortBy, setSortBy] = useState(0)
	const [error, setError] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const [isOpen, setOpen] = useState(false)

	const changeChecked = (index) => {
		setCheckboxes((prev) => {
			const checkZero = prev.includes(0)
			const checkEl = prev.includes(index)

			if (index === 0 || (prev.length === 1 && checkEl)) {
				return [0]
			}

			const copy = checkZero ? prev.slice(1) : prev.slice()

			return checkEl ? copy.filter((el) => el !== index) : copy.concat(index)
		})
	}

	const sortTickets = useCallback(
		(data) => {
			const sortKey = ['price', 'totalDuration'][sortBy]
			return data.slice().sort((a, b) => a[sortKey] - b[sortKey])
		},
		[sortBy]
	)

	const setFilteredByStops = useCallback(
		(data) => {
			setFilteredByStopsTickets(sortTickets(data))
		},
		[sortTickets]
	)

	useEffect(() => {
		if (checkboxes[0] === 0) {
			setFilteredByStops(initialTickets)
		} else {
			setFilteredByStops(
				initialTickets.filter((el) => checkboxes.map((el) => el - 1).includes(el.maxStops))
			)
		}
	}, [checkboxes, initialTickets, sortBy, setFilteredByStops])

	useEffect(() => {
		setLoading(true)
		getData()
			.then((data) => {
				setInitialTickets(data)
				setLoading(false)
			})
			.catch((err) => {
				console.error(err)
				setLoading(false)
				setError(true)
			})
	}, [])

	if (isLoading) {
		return <Spinner />
	}

	if (error) {
		return <Error />
	}

	const rest = filteredByStopsTickets.length - countTickets
	const ending = ['', 'а', 'ов'][rest === 1 ? 0 : rest < 5 && rest > 1 ? 1 : 2]

	return (
		<>
			<GlobalStyles isOpen={isOpen} />

			<Button onClick={() => setOpen(true)} styles={stylesBtn} active>
				Количество пересадок
			</Button>

			{isOpen && (
				<ModalStops
					{...{
						checkboxes,
						changeChecked,
						onClickFn: (e) => {
							if (e.target === e.currentTarget) {
								setOpen(false)
							}
						},
					}}
				/>
			)}

			<Logo />
			<Container>
				<Context.Provider
					value={{
						sortBy,
						setSortBy,
						tickets: filteredByStopsTickets.slice(0, countTickets),
					}}
				>
					<div>
						<Sidebar {...{ checkboxes, changeChecked, hide: true }} />
					</div>

					<Main
						{...{
							setCountTickets,
							ending,
							addRest: rest < 5 ? rest : 5,
						}}
					/>
				</Context.Provider>
			</Container>
		</>
	)
}

export default App
