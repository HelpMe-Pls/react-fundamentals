// TypeScript with React

// 🦺 add type definitions for each function
// const operations = {
//   '+': (left: number, right: number) => left + right,
//   '-': (left: number, right: number) => left - right,
//   '*': (left: number, right: number) => left * right,
//   '/': (left: number, right: number) => left / right,
// }
// type ops = keyof typeof operations

// Typing `operations` using `Record`
type ops = '+' | '-' | '*' | '/'
type fn = (left: number, right: number) => number
// const operations: Record<ops, fn> = {
// 	'+': (left, right) => left + right,
// 	'-': (left, right) => left - right,
// 	'*': (left, right) => left * right,
// 	'/': (left, right) => left / right,
// }
// This will show an error: Property '**' does not exist on type 'Record<ops, fn>'.
// operations['**'](1, 2)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Typing `operation` using `CIF`
// Create a CIF:
const createCIFOps = <InferredOpsType extends Record<ops, fn>>(
	ops: InferredOpsType,
) => ops
// This would also work, but the above is more "generic":
// const createCIFOps = (
//   ops: Record<ops, fn>,
// ) => ops

// Using the CIF:
const operations = createCIFOps({
	'+': (left, right) => left + right,
	'-': (left, right) => left - right,
	'*': (left, right) => left * right,
	'/': (left, right) => left / right,
})
// Constrained identity functions (CIF) allow us to NOT explicitly annotate our variable while STILL getting to enforce the values. E.g. this would pops up a more detailed error:
// operations['**'](1, 2)

// 🦺 create a type called CalculatorProps
type CalculatorProps = {
	left?: number
	right?: number
	operator?: ops // if this was `string` then the `result` from line 21 would be `any`
}

// 🦺 set the type for this props argument to CalculatorProps
function Calculator({left = 0, operator = '+', right = 0}: CalculatorProps) {
	const result = operations[operator](left, right)
	return (
		<div>
			<code>
				{left} {operator} {right} = <output>{result}</output>
			</code>
		</div>
	)
}

function App() {
	return (
		<div>
			<h1>Calculator</h1>
			<Calculator left={1} operator="+" right={2} />
			<Calculator left={1} operator="-" right={2} />
			<Calculator left={1} operator="*" right={2} />
			<Calculator left={1} operator="/" right={2} />
		</div>
	)
}

export {App}
