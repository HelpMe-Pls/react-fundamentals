// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
	const [inputValue, setInputValue] = React.useState('')

	const handleChange = e => {
		const lowercasedInput = e.target.value.toLowerCase()

		setInputValue(lowercasedInput)
	}

	const handleSubmit = e => {
		onSubmitUsername(inputValue)

		e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="alertInput">Username:</label>
				<input
					type="text"
					id="alertInput"
					value={inputValue}
					onChange={handleChange}
				/>
			</div>

			<button type="submit">Submit</button>
		</form>
	)
}

function App() {
	const onSubmitUsername = username => alert(`You entered: ${username}`)
	return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
