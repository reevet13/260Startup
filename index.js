const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/scores', async (_req, res) => {
  try {
    const scores = await DB.getScores();
    res.send(scores);
  } catch (error) {
    console.error('Error fetching scores:', error);
    res.status(500).send('Internal Server Error');
  }
});

apiRouter.post('/score', async (req, res) => {
  const { answer } = req.body;

  console.log('Received Answer:', answer);

  try {
    await DB.insertScore(answer);
    const scores = await DB.getScores();
    res.send(scores);
  } catch (error) {
    console.error('Error inserting score:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


