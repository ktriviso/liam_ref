
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var path = require('path')
// fixes the cross origin err
var cors = require('cors')
var port = process.env || 3000
var Twit = require('twit')
var config = require('./config.js')
var Twitter = new Twit(config)

var params = {
	screen_name: '@realDonaldTrump',
	count: 20,
	extended: true
}

app.use(bodyParser.json())
app.use(cors())

// still use static assets while rendering server side
app.use('/static', express.static(path.join(__dirname, 'public')))

// home route
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

var trumps_tweets = [];
var Trump_tweet_object = {}
app.get('/get-trumps-tweets', function(req, res) {
	Twitter.get('statuses/user_timeline', params, function(err, data, response){
			if (err) throw err
		}).then(response => {
			response.data.forEach(function(tweet) {
				let the_tweet = {}
				the_tweet.content = tweet.text
				trumps_tweets.push(the_tweet)
			})
			console.log(trumps_tweets);
			Trump_tweet_object.tweet_1 = trumps_tweets[0];
			Trump_tweet_object.tweet_2 = trumps_tweets[1];
			Trump_tweet_object.tweet_3 = trumps_tweets[2];
			Trump_tweet_object.tweet_4 = trumps_tweets[3];
			Trump_tweet_object.tweet_5 = trumps_tweets[4];
			Trump_tweet_object.tweet_6 = trumps_tweets[5];
			Trump_tweet_object.tweet_7 = trumps_tweets[6];
			Trump_tweet_object.tweet_8 = trumps_tweets[7];
			Trump_tweet_object.tweet_9 = trumps_tweets[8];
			Trump_tweet_object.tweet_10 = trumps_tweets[9];
			Trump_tweet_object.tweet_11 = trumps_tweets[10];
			Trump_tweet_object.tweet_12 = trumps_tweets[11];
			Trump_tweet_object.tweet_13 = trumps_tweets[12];
			Trump_tweet_object.tweet_14 = trumps_tweets[13];
			Trump_tweet_object.tweet_15 = trumps_tweets[14];
			Trump_tweet_object.tweet_16 = trumps_tweets[15];
			Trump_tweet_object.tweet_17 = trumps_tweets[16];
			Trump_tweet_object.tweet_18 = trumps_tweets[17];
			Trump_tweet_object.tweet_19 = trumps_tweets[18];
			Trump_tweet_object.tweet_20 = trumps_tweets[19];

			// Response is sent ending the function
			res.send(Trump_tweet_object);
		});
});

app.listen(3000, function(){
	console.log('Im up and running on: ' + 3000)

})
