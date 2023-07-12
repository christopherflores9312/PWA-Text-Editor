# Text Editor PWA

A Progressive Web Application (PWA) that allows you to create notes and code snippets with or without an internet connection, and reliably retrieve them later.

## Project Overview

This application is a single-page text editor built with next-gen JavaScript and runs in the browser. It meets the PWA criteria and features data persistence techniques using an IndexedDB database, with a package called idb acting as a lightweight wrapper for data storing and retrieval.

The application is structured with a client-server folder and bundled with webpack. It is deployed as a full-stack application on Heroku.

## Acceptance Criteria

- You should see a client-server folder structure when opening the application in the editor.
- Running `npm run start` from the root directory starts up the backend and serves the client.
- JavaScript files have been bundled using webpack.
- Running webpack plugins generates an HTML file, a service worker, and a manifest file.
- The application uses next-gen JavaScript and functions in the browser without errors.
- Opening the text editor immediately creates a database storage with IndexedDB.
- Entering content and subsequently clicking off the DOM window saves the content in the text editor with IndexedDB.
- Reopening the text editor after closing it retrieves the content from IndexedDB.
- Clicking on the Install button downloads the web application as an icon on the desktop.
- Loading the web application registers a service worker using workbox.
- Registering a service worker pre-caches the static assets upon loading along with subsequent pages and static assets.
- Deploying to Heroku should have proper build scripts for a webpack application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- Git

### Installing

1. Clone the repo

```bash
git clone https://github.com/your_username_/Project-Name.git
```
2. Install NPM packages
```bash
npm install
```
3. Start the application
```bash
npm run start
```
### Usage
Open the application in your web browser, start creating notes or code snippets. They are saved automatically to the IndexedDB database and can be retrieved later even without an internet connection.

### Deployment
The application can be deployed to Heroku with a proper build script for a webpack application.

### Built With
-Node.js

-Express.js

-Webpack

-IndexedDB

-idb - a lightweight wrapper for IndexedDB

### Contributing
Any contributions are greatly appreciated. Please follow the steps below to contribute.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
Distributed under the MIT License. See LICENSE for more information.