// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Define the make_album Function
function make_album(artist_name, album_titie, tracks) {
    var album = {
        artist: artist_name,
        title: album_titie,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three Function and creating 3 variables with different values
var album1 = make_album("Asim", "Album title 1");
var album2 = make_album("Kaifi", "Album title 2");
// Calling a make_album function with third parameter
var album3 = make_album("Nabeel", "Album title 3", 10);
// Printing the Variables..
console.log(album1);
console.log(album2);
console.log(album3);
