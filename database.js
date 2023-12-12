const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('quizdb');
const userCollection = db.collection('users');
const scoreCollection = db.collection('scores');

// Connect to MongoDB and test the connection
(async function testConnection() {
  console.log('Attempting connection...')
  await client.connect();
  await db.command({ ping: 1 });
  console.log('Connection successful')
})().catch((ex) => {
  console.log(`Unable to connect to the database with ${url} because ${ex.message}`);
  process.exit(1);
});

// Function to insert a new user into the users collection
async function insertUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await userCollection.insertOne({ email, password: hashedPassword });
}

// Function to retrieve a user from the users collection by email
async function getUser(email) {
  return userCollection.findOne({ email });
}

// Function to insert a new score into the scores collection
async function insertScore(answer) {
  try {
    const result = await scoreCollection.insertOne({ answer });
    return result;
  } catch (error) {
    console.error('Error inserting score:', error);
    throw error;
  }
}

// Function to retrieve scores from the scores collection
async function getScores() {
  try {
    const scores = await scoreCollection.find().toArray();
    return scores;
  } catch (error) {
    console.error('Error retrieving scores:', error);
    throw error;
  }
}

// Function to authenticate a user
// Function to authenticate a user
async function authenticateUser(email, password) {
  const user = await getUser(email);
  if (user && await bcrypt.compare(password, user.password)) {
    return user; // Return the user object upon successful authentication
  }
  return null; // Return null if authentication fails
}

module.exports = {
  insertUser,
  getUser,
  insertScore,
  getScores,
  authenticateUser,
  // ... (other functions)
};

