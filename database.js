const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('quizdb');
const scoreCollection = db.collection('scores');

// Connect to MongoDB and test the connection
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

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

module.exports = {
  insertScore,
  getScores,
};

