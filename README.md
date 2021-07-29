# Kasa

Kasa is a web application offering its users the possibility to rent apartments.

The project is hosted on netlify there : [https://sebdelile-ocr-p11-kasa.netlify.app/](https://sebdelile-ocr-p11-kasa.netlify.app/)

![app preview - home page](/docs/app-preview-homepage.png)

## How to begin with the project

To install the project on your laptop, fork or clone the repo and launch the command `npm ci` to install all dependencies. Then you can start working on the project !

- A class diagram of the app can be found at [/docs/Kasa-class-diagram.drawio.png](/docs/Kasa-class-diagram.drawio.png)
- The javascript documentation can be found at [/docs/javascript/index.html](/docs/javascript/index.html)
- The stylesheet documentation can be found at [/docs/styleguide/index.html](/docs/styleguide/index.html)

## Dependencies

The project is a single page application powered by React JS. it uses :

- **create-react-app** for the react providing (includes Webpack, Babel and Eslint)
- **react-router-dom** for the app routing
- **node-sass** to allow the use of scss files and sass features natively
- **prettier** to format the files (add any missing semi-column and 2 spaces tab-width)
- **jest** and **testing-library** : provided by create-react-app, used to run the unit and integration tests
- **cypress** to perform functionnal tests (local-cypress allow to avoid any conflict between jest and cypress for global variables as `describe` and `it`)
- **jsdoc** to document the javascript
- **kss** to document the scss
- **draw-io** to edit the class diagramm, a [vs-code extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner with Jest.

### `npm run cypress-browser`

Open the Cypress dashboard to launch the functionnal tests.

### `npm run cypress-terminal`

Run the functionnal tests in te terminal.

### `npm run jsdoc`

Update the javascript documentation

### `npm run kss`

Update the stylesheet documentation.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
