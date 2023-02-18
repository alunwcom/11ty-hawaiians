module.exports = (link) => {
  return `<script async defer crossorigin="anonymous" 
    src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0&appId=212609356850412&autoLogAppEvents=1" nonce="VNViaxfa"></script>
  <div class="fb-video" 
    data-href="${link}" 
    data-width="auto" 
    data-show-text="false">
  </div>`;
};
