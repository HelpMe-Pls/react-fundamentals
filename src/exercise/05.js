// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// const Box = ({className, style, children}) => (	// this is not optimal coz what if you'd want to pass other props rather than just `children` ?
// 	<div className={`box ${className}`} style={{...style, fontStyle: 'italic'}}>
// 		{children}
// 	</div>
// )

// a better way to do that is spreading the rest of the props (i.e. you just don't care what it could be):
const Box = ({style, className, ...otherProps}) => (
	<div
		className={`box ${className}`}
		style={{fontStyle: 'italic', ...style}}
		{...otherProps}
	/>
)

function App() {
	return (
		<div>
			<Box className="box--small" style={{backgroundColor: 'lightblue'}}>
				small lightblue box
			</Box>
			<Box className="box--medium" style={{backgroundColor: 'pink'}}>
				medium pink box
			</Box>
			<Box className="box--large" style={{backgroundColor: 'orange'}}>
				large orange box
			</Box>
			<Box>Default box</Box>
		</div>
	)
}

export default App
