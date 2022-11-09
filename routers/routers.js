const router = require("express").Router();
const server = require("../server");
const FileController = require("../controller/fileController");

const multer = require("multer");
var multer1 = multer();

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./file");
    console.log(file);
  },
  fileName: function (request, file, callback) {
    console.log(file);
    callback(null, file.fieldName + "_" + path.extname(file.originalName));
  },
});
const uploadFile = multer({ storage: storage });

router.post("/readFileContent", multer1.any(), FileController.readFile2);
router.post('/readFileContent1',uploadFile.single('path'),FileController.readFile3);
router.post("/writeIntoAnotherFile", multer1.any(), FileController.writeFile2);
router.post("/addFile", multer1.none(), FileController.addFile);

module.exports = router;
