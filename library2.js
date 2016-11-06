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
                      tracks: ["t03", "t01"]
                    }
             },

  printAllPlaylists: function(){
  var playlist = this['playlists'];
  var list = [];
  playlistTitle = Object.keys(playlist);
    playlistTitle.forEach(function(title){
      var titleName = playlist[title]['name'];
      var trackLength = Object.keys(playlist[title]['tracks']);
      list.push(title + ": " + titleName + " - " + trackLength.length + " tracks");
    })
  return list;
  },

  printAllTracks: function(){
  var tracks = this['tracks']
  var list = [];
  var track = Object.keys(tracks);
    track.forEach(function(allTracks){
      var trackName = tracks[allTracks]['name'];
      var trackArtist = tracks[allTracks]['artist'];
      var trackAlbum = tracks[allTracks]['album'];
      list.push(allTracks + ": " + trackName + "by " + trackArtist + " (" + trackAlbum + ")");
    })
  return list;
  },

  printPlaylist: function (playlistId){
  var library = this;
  var playlist = this['playlists'][playlistId];
  var playlistName = this['playlists'][playlistId]['name'];
  var playlistTrack = this['playlists'][playlistId]['tracks'];

  var fullPlaylist = [playlistId + ": " + playlistName + " - " + playlistTrack.length + " tracks"];

  playlistTrack.forEach(function(trackTitle){
    var trackName = library['tracks'][trackTitle]['name'];
    var trackArtist = library['tracks'][trackTitle]['artist'];
    var trackAlbum = library['tracks'][trackTitle]['album'];

    fullPlaylist.push(trackTitle + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
  })
  return fullPlaylist;
  },

  addTrackToPlaylist: function (trackId, playlistId){
  if (!this['playlists'][playlistId]){
    return playlistId + " does not exist in this library."
  }
  console.log("Added " + trackId + " to " + playlistId + ".")
  return this['playlists'][playlistId]['tracks'].push(trackId);
  },

  uid: function(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album){
  var newTrack = {};
  var newTrackList = {};
  newTrackList['id'] = this.uid();
  newTrackList['name'] = name;
  newTrackList['artist'] = artist;
  newTrackList['album'] = album;
  var trackList = Object.keys(this['tracks']);
  var newTrackName;
  if (trackList.length < 10){
    newTrackName = "t0" + (trackList.length + 1);
  } else {
    newTrackName = "t" + (trackList.length + 1);
  }
  return this['tracks'][newTrackName] = newTrackList;
  },

  addPlaylist: function (name){
  var newPlaylistContent = {};
  newPlaylistContent['id'] = this.uid();
  newPlaylistContent['name'] = ''
  newPlaylistContent['tracks'] = [];
  // var playlist = Object.keys(library['playlists']);
  // var newPlaylistName;
  // if (playlist.length < 10){
  //   newPlaylistName = "p0" + (playlist.length + 1)
  // } else {
  //   newPlaylistName = "p" + (playlist.length + 1)
  // }
  return this['playlists'][name] = newPlaylistContent;
  }

}

// SELF TESTING

// console.log(library.printAllPlaylists())
// console.log(library.printAllTracks())
// console.log(library.printPlaylist('p02'))
// console.log(library.addTrackToPlaylist("t04", "p01"))
// library.addTrack("name04", "artist04", "album04")
// console.log(library)
// library.addPlaylist("p03")
// console.log(library)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}