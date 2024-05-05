function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        titile: album_title
    };
    if (tracks == undefined)
        album.tracks = tracks;
    return album;
}
var album1 = make_album("hamza", "album title 1");
console.log(album1);
