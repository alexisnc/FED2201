What Is React?  
	
	React is a library that uses javascript to build user interfaces 
	
What is JSX?  
	JSX is javascript Xml. It looks like a combination of javasctipt and html beause the logic and he markup language are used together. 
	
	
Explain the different types of components.  
	Functional: Javascript function that returns JSX
    Class: Javascript class that extends the react.Component and has the ability to render 
    Pure: only render when props change and sense props are immutable, they don's change at all. In other words, they are pure because their inputs and results never change. 
	
	
What are higher order components?  
	Higher Order components are similar to the app component in angular because all of the other components are within this component. It is the main body of html that holds the other elements. 
	
	
What is context?  
	Context is a way to pass down props to multiple components without going directly from parent to child. Data used by multiple components at different levels. 
	
	
What is State and Props?  
	Props:A component can change the props of its children btu not its own props;

    States: Compnents manage their own state but doesnt not meddle with the states of their children.
    State changes from what the user does

    They are both javascript objects that can cause a re-render if changed
	
	
What Are Hooks?  
	first value is the current value and the second one is the function that lets you change/update the state 
    lets you connect to the state and lifecycle methods with a functional component. 
    hooks let you use react features without classes 
	
	
What are some of the “Rules” of Hooks?  
	Only use Hooks at the top level and call them wtih react functions and not javascript functions
    can't use hooks in loops, conditions, and nested functions 
    these rules are here so the hooks can stay in order if there are multiple hook calls 
	
	
What are error boundaries?  
	Error boundaries catch errors in their child components and display a fallback UI instead of the failed rendering. Only catches the errors during rendering, in the constructors, and in the lifecycle methods. Can't catch it's own errors. Similar to parents telling their kids what they did wrong but can't recognize their own bad parenting. 
	
	
What are Keys?
    Keys are special identifiers that are used for listed items in arrays so react can determine what has changed; A special string attribute 