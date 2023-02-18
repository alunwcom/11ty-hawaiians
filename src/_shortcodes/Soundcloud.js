/*
Spotify shortcode - supply track or album link as parameter.
e.g.
Album https://open.spotify.com/album/2PFiRhgXTfEGSeMDJsWFPK
Track https://open.spotify.com/track/03NQgRsoN7ZTj33KHnYmjo

https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F291756622&#038;show_artwork=true&#038;maxwidth=604&#038;maxheight=906

<div>
    <iframe width="400" height="300" scrolling="no" frameborder="no" 
    src=".Get 0">
    </iframe>
</div>

*/

module.exports = (link) => {
  return `<div>
    <iframe width="400" height="300" scrolling="no" frameborder="no" 
      src="${link}">
    </iframe>
</div>`;
 };
