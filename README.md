# phone-input-test-app

This README outlines the details of collaborating on this Ember application.

## Installation

* `git clone <repository-url>` this repository
* `cd phone-test`
* `npm install`

## Running / Development

* `ember serve` or `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Description

The app contains 4 functions, provided on 3 different pages:

* `Phone Input`, which is an input with the option to select countries from a dropdown (select+options)
* `Search Input with Autocomplete`, which makes a query on existent github repos
* `Phone Input with Search`, which is an input of type `tel`, with options to search for a country, and dynamically update the prefix
* `Phone Number Format Validation` which is an input that fixes the number format after a predefined pattern
* `Complete Phone Form` with search for countries, custom pattern for each country, and validation

## Tech Stack

* `node.js` v14.17.0.
* `ember-cli` v4.4.0.
* `appuniversum` v1.2.1.
* `ember-cli-sass` v11.0.1.

## Deployment

> The app is deployed, in development mode, on [Netlify](https://iurianu-ember-phone-input.netlify.app/).

> The code is public, and can be freely checked on [Github](https://github.com/iurianu/ember-phone-input)
