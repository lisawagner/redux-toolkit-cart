# Redux Toolkit Shopping Cart

> This Shopping Cart was created as a study on Redux Toolkit.

[![Netlify][netlify-img]][netlify-url]
[![GitHub repo size][github-img]][github-url]
[![GitHub last commit][github-commit]][github-url]

[Shopping Cart Demo](https://friendly-redux-shopping-cart.netlify.app/ "Shopping Cart Demo")

## Tech Stack

   1. Reactjs
   2. Redux Toolkit
   3. Axios
   4. Netlify Deployment

## Scope

   - Header/Navbar featuring a cart icon that displays number of items in cart
   - Order Summary featuring items in the cart, subtotal at the bottom, and a 'clear cart' button
   - Item Cards featuring: 
        * item image
        * product name
        * details
        * increase/decrease quantity selected buttons
        * price
        * delete item from cart button

## Application Snapshot

![Cart Snapshot](src/assets/cart-img.png "Cart Snapshot")

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project on a live system.

### Development setup

Download and extract the Zip file or clone this repo your system.

After downloading/cloning this repo, go to its root directory and run:

```
$ npm i
$ npm start
```

### Deployment

This project is hosted on Netlify. To deploy your own copy, you will need to set up a Netlify account. Netlify offers a generous free tier to developers.

Before deploying to Netlify you need to create a build:

```
$ npm run build
```

It is a good idea to test your build by serving it on your localhost. Once you are happy with your build, open up your Netlify Account.

For a basic deploy, you can simply drag and drop the build folder onto your Netlify Sites directory. See [Get started with Netlify](https://docs.netlify.com/get-started/) for details.

## Extras

A css class of `.hide` added on the 'continue shopping' button and the 'checkout' button. The functionality of these button are not part of the scope of this study. They will be built out as part of an upcoming study.

<!-- Markdown link & img dfn's -->
[github-img]: https://img.shields.io/github/repo-size/lisawagner/redux-toolkit-cart?logo=github&style=flat-square
[github-url]: https://github.com/lisawagner/redux-toolkit-cart
[github-commit]: https://img.shields.io/github/last-commit/lisawagner/redux-toolkit-cart?logo=github&style=flat-square

[netlify-img]: https://img.shields.io/netlify/a7a3affb-6812-4bb0-ac21-7218324a3bc3?style=flat-square
[netlify-url]: https://friendly-redux-shopping-cart.netlify.app/