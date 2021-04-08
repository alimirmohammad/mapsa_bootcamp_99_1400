# React.lazy

- The React.lazy function lets you render a dynamic import as a regular component.

```javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

- The lazy component should then be rendered inside a Suspense component

```javascript
<Suspense fallback={<div>Loading...</div>}>
  <OtherComponent />
</Suspense>
```

# Fragments

- used to have adjacent elements
- <Fragment> can also accept key
- <> doesn't accept key

# Error Boundary

- A JavaScript error in a part of the UI shouldn’t break the whole app.
- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
- class component
- static getDerivedStateFromError() -> render a fallback UI
- componentDidCatch() -> log error information
- Error boundaries do not catch errors for:

* Event handlers (learn more)
* Errors thrown in the error boundary itself (rather than its children)

- example throw error with certain prop 'Akbar'

# Ref

- DOM access
- useRef -> mutable object with no additional re-renders, e.g. clear interval

# Forward Ref

- Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.
- React.forwardRef((props, ref) => JSX)
- example a button in the parent focuses an input in the child

# HOC

- a higher-order component is a function that takes a component and returns a new component.
- Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
- a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.
- example onClick and onMouseOver counter

# Default Props

```javascript
Component.defaultProps = {
  'aria-label': 'something'
};
```

# Portals

- Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```javascript
ReactDOM.createPortal(child, container);
```

The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

- A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.
- the portal still exists in the React tree regardless of position in the DOM tree. This includes event bubbling.

# Prop-Types

```javascript
HelloWorldComponent.propTypes = {
  name: PropTypes.string
};
```

# Render Props

- A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
- a render prop is a function prop that a component uses to know what to render.
- you can implement most higher-order components (HOC) using a regular component with a render prop.

```javascript
<Mouse render={mouse => <Cat mouse={mouse} />} />
```

- we could just as easily use the children prop!

```javascript
<Mouse>
  {mouse => (
    <p>
      The mouse position is {mouse.x}, {mouse.y}
    </p>
  )}
</Mouse>
```

# Custom Hooks

- example two inputs with bind functionality

# useMemo

- example two counters, one has complex even or odd logic
