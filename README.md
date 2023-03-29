# Retailer Rewards Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Initialization

1. Install node modules by running `npm install`.
2. Update environment variables as needed. To run mock server set `REACT_APP_USE_MOCK` as true in environment variables. You can create `.env` file by copying `.env.mock` file.
3. Start the application by running `npm run start`.

## How mock server runs

If you start the server with `REACT_APP_USE_MOCK` as true, then in `index.js` file we start mock server on following route by default. This route can be updated in constants.js file by changing MOCK_SERVER_BASE_URL.

```http://localhost:8080```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
