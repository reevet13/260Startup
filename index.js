const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket server logic
wss.on('connection', (socket) => {
    console.log('WebSocket connection opened');

    socket.on('message', (message) => {
        // Handle incoming messages (quiz results)
        const quizResults = JSON.parse(message);
        console.log('Received Quiz Results:', quizResults);
        // Save the user's answer to a database or perform any desired action
    });

    socket.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ... (any other routes or middleware you need)

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
