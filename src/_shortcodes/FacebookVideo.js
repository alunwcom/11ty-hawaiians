module.exports = (link) => {
  return `<div id="fb-root"></div>
  <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
  <div class="fb-video" 
    data-href="${link}" 
    data-width="auto" 
    data-show-text="false">
  </div>`;
};
