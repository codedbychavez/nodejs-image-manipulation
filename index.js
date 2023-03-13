const sharp = require("sharp");
const { getFileName } = require("./utils/utility-functions");

const IMAGE_LIST = [
  'image-1.jpg',
  'image-2.jpg',
  'image-3.jpg',
  'image-4.webp',
  'image-5.jpg',
  'image-6.webp',
  'image-7.jpg',
  'image-8.jpg',
  'image-9.jpg',
  'image-10.jpg',
  'image-11.jpg',
  'image-12.gif',
]

function trimImage(imageFilePath) {
  const fileName = getFileName(imageFilePath);
  
  return sharp(imageFilePath)
    .trim({
      background: "white",
      threshold: 11,
    })
    .toFile(`./output/trimmed_${fileName}`);
}

IMAGE_LIST.map((path)=> {
  trimImage(`input/${path}`);
})
