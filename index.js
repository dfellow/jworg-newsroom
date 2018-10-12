var Feed = require('rss-to-json');

Feed.load('https://www.jw.org/en/news/jw/rss/NewsSubsectionRSSFeed/feed.xml', function(err, rss){
    console.log(rss);
});