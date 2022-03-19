// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
	// const [inputValue, setInputValue] = React.useState('')
	const [error, setError] = React.useState(null)

	const handleChange = e => {
		// const isValid = inputValue === inputValue.toLowerCase()
		const {value} = e.target // coz this is the input, not the form
		const isValid = value === value.toLowerCase()
		setError(isValid ? null : 'Input value must be in lower case')
		// if (error) throw new Error(error)

		// setInputValue(e.target.elements.alertInput.value)
	}

	const handleSubmit = e => {
		// onSubmitUsername(inputValue)
		onSubmitUsername(e.target.elements.alertInput.value)

		e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="alertInput">Username:</label>
				<input type="text" id="alertInput" onChange={handleChange} />
			</div>
			<div style={{color: 'red'}}>{error}</div>
			<button type="submit" disabled={!!error}>
				Submit
			</button>
		</form>
	)
}

function App() {
	const onSubmitUsername = username => alert(`You entered: ${username}`)
	return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
