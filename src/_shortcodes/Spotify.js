/*
Spotify shortcode - supply track or album link as parameter.
e.g.
Album https://open.spotify.com/album/2PFiRhgXTfEGSeMDJsWFPK
Track https://open.spotify.com/track/03NQgRsoN7ZTj33KHnYmjo


<div style="text-align: center;">
<iframe src="{{ .Get 0 }}" 
width="{{ .Get 1 }}" height="{{ .Get 2 }}" frameborder="0" allowtransparency="true"></iframe>
</div>

*/
