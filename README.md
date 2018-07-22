# liri-node-app
Author: Morgan Hamlin 
Technologies used: Git bash, Javascript, node.js, fs, request, require, Twitter API, Spotify API, and OMDB API.

This application uses node.js to pull data without the use of a browser. The user is able to type specific commands and get information back. 

INSTRUCTIONS: 
- Download file to computer. 
- Open git bash 
- cd to liri-node-app folder
- Choose from the following commands: 

1. node liri.js my-tweets 

2. node liri.js spotify-this-song <enter song here>

3. node liri.js movie-this <enter movie title here>

4. node liri.js do-what-it-says

Command 1: returns Morgan Hamlin's 20 most recent tweets along with time stamps 
Command 2: returns spotify song and artist information (if no song entered, gives info on a song called "The Sign")
Command 3: returns movie and actor information (if no movie entered, gives info on a movie called "Mr. Nobody")
command 4: Reads the random.txt file, parses into an array, assigned variables, runs spotify function, returns with information based on The Backstreet Boys song "I want it that way".