# socket.io sever node.js

This project is a basic chat client implemented with React.js, utilizing Socket.IO for real-time communication with a chat server. It demonstrates how to establish a connection to a Socket.IO server and exchange messages in real-time.

You can use my socket.ip [server](https://github.com/yuchengH1988/socket-io-server-js) here.

## Features

- Real-time messaging between clients in different rooms
- call an API for sending notification to a user who sets up a name.

### Message

- Join a room to message other people in the same room

### Notification

- Set up your name to active your notification
- Once the server side was called, you will receive a notification.

## Getting Started

Follow these instructions to set up the chat client in your local development environment.

### Prerequisites

- A running instance of a Socket.IO chat server (Refer to the server's README for setup instructions)
- A modern web browser that supports JavaScript and WebSocket

### Setup

Follow these steps to install and set up the project locally:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yuchengH1988/socket-io-server-js
   ```

2. Navigate into the project directory

   ```cmd
   cd projectname
   ```

3. Install dependencies

   ```cmd
   npm install
   ```

4. Start the server

   ```cmd
   npm run start
   ```

   This will launch the server on `localhost:3000`.

## Authors

- **Calvin Huang** - [GitHub](https://github.com/yuchengH1988)
  