# SEPTA, where you at?

### A simple React app to help you decide whether to wait for the bus, or hoof it.

This is single page application that uses the [Google Maps API](https://developers.google.com/maps/ "Google Maps API") and the [SEPTA API](http://www3.septa.org/hackathon/ "SEPTA API"). The app uses a small Express app that serves as an API endpoint for the React app (additional routes to the Express API are likely in future development).

The Express app lives in the `root` directory, and the React app lives in the `/client` directory.

_Caveat lector imitatorque_: this is my _very_ first Node / React app.

### Prerequisites
    node
    npm

### Setup

    git clone git@github.com:webolton/septa-react-app.git
    cd septa-react-app
    npm install
    cd client
    npm install

### Run the app in development mode

    SET DEBUG=wheres-septa-react-express:* & npm run devstart

then open another terminal or tmux buffer and

    cd client/ && npm start