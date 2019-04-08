# Top Coins

[Online demo](http://top-coins.nabi.pl)

Test project in React presenting a simple analysis of crypto assets with data downloaded from the [coinmarketcap.com](https://coinmarketcap.com/api/) API.

## The task

...was to create a two pages webapp presenting a table with market overview on one page and a liquidity scatter plot chart on the other. It has to allow the user to select the amount of coins presented on a page, has to be responsive and has to work. :)

## The problems

##### First problem
...was with the CoinMarketCap API. It's prohibited to make HTTP requests with Javascript on the client side, so I had to create a simple proxy on the server to get the data I needed.

## Technical details

The site is using Redux and Saga. I know it's an overkill to use such big libraries in such small project. It would work fine with React's native state and some Context to provide data to the components. In fact in this scale, even simple props would do the job. But I wanted to show you, that I'm comfortable with using Redux. And considering the fact that I will have to do something more with this project and I have no idea what it will be, I wanted to have a decent structure, to be prepared for the worst.
I didn't use Reselect, because I'm not doing anything complex with data from the store, so there is no need to create memoized selectors.<br>
Other third party libraries used in the project are:<br>

* `Axios` - for HTTP
* `Numeral` - for formating big numbers
* `Echarts` and `TauCharts` - for, well, charts
* `ReactContainerDimensions` - for providing the charts with container dimensions

## Responsibility

TauCharts don't deal well with window resizing. But it's not what responsibility is about. I added some breakpoints here and there to set the right dimensions for the chart container. ReactContainerDimensions component will send these dimensions to the chart and chart will rerender if needed. It looks pretty well in Chrome mobile testing mode, but I noticed some strange behaviour in Chrome on my phone. The chart is growing when I scroll to the upper/lower edge of the site. I works fine in Opera Touch. I'll look at it if I manage, but it seems to be the library problem, not my css.

Also the table on the overview site won't scale well. It's wide, it have lots of columns with big numbers, so it's normal. I added few breakpoints for smaller screens to decrease the font size a bit, but obviously I couldn't go too far with such solution.

## Installation

1. Clone the repository.
2. Go into the directory.
3. Run `npm install`.
4. Run `npm start`.
5. Open [http://localhost:3000](http://localhost:3000)
6. Enjoy.

If you don't know what `npm` is, better don't touch anything and simply visit the [online demo version](http://top-coins.nabi.pl).
Or you can install [Node.js](https://nodejs.org/en/) (`npm` is a part of the package), read some docs and start your journey into the amazing world of JavaScript programming.

I couldn't use Docker, because it won't work on my 10 years old Mac.<br>
That's why I'm looking for the job. Not only to kill the boredom, have fun and do great things, but also to buy a new Mac. And boy, they are expensive. :D

## What next, what could be done better

I should also use LESS or SASS instead of CSS. I borrowed the main styling from my [other test project](https://github.com/EDi-nabi/githubers), just to save some time, but I've lost all I gained because I had to rewrite it from LESS to CSS and copy/paste colors everywhere. :)

# Standard React readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

