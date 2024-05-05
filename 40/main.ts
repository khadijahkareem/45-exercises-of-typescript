function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string,titile: string, tracks?: number} = {
        artist:artist_name,
        titile: album_title
};
if (tracks ! == undefined)
    album.tracks = tracks;

    return album;

}

let album1 = make_album("hamza", "album title 1");

console.log(album1);
