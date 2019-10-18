import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

import Route from 'react-router-dom/Route'
import Clocks from './Apps/clock/Clocks'
import Calculators from './Apps/calculator/Calculators'
import Calendars from './Apps/calendar/Calendar'
import Todo from './Apps/todo/Todo'
import styled from 'styled-components'
import Pictures from './Apps/pictures/Pictures'

import Scheduler from './Apps/scheduler/Scheduler'

const Containers = styled.div`
	background: black;
	text-align: center;
	color: white;
	margin: 20px;
	padding: 30px;
	border-radius: 14px;
	min-height: 1200px;
`

class App extends Component {
	render() {
		return (
			<Router>
				<Containers>
					<Clocks />
					<NavLink to="/">
						{' '}
						<button type="button" className="btn btn-primary">
							start
						</button>
					</NavLink>

					<NavLink to="/Calculators">
						{' '}
						<button type="button" className="btn btn-primary">
							calculator
						</button>
					</NavLink>
					<NavLink to="/Calendar">
						{' '}
						<button type="button" className="btn btn-primary">
							calendar
						</button>
					</NavLink>
					<NavLink to="/Todo">
						{' '}
						<button type="button" className="btn btn-primary">
							to do
						</button>
					</NavLink>
					<NavLink to="/Scheduler">
						{' '}
						<button type="button" className="btn btn-primary">
							scheduler
						</button>
					</NavLink>

					<Route
						path="/"
						exact
						strict
						render={() => {
							return (
								<Fragment>
									<Pictures />
								</Fragment>
							)
						}}
					/>

					<Route path="/Calculators" exact strict render={() => <Calculators />} />

					<Route path="/Calendar" exact strict render={() => <Calendars />} />

					<Route path="/Todo" exact strict render={() => <Todo />} />

					<Route path="/Scheduler" exact strict render={() => <Scheduler />} />
				</Containers>
			</Router>
		)
	}
}

export default App
