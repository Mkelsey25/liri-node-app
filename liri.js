//Require files and set global variables
require("dotenv").config(); 
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js"); 
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//arg2 variable set to equal process.argv[3]-process.argv.legth
// Allows for multiple word input with spacing

var arg1 = process.argv[2];
var arg2 = process.argv[3];
for(var i = 4; i < process.argv.length; i++) {
    var arg2 = arg2 + " " + process.argv[i];

}


   
  var params = {screen_name: 'JaneDoe90797006',
  exclude_replies: 'true',
  count: 20

};

//Twitter if/else statements and function 
//Displays my 20 most recent tweets
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(error) {
        console.log(error);
    }
    else if (!error && arg1 === "my-tweets") {
        for(var i = 0; i < 20; i++) {
            console.log("My tweet: " + tweets[i].text);
            console.log("Created at: " + tweets[i].created_at);
            console.log("------------------------------------------------------------")
        }
    }
  });

// Displays artist and song info to the console
  function displaySpotify() {
    spotify.search({ type: 'track', query: arg2, limit: 1 }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    else {
        console.log("Artists: " + data.tracks.items[0].artists[0].name);
        console.log("Song name: " + data.tracks.items[0].name);
        console.log("Preview: " + data.tracks.items[0].preview_url);
        console.log("Album name: " + data.tracks.items[0].album.name); 
        
    }
  })
};
//Displays filler info to the console
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
//Displays movie and actor info to the console
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
//Displays filler info to the console
};
function displayMrNobody() {
    var fillerUrl = 'http://www.omdbapi.com/?apikey=trilogy&t=mr-nobody';
    request(fillerUrl, function (error, response, body) {
        if(error) {
            //will give error and status code message
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
//Reads random.txt file, splits into an array, variables are assigned, spotify function runs
function doIt() {
    fs.readFile("random.txt", "utf8", function(error, data) { 
        if (error) {
          return console.log(error);
        }
        // split and create array      
        var dataArray = data.split(",");
        arg1 = dataArray[0].trim();
        arg2 = dataArray[1].trim();
        //console.log(arg1, arg2);
        displaySpotify();
      });
    };

//***IF/ELSE STATEMENTS***
//Gives back info based on input type and amount
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

