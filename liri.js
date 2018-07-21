require("dotenv").config(); 

var fs = require("fs");
var request = require("request");
var keys = require("./keys.js"); 
//var keyTest = keys.twitter.access_token_key;
//console.log(keyTest);
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//console.log(spotify);
var arg1 = process.argv[2];
var arg2 = process.argv[3];
   
  var params = {screen_name: 'JaneDoe90797006',
  exclude_replies: 'true',
  count: 20

};
//DO NOT TOUCH
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(error) {
        console.log(error);
    }
    else if (!error && arg1 === "my-tweets") {
        for(var i = 0; i <= 19; i++) {
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
        }
    }
  });
//END OF DO NOT TOUCH FUNCTION, YOU ARE NOW FREE TO EDIT

  spotify.search({ type: 'track', query: arg2 }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    else if(!err && arg1 === "spotify-this-song" && arg2) {
        console.log(data.tracks);
    }
  });

  function displayTheSign() {
    spotify.search({ type: 'track', query: "the-sign", limit: 3}, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        else {
            console.log("I can't believe you didn't enter a name you idiot.");
            
        }
});
  };
//var twitterAPIKey = keys.twitter.access_token_key;
//var twitterConsumerSecret = keys.twitter.consumer_secret;
//

/*fs.readFile('./keys.js', 'utf8', function(error, data) {
if(error) {
    console.log(error);
} 
else {
    console.log(data);
}
});*/

/*
function Twitter() {

}

function displayTweets() {
    //var twitterURL = "https://api.twitter.com/1.1/statuses/home_timeline.json?screen_name=JaneDoe90797006&count=1";
    var twitterURLTest = "https://api.twitter.com/1.1/statuses/home_timeline.json";
    console.log(twitterURLTest);
};
displayTweets();

/*if(arg1 === "my-tweets") {
    console.log("U got the tweets");
} 
else {
    console.log("try again plz");
}*/
