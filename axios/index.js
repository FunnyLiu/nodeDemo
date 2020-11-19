const axios = require('axios');

const util = require('util');

(async () => {
  let imageUrl =
    'https://wxservice.study.youdao.com/utils/image/oimageb7_-2240522488452407340.jpg';
  const { data: imgStram } = await axios.get(imageUrl, {
    responseType: 'stream'
  });
  console.log(imgStram);
  const form = {
    media: imgStram
  }
  console.log(`media upload form:${util.inspect(form)}`);
})();
