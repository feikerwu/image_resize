const sharp = require('sharp');
const fs = require('fs');

// 读取输入图片路径
const inputImagePath = 'watermark.png';
// 设定输出图片路径
const outputImagePath = 'watermark_resized.png';
// 设置新高度
const newHeight = 150;

sharp(inputImagePath)
  .resize({ height: newHeight })
  .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error('Error resizing image:', err);
    } else {
      console.log('Image resized successfully:', info);
    }
  });
