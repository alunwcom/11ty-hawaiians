const { Liquid } = require('liquidjs');
/*

Main page image shortcode - supply parameters:
1. image location
2. width
3. href (opt)
4. alt text (opt)

*/
module.exports = (src, width, link, alt) => {
  let href = '';
  if (link) {
    href = ` href="${link}" target="_blank" rel="noopener noreferrer"`;
  }
  const engine = new Liquid();
  const template = engine.parse(`
<div class="wp-block-image">
  <figure>
    <a${href}>
      <img loading="lazy" src="${src}" alt="${alt}" class="wp-image-457" width="${width}">
    </a>
  </figure>
</div>
`);
  return engine.render(template, { src, width, href, alt });
};
