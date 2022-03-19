// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
	const inputRef = React.useRef()

	const handleSubmit = e => {
		const inputValue = inputRef.current.value
		onSubmitUsername(inputValue)

		e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="alertInput">Username:</label>
				<input type="text" id="alertInput" ref={inputRef} />
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
