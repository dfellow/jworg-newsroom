var Feed = require('rss-to-json');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();

app.get('/jworg-newsroom.json', (req, res) => 
Feed.load('https://www.jw.org/en/news/jw/rss/NewsSubsectionRSSFeed/feed.xml', function(err, rss){
	//res.setHeader('Content-Type', 'application/json');
    res.type('json');
	res.send(rss);
}));

app.get('/jworg-whatsnew.json', (req, res) => 
Feed.load('https://www.jw.org/en/whats-new/rss/WhatsNewWebArticles/feed.xml', function(err, rss){
	//res.setHeader('Content-Type', 'application/json');
    res.type('json');
	res.send(rss);
}));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on port ${port}!`))