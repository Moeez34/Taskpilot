const Jimp = require('jimp');

Jimp.read('src/assets/logo.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      // Find pixels that are white or very close to white
      var red   = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue  = this.bitmap.data[idx + 2];

      // Tolerance for white
      if (red > 230 && green > 230 && blue > 230) {
        this.bitmap.data[idx + 3] = 0; // set alpha to 0
      }
    });
    
    image.write('src/assets/logo-transparent.png');
    console.log('Background removed!');
  })
  .catch(err => {
    console.error(err);
  });
