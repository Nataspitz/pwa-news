import { Application } from "express"
import economy from "./src/requests/economy.json"
import technology from "./src/requests/technology.json"
import world from "./src/requests/world.json"
import express from "express"
import cors from "cors"


const news = {
    economy,
    technology,
    world
}

const app: Application = express()

const PORT: number = 3000

app.use(express.json())
app.use(cors())

app.get("/api/", (req, res) => {
    res.json({
        economy,
        technology,
        world
    })
})

app.get('/api/:subject', function (req, res) {
    const { subject } = req.params
    res.json(news[subject])
})

app.get('/api/:subject/:id', function (req, res) {
    const { subject, id } = req.params
    const allNews = news[subject]
    const news = allNews.value.find(news => news.id === id)
    res.json(news)
})

app.listen(PORT, function () {
    console.log(`Server running on ${PORT} PORT`)
  })