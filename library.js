var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

//********DONE PRINTING PLAYLIST*******
var printAllPlaylists = function (playlist) {
  var list = [];
  var playlistTitle = Object.keys(playlist['playlists']);
  playlistTitle.forEach(function(title){
    var titleName = playlist['playlists'][title]['name'];
    var trackLength = Object.keys(playlist['playlists'][title]['tracks']);
    list.push(title + ": " + titleName + " - " + trackLength.length + " tracks");
  })
  return list;
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//**********DONE PRINTING TRACKS*********
var printAllTracks = function (tracks) {
  var list = [];
  var track = Object.keys(tracks['tracks']);
    track.forEach(function(allTracks){
      var trackName = tracks['tracks'][allTracks]['name'];
      var trackArtist = tracks['tracks'][allTracks]['artist'];
      var trackAlbum = tracks['tracks'][allTracks]['album'];
      list.push(allTracks + ": " + trackName + "by " + trackArtist + " (" + trackAlbum + ")");
    })
  return list;
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

//************FINISHED PRINTING PLAYLIST**************
var printPlaylist = function (playlistId) {
  var playlist = library['playlists'][playlistId];
  var playlistName = library['playlists'][playlistId]['name'];
  var playlistTrack = library['playlists'][playlistId]['tracks'];

  var fullPlaylist = [playlistId + ": " + playlistName + " - " + playlistTrack.length + " tracks"];

  playlistTrack.forEach(function(trackTitle){
    var trackName = library['tracks'][trackTitle]['name'];
    var trackArtist = library['tracks'][trackTitle]['artist'];
    var trackAlbum = library['tracks'][trackTitle]['album'];

    fullPlaylist.push(trackTitle + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
  })
  return fullPlaylist;
}

// adds an existing track to an existing playlist

//**********FINISHED ADD A TRACK TO AN EXISTING PLAYLIST**********
var addTrackToPlaylist = function (trackId, playlistId) {
  console.log("Added " + trackId + " to " + playlistId)
  return library['playlists'][playlistId]['tracks'].push(trackId);
}

// addTrackToPlaylist("t04", "p02")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

//*******FINISHED ADDING A NEW TRACK TO THE LIBRARY**********
var addTrack = function (name, artist, album) {
  var newTrack = {};
  var newTrackList = {};
  newTrackList['id'] = uid();
  newTrackList['name'] = name;
  newTrackList['artist'] = artist;
  newTrackList['album'] = album;
  var trackList = Object.keys(library['tracks']);
  var newTrackName;
  if (trackList.length < 10){
    newTrackName = "t0" + (trackList.length + 1);
  } else {
    newTrackName = "t" + (trackList.length + 1);
  }
  return library['tracks'][newTrackName] = newTrackList;
}
// adds a playlist to the library

//*******FINISHED ADDING A NEW PLAYLIST TO THE LIBRARY********
var addPlaylist = function (name) {
  var newPlaylistContent = {};
  newPlaylistContent['id'] = uid();
  newPlaylistContent['name'] = ''
  newPlaylistContent['tracks'] = [];
  // var playlist = Object.keys(library['playlists']);
  // var newPlaylistName;
  // if (playlist.length < 10){
  //   newPlaylistName = "p0" + (playlist.length + 1)
  // } else {
  //   newPlaylistName = "p" + (playlist.length + 1)
  // }
  return library['playlists'][name] = newPlaylistContent;
}

// TESTS:

// console.log(printAllPlaylists(library))
// console.log(printAllTracks(library))
// console.log(printPlaylist('p02'))
// console.log(addTrackToPlaylist("t04", "p01"))
addTrack("name04", "artist04", "album04")
// console.log(library)
addPlaylist("p03")
console.log(library)


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}