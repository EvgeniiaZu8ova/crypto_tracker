# Crypto Tracker App

This app allows to monitor real-time data for popular crypto currencies.

## Setup
Prerequisites: it is necessary to have LTS Node version installed on your machine.

To setup project locally it is necessary to clone project with `git clone` command, then run `npm install` command to install required dependencies. Then it will be possible to run project locally with `npm run dev` command.

## Technologies
- This app was created with use of Vite bundler which is supposed to be faster than Webpack;
- React latest stable version is in use here;
- Navigation between pages is implemented with use of react-router-dom library. There are two pages in the project - home page with list of currencies, and currency detail page which is accesible by click on currency name or logo on home page;
- Ant design which is claimed to be world's second most popular React UI framework was used here to handle UI components;
- Lightweight Zustand library was used to manage app state;
- Recharts easy-to-use well documented library was used to build plots for currency detail page;
- Dayjs popular library was used to operate with timestamps

## API
In order to get necessary data, free Binance API was used here. It was a bit challenging and I would say most time-consuming part of the task to find free API supporting Web Socket as most of them need to be paid for, and unexpectedly Binance API was found to be free.
Two services provided by Binance API were used in the app: 
 - "wss://stream.binance.com:9443/stream" to get stream data for currencies prices
 - "https://api.binance.com/api/v3/historicalTrades" to get currencies historical trades

## Further Improvements
This app can be improved in multiple ways, like adding of more information to details page, plot visualization improvements, adding more currencies to the table on homepage with implementation of table pagination or infinite scroll and more and more. Tests also can be expanded. Current implemented amount of work is restricted with lack of time. 

## Comments
It would be nice to have free API mentioned in task description as it really took a lot of time to find appropriate option (for Binance I was sure it is paid, btw).

Will be glad to receive a feedback, thank you in advance
