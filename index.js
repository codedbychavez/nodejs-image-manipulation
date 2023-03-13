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

  /* 
    1. Check if the image has white around the edges
        - NOTES to myself:
        + I think sharp uses the top-left pixel of the image as default if we don't pass a color to the background property
          + If the above approximation is not white, do not extend.
          + If it is white/ close to white, let'e extend the image.

          Further steps, DO after above steps are completed.
          1. Before extending, determine the size of the image.
          2. Based on the size of the image, determine the padding percentage to apply to the image.
              - Gregg has an idea for this, check trello ticket comments

  */
  return sharp(imageFilePath)
    .trim({
      background: "white",
      threshold: 3,
    })
    .extend({
      top: 40,
      right: 40,
      bottom: 40,
      left: 40,
      background: 'white'
    })
    .toFile(`./output/trimmed_${fileName}`);
}

IMAGE_LIST.map((path)=> {
  trimImage(`input/${path}`);
})
