## Instructions

Run "npm install" to install the Node dependencies

Run "npm run install-client" to install React dependencies

Run "npm run watch" to launch app

If the app doesn't automatically launch you may have to, open another terminal in the project folder (in this example codeTest) and run "npm run client" to launch the react app.

## Descriptions and Decisions
I decided to use ReactJs so I could split my code into components and more easily maintainable code.
I chose to use context as my state management because that's what I more familiar with and write quicker.  I know that I'd need the Context Provider throughout the project so I wrapped the app in it so I'd have access to what I need. In bigger projects I'd create more Context Providers and use them with just the components that need them.