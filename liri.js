require("dotenv").config(); 

var fs = require("fs");
var request = require("request");
var keys = require("./keys.js"); 
//var keyTest = keys.twitter.access_token_key;
//console.log(keyTest);
//GLOBAL VARIABLES
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//console.log(spotify);
var arg1 = process.argv[2];
var arg2 = process.argv[3];
for(var i = 4; i < process.argv.length; i++) {
    var arg2 = arg2 + " " + process.argv[i];
    console.log(arg2);
}


   
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
        for(var i = 0; i < 20; i++) {
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
        }
    }
  });
//END OF DO NOT TOUCH FUNCTION, YOU ARE NOW FREE TO EDIT

  function displaySpotify() {
    spotify.search({ type: 'track', query: arg2, limit: 1 }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    else {
        //changeQuery();
        console.log("Artists: " + data.tracks.items[0].artists[0].name);
        console.log("Song name: " + data.tracks.items[0].name);
        console.log("Preview: " + data.tracks.items[0].preview_url);
        console.log("Album name: " + data.tracks.items[0].album.name); 
        
    }
  })
};

  function displayTheSign() {
    spotify.search({ type: 'track', query: "the-sign", limit: 3}, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        else {
            console.log("Artists: " + data.tracks.items[2].artists[0].name);
            console.log("Song name: " + data.tracks.items[2].name);
            console.log("Preview: " + data.tracks.items[2].preview_url);
            console.log("Album name: " + data.tracks.items[2].album.name);   
        }
});
  };
function changeQuery() {
    arg2.replace(/\s+/g, '-').toLowerCase();
};
function displayOmdb() {
var omdbURL = 'http://www.omdbapi.com/?apikey=trilogy&t=' + arg2; 
console.log(omdbURL);
request(omdbURL, function (error, response, body) {
    if(error) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
    }
    else {
        var omdbData =JSON.parse(body);
        console.log("Title: " + omdbData.Title);
        console.log("Year: " + omdbData.Year);
        console.log(omdbData.imdbRating);
        console.log("Rotton Tomatoes Score: " + omdbData.Ratings[1].Value);
        console.log("Country: " + omdbData.Country);
        console.log("Language: " + omdbData.Language);
        console.log("Plot: " + omdbData.Plot);
        console.log("Actors: " + omdbData.Actors);
    }  
});

};
function displayMrNobody() {
    var fillerUrl = 'http://www.omdbapi.com/?apikey=trilogy&t=mr-nobody';
    request(fillerUrl, function (error, response, body) {
        if(error) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
        }
        else {
            var omdbData =JSON.parse(body);
            console.log("Title: " + omdbData.Title);
            console.log("Year: " + omdbData.Year);
            console.log(omdbData.imdbRating);
            console.log("Rotton Tomatoes Score: " + omdbData.Ratings[1].Value);
            console.log("Country: " + omdbData.Country);
            console.log("Language: " + omdbData.Language);
            console.log("Plot: " + omdbData.Plot);
            console.log("Actors: " + omdbData.Actors);
            }  
        });
    };

    function doIt() {
        var random = require("./random.txt");
        fs.readFile("/random.txt", "utf8", callback);
        
        
    };



//***IF/ELSE STATEMENTS***
if(arg1 === "spotify-this-song" && arg2) {
    displaySpotify();
} 
else if(arg1 === "spotify-this-song" && !arg2) {
    displayTheSign();
}

else if(arg1 === "movie-this" && arg2) {
    displayOmdb();
}
else if(arg1 === "movie-this" && !arg2) {
    displayMrNobody();
}
else if(arg1 === "do-what-it-says") {
    doIt();
} 

//This was a test to make sure files were connected

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

