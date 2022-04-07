# What I've learnt
###### For more details, see `src/exercise/*.md` files
-------------

## VanillaJS
- Using VanillaJS (inside of a HTML `script` tag) to generate HTML elements

## Raw React APIs
- `React` vs `ReactDOM`: `React` is for creating elements and using the core features of React (like hooks and such). `ReactDOM` is for specific rendering platform (in this case,the DOM in the browser, other cases, `ReactNative`) 

- Using raw `React` & `ReactDOM` APIs from [unpkg](https://unpkg.com) to render "It is what it is."
- `children` prop (when it is *plural*) will be rendered as an **ARRAY**

## JSX
- Statement vs expression: expression is expressed into a value (e.g. `someString.toUppercase()`), while statement is like some imperative logic and usually starts with a keyword like `if`, `const`, `switch`, `return`,...
- Overriding and setting default props (with spread operator)

## Create a component
- Create a component using JSX syntax instead of using `React.createElement()`
- `prop-types` for typing the component's props if you're not using TypeScript
- `React.Fragment` allows you to position two elements side-by-side rather than being nested inside a parent element

## TypeScript
- Use Constrained Identity Functions [(CIF)](https://github.com/HelpMe-Pls/react-fundamentals/blob/extra/src/final/TS/init.tsx) to constrain types more generically.

## Styling
- Create a custom component with default props and spreading optional props
- [Represent](https://github.com/HelpMe-Pls/react-fundamentals/blob/extra/src/exercise/05.js) a default prop with a custom prop 

## Forms
- `<label htmlFor=...>` in JSX is `<label for=...>` in HTML. 
- `event.preventDefault()`
- Improve form typing by extending the `HTMLFormElement` interface and override the `elements` to have a customized type that [we can define](https://github.com/HelpMe-Pls/react-fundamentals/blob/extra/src/final/TS/06.tsx).
- Using `React.useRef()` to implement a "form element" as an **uncontrolled** element (using the DOM to save the form values) 
- Using the default `value` prop of the `<input>` element with `React.useState()` to implement a **controlled** form component
- The only benefit of a controlled component is that you can change the value of the input programatically. Otherwise you don't need it to be controlled.

## Rendering Arrays
- Whenever you're rendering an array of React elements, each one must have a unique `key` prop. [See what happens](http://react-fundamentals.netlify.app/isolated/final/07.extra-1.js) if we don't have it