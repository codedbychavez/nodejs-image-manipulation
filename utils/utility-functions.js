var path = require("path");

const getFileName = (filePath) => {
  return path.basename(filePath);
}

const getFileData = (filePath) => {
  return "someFileData"
}

module.exports = { getFileName, getFileData };


