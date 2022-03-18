// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Represent a default prop (in this case: `className`) with a custom prop (`size`):
const Box = ({size, style, ...otherProps}) => (
	<div
		className={`box box--${size}`}
		style={{fontStyle: 'italic', ...style}}
		{...otherProps}
	/>
)

function App() {
	return (
		<div>
			<Box size="small" style={{backgroundColor: 'lightblue'}}>
				small lightblue box
			</Box>
			<Box size="medium" style={{backgroundColor: 'pink'}}>
				medium pink box
			</Box>
			<Box size="large" style={{backgroundColor: 'orange'}}>
				large orange box
			</Box>
			<Box>Default box</Box>
		</div>
	)
}

export default App
