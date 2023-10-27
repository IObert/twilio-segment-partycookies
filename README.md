# Next.js Party Cookies Demo for Signal London 2023

This repository houses the code for the Party Cookies Demo presented at the Developer Track of Signal London 2023. The demo harnesses the power of Twilio Communications and the Segment Customer Data Platform. It is built using Next.js and provides functionality to order cookies, signup for a newsletter campaign, and disseminate the campaign to all customers stored within the Customer Data Platform (CDP).

## Prerequisites

Ensure that you have the following prerequisites before proceeding:

- **Node.js and npm**: Download and install them from [here](https://nodejs.org/en/download/).

- **Twilio Account**: Sign up for free at [Twilio](https://www.twilio.com/). Once an account is created, gather your account SID, auth token, API key, API secret, and follow these steps:

  - Generate an [API key](https://support.twilio.com/hc/en-us/articles/9318455807771-API-Keys-and-How-to-Change-Them).
  - Purchase a number and set it up for [WhatsApp communication](https://www.twilio.com/docs/whatsapp/tutorial/connect-number-business-profile).
  - Craft a [Messaging Service](https://support.twilio.com/hc/en-us/articles/223181308-Getting-started-with-Messaging-Services) and attach the number, as well as the WhatsApp sender to it.

- **Segment Account**: Register for free at [Segment.com](https://segment.com/signup/). Upgrade to the Business plan and:
  - Set up two [sources - JavaScript Website & Node.js Server](https://segment.com/docs/connections/sources/) within your workspace.
  - Build a [space for profiles](https://segment.com/docs/unify/quickstart/) and tie it to the sources you created.
  - Generate an [API access token](https://segment.com/docs/unify/profile-api/) for the space.

## Project Configuration

Follow the below steps to set up required environment variables :

1. Duplicate the `sample.env` file into a new `.env` file.

2. Open `.env` and replace the placeholders with your actual API keys and associated credentials.

3. Save your changes.

## Execution Steps

To run the application, execute the following commands in the terminal:

1. Navigate to the project directory via `cd twilio-segment-partycookies`.

2. Install dependencies with `npm install`.

3. Start the application using `npm start`.

The application will then be running locally at `http://localhost:3000`.

## Contributing

We welcome contributions to this open-source demo app. If you're interested in contributing, fork the repository, create a new branch, commit your changes, and submit a Pull Request. Make sure your changes are constructive and adhere to our guidelines.

## License

This project is licensed under the terms of the Apache 2.0 License. Use it, alter it, share it as you see fit, taking into account the stated license terms and conditions.
