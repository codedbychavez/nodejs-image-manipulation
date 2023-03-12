const sharp = require("sharp");
const { getFileName } = require("./utils/utility-functions");

function trimImage(imageFilePath) {
  const fileName = getFileName(imageFilePath);

  return sharp(imageFilePath)
    .trim({
      background: "white",
      threshold: 11,
    })
    .toFile(`output/trimmed_${fileName}`);
}

trimImage("input/image.jpg");
