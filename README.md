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