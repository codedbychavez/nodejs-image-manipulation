const sharp = require('sharp');

sharp("images/image_to_trim.jpg").trim({
  background: "white",
  threshold: 11,
})
.toFile("output.png");