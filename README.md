# Farazy Wallet Backend

This project is currently under development.

The main purpose for this project is to advance my personal software engineering skills. 

Welcome to the Farazy Wallet Backend repository! This repository contains the backend code for the Farazy Wallet app, which allows users to simulate how their cryptocurrency portfolio would have performed if they had invested in different cryptocurrencies at a particular time. With Farazy Wallet, users can create a fake crypto wallet and add any amount of their desired cryptocurrencies to the wallet. They can then view their wallet at any time by saving the URL. The app is anonymous and straightforward, and users don't need to log in to access their wallet.

This repository contains the code for the backend portion of the app. If you're looking for the frontend code, you can find it in the [Farazy Wallet Frontend repository](https://github.com/BoraSoylu/fw-frontend).

## Hosting with Planetscale and Railway

The FarazyWallet database is hosted on [PlanetScale](https://www.planetscale.com/), while the backend server is hosted on [Railway](https://railway.app/). The domain farazywallet.com has been purchased and added to DNS. 
The backend is currently live: https://www.farazywallet.com/api/v1/wallet?address=VL1JVE4EMS

## Coingecko API

To retrieve cryptocurrency data, Farazy Wallet uses the Coingecko API. Coingecko is a popular cryptocurrency data provider that offers a comprehensive set of APIs for retrieving real-time and historical cryptocurrency data. With the Coingecko API, Farazy Wallet can retrieve the latest prices, market caps, and other cryptocurrency data that is needed to simulate a cryptocurrency portfolio.

For more information on the Coingecko API, please refer to the [official documentation](https://www.coingecko.com/en/api/documentation).


## Farazy Wallet is built using the following technologies

- **TypeScript**: A typed superset of JavaScript that provides better type checking and developer experience. With TypeScript, developers can catch errors before runtime, which makes the development process more efficient.

- **Prisma**: An ORM for Node.js that provides a type-safe database access layer. Prisma enables us to interact with databases using a modern, type-safe API.

- **Node.js**: A JavaScript runtime that allows us to run server-side code. Node.js is used for building scalable and performant network applications.

- **Express.js**: A minimal and flexible web application framework for Node.js. Express.js is used to handle HTTP requests and responses, routing, and middleware.

- **Joi.js**: A schema validation library that helps ensure that the data we receive from clients is in the expected format. Joi.js is used to validate and sanitize incoming requests.

- **Zod**: A TypeScript-first schema validation library that provides a great developer experience and great performance. Zod is used to validate and sanitize incoming requests.

- **ESLint**: A JavaScript linting tool that helps find and fix common coding issues. ESLint ensures that the code adheres to a consistent style and best practices, which makes the code more maintainable.

- **Prettier**: An opinionated code formatter that enforces a consistent code style. Prettier automatically formats the code, which saves developers time and ensures that the code adheres to the team's coding standards.

- **Helmet**: A collection of middleware functions for Express.js that help secure our application by setting various HTTP headers. Helmet is used to help protect against common web application vulnerabilities.


## Through working on this project, I am learning the following topics


### API Design

API design involves designing the interfaces that our application exposes to the outside world. Good API design is crucial for building maintainable and scalable applications.

### ORM

ORM (Object-Relational Mapping) is a technique for mapping database tables to objects in an application. Prisma is an example of an ORM for Node.js.

### Validation of HTTP Requests

Validation of HTTP requests involves ensuring that the data received from clients is in the expected format. Joi.js and Zod are examples of libraries that can be used to validate HTTP requests.

### Hosting Software on the Cloud

Hosting software on the cloud involves deploying our application to a cloud service provider such as AWS, GCP, or Azure. This can provide many benefits, including scalability, reliability, and ease of deployment.

### Rate Limiting

Rate limiting involves limiting the rate at which clients can make requests to our application. This can help prevent abuse and ensure that the application remains performant.

## What does Farazy mean?

Farazi means imaginary in Turkish and since this is a project about imaginary crypto wallets I thought it would be fitting to use a "tech version" of the original word. 
