


 const lifeCycleData = {
                        mount: {
                            methods: [
                                {
                                    name: 'constructor()',
                                    times:'Call One Time in Mount phase',
                                    content:[
                                        'In this phase the React component prepares for the upcoming tough journey, by setting up the initial states and default props, if any.',
                                    ],
                                    img:'./assets/img/mount/constructor.png'

                                },
                                {
                                    name: 'componentWillMount()',            
                                    times: 'Call One Time in Mount phase',
                                    content: [
                                        '🚨componentWillMount will be deprecated in React 16.3.',
                                        'The componentWillMount method is called right before a component mounts or the render method is called. The truth is that you might hardly make use of this method in your React application.',
                                        'The componentWillMount method sits between the constructor method and the render method which puts it in a very odd position. Since it’s before the render method, it can be used to set the default configuration for a component, but this is mostly done using the constructor method. And since nothing changes between these two methods, there will be no need to set the configuration again.',
                                        'Also, the render method has not been called at this point so nothing can be done with the DOM of the component since it has not been mounted. Some might think that this is the right place to make API calls for client-side rendering but this should not be done. API calls are asynchronous and the data might not be returned before the render method gets called. This means that the component might render with empty data at least once.',
                                        'one good way to make use of this method is to perform any setup that can be done at runtime, for instance connecting to external APIs like Firebase. This setup should typically be done at the highest level of your component, like your root component, so the majority of your components will likely not make use of this method.',

                                    ],
                                    img: './assets/img/mount/componentWilllMount.png'

                                },
                                {
                                    name: 'render()',
                                    times: 'Call during mount and update phase',
                                    content: [
                                        'mounts the component onto the browser. This is a pure method, which means it gives the same output every time the same input is provided.'
                                    ],
                                    img: './assets/img/mount/render.png'

                                },
                                {
                                    name: 'componentDidMount()',
                                    times: 'Call One Time in Mount phase',
                                    content: [
                                        'This method is available after the component has mounted. That is, after the HTML from render has finished loading. It is called once in the component life cycle and it signals that the component and all its sub-components have rendered properly.',
                                        'This is the best place to make API calls since, at this point, the component has been mounted and is available to the DOM. Generally, componentDidMount is a good place to do all the setup you couldn’t have done without the DOM. ',
                                        'So here is a bunch of things you can do with this method:: Connect a React app to external applications, such as web APIs or JavaScript frameworks, Set Timers using using setTimeout or setInterval, Add event listeners. Draw on an element you just rendered.',
                                    ],
                                    img: './assets/img/mount/componentDidMount.png'

                                },
                            ]
                        },

                        update:{
                            methods: [
                                {
                                    name: 'componentWillReceiveProps()',
                                    times: 'Call Every Time in update phase',
                                    content: [
                                        '🚨componentWillReceiveProps is set to be deprecated in React 16.3',
                                        'Props are externally passed in to a component by its parent component. Sometimes these props are hooked to the state of the parent component. So if the state of the parent component changes, the props passed to the component changes and it has to be updated. If the props are tied to the state of the component, a change in it will mean a change in the state of the component.',
                                        'componentWillReceiveProps is a method that is called before a component does anything with the new props. This method is called with the new props passed as an argument. Here, we have access to the next set of props and the present ones. Therefore, using this method, we can compare the present props with the new ones and check if anything has really changed.',
                                        '🚨React may call this method even though nothing has really changed so make sure to make a comparison. If nothing has changed, there will be no need to change the state of the component. But if it has changed, then this change can be acted upon.',
                                        'In the example , this.state.number will only be updated if the new number is different from the previous one. So if there’s no difference then the state is not updated.'
                                    ],
                                    img: './assets/img/update/componentWillReceiveProps.png'

                                },
                                {
                                    name: 'shouldComponentUpdate()',
                                    times: 'Call Every Time in update phase',
                                    content: [
                                            'This method is called before the component re-renders after receiving a new set of props or there’s a new state. We can see that it receives two arguments, the next props, and the next state. The default behavior is for a component to re-render once there’s a change of state of props.',
                                            'shouldComponentUpdate is used to let React know that a component’s output is not affected by a change of props or state in the component and thus should not re-render. It returns either a true or false value. If it returns true, the component will go ahead and do what it always does, re-render the component. If it returns false then the component will not update. Note that this does not prevent child components from re-rendering when their state changes.',
                                            'The best way to use this method is to have it return false and hence the component will not update under certain conditions. If those conditions are met, then the component does not update.',
                                            '🚨 shouldComponentUpdate is a great place to improve the performance of a component because it can help to prevent unnecessary re-rendering. However, it is advised not to use this method for deep equality checks or JSON.stringify as this is very inefficient and may harm performance.'
                                    ],
                                    img: './assets/img/update/shouldComponentUpdate.png'

                                },
                                {
                                    name: 'componentWillUpdate()',
                                    times: 'Call Every Time in update phase',
                                    content: [
                                        '🚨componentWillUpdate method is set to be deprecated in React 16.3.',
                                        'componentWillUpdate is the method that can be used to perform preparation before re-rendering occurs. You cannot call this.setState in this method.',
                                        'One major thing that can be done with this method is to interact with things outside of the React architecture. Also, if you need to do any non-React setup before a component renders such as interacting with an API or checking the window size, componentWillUpdate can be used.',
                                        'Another time to use this method is if you are using shouldComponentUpdate and need to do something when the props change. In this scenario, it is preferable to use it instead of componentWillReceiveProps and it will be called only when the component will actually be re-rendered. However, if you need state to change in response to change in props, use componentWillReceiveProps instead.',
                                        'While it can be used to perform animations and other effects, it should not be done as this method might be called multiple times before the component is actually re-rendered.'

                                    ],
                                    img: './assets/img/update/componentWillUpdate.png'

                                },
                                {
                                    name: 'render()',
                                    times: 'Call Every Time in Mount & update phase',
                                    content: [
                                        'mounts the component onto the browser. This is a pure method, which means it gives the same output every time the same input is provided.'
                                    ],
                                    img: './assets/img/mount/render.png'

                                },
                                {
                                    name: 'componentDidUpdate()',
                                    times: 'Call Every Time in update phase',
                                    content: [
                                        'componentDidUpdate is called after any rendered HTML has finished loading. It receives two arguments, the props and state of the component before the current updating period began.',
                                        'componentDidUpdate is the best place to perform interaction with non-React environment like the browser or making HTTP requests. This should be done as long as you compare the current props to the previous props to avoid unnecessary network requests.'
                                    ],
                                    img: './assets/img/update/componentDidUpdate.png'

                                },
                            ]
                        },

                        unmount: {
                            methods: [
                                {
                                    name: 'componentWillUnmount()',
                                    times: 'Call Every Time in unmount phase',
                                    content: [
                                       'This is the only unmounting method. componentWillUnmount is called right before a component is removed from the DOM. This is where you can perform any cleanups that should be done such as invalidating timers, canceling network requests, removing event listeners or canceling any subscriptions made in componentDidMount.'
                                    ],
                                    img: './assets/img/unmount/componentWillUnmount.png'

                                },
                                {
                                    name: 'componentDidCatch()',
                                    times: 'Call Every Time in unmount phase',
                                    content: [
                                        '🚨This lifecycle method was added in React 16 and is used in error boundaries.',
                                        'A component becomes an error boundary if it defines the componentDidCatch method. In this method, this.setState can be called and used to catch an unhandled JavaScript error in a child component tree and display a fallback UI instead of the component that crashed. These errors are caught during rendering, in lifecycle methods, and in constructors of the whole tree below them.',
                                        'This is to ensure that an error in a child component does not break the whole app.',
                                        'It is important to note that this method only catches errors in child components and not in the component itself.',
                                        'This method has two parameters. The first is the actual error thrown. The second parameter is an object with a componentStack property containing the component stack trace information. With these parameters, you can set the error info in state and return an appropriate message in its render method or log to a reporting system',
                                        
                                    ],
                                    img: './assets/img/unmount/componentDidCatch.png'

                                },
                            ]
                        }

                    };

export default lifeCycleData;