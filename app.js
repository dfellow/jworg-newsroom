var Feed = require('rss-to-json');
const express = require('express')
const app = express()
const port = 8080

app.get('/jworg-newsroom.json', (req, res) => 
Feed.load('https://www.jw.org/en/news/jw/rss/NewsSubsectionRSSFeed/feed.xml', function(err, rss){
	res.setHeader('Content-Type', 'application/json');
    res.send(rss);
}));

//res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on port ${port}!`))