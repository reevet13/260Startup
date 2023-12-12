const express = require('express');
const app = express();
const DB = require('./database.js'); // Assumes database connection and methods
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt'); // For password hashing

const port = process.argv.length > 2 ? process.argv[2] : 4000;
const authCookieName = 'quiz_token'; // Change this to your desired cookie name

// Middleware for authorization
app.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName] || req.headers.authorization;

  if (!authToken) {
    return res.redirect('/index.html'); // Redirect to login page
  }

  const user = await DB.getUserByToken(authToken); // Check token validity in DB

  if (!user) {
    if (req.path.startsWith('/api/')) {
      return res.status(401).json({ msg: 'Unauthorized' }); // Send error for API requests
    } else {
      return res.redirect('/index.html'); // Redirect to login page for other routes
    }
  }

  req.user = user; // Attach user object to request for further use
  next();
});

// API routes
const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/scores', async (req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Replace with your actual login logic
  // This should validate email, password against DB, and generate a token
  const user = await DB.authenticateUser(email, password);

  if (!user) {
    return res.status(401).json({ msg: 'Invalid email or password' });
  }

  const token = await generateUserToken(user); // Generate token based on user data

  // Set cookie and send response
  res.cookie(authCookieName, token, {
    httpOnly: true,
    secure: true, // Set secure flag for HTTPS
  });
  res.json({ token, id: user._id });
});

// Other API routes...

// Route for protected quiz page
app.get('/quiz.html', (req, res) => {
  if (!req.user) {
    return res.redirect('/index.html'); // Redirect to login page if not authorized
  }

  // Render the quiz page using data from req.user or DB
  res.sendFile('quiz.html', { root: 'public' });
});

// Route for other public pages
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Server setup
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Helper functions
function generateUserToken(user) {
  // Replace with your secure token generation logic
  // This should generate a unique token based on user data and a secret key
  return Buffer.from(user.email).toString('base64'); // Example using email (not secure!)
}

