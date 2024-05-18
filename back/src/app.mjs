import express from 'express';
import cors from 'cors';
import economy from './requests/economy.json' assert { type: 'json' };
import technology from './requests/technology.json' assert { type: 'json' };
import world from './requests/world.json' assert { type: 'json' };

const GROUP_NEWS = {
  economy,
  technology,
  world
};

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api', function (req, res) {
  res.json({
    economy,
    technology,
    world
  });
});

app.get('/api/:subject', function (req, res) {
  const { subject } = req.params;
  res.json(GROUP_NEWS[subject]);
});

app.get('/api/:subject/:id', function (req, res) {
  const { subject, id } = req.params;
  const allNews = GROUP_NEWS[subject];
  const news = allNews.value.find(news => news.id === id);
  res.json(news);
});

app.listen(PORT, function () {
  console.log(`Server running on ${PORT} PORT`);
});
