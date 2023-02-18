module.exports = (id, link, linkText) => {
  return `<iframe style="border: 0; width: 100%; height: 120px;" 
    src="https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/" seamless>
    <a href="${link}">${linkText}</a>
  </iframe>`;
};
