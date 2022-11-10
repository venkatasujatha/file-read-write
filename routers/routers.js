const router = require("express").Router();
const server = require("../server");
const FileController = require("../controller/fileController");

const multer = require("multer");
var multer1 = multer();

// var storage = multer.diskStorage({
//   destination: function (request, file, callback) {
//     callback(null, "./file");
//     console.log(file);
//   },
//   fileName: function (request, file, callback) {
//     console.log(file);
//     callback(null,file.originalname);
//   },
// });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./file");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
})
const uploadFile = multer({ storage: storage });

router.post("/readFileContent", multer1.any(), FileController.readFile2);
//router.post("/readFileContent1",uploadFile.single("path"),FileController.readFile3);
router.post("/writeIntoAnotherFile", multer1.any(), FileController.writeFile2);
router.post("/addFile", multer1.none(), FileController.addFile);
router.post('/readFileContent1',uploadFile.array('path'),FileController.readFile3);
//router.post('/readFileContent2',uploadFile.array(`${files}`),FileController.readFile4);
// router.post('/readMultiple',uploadFile.fields([
//     {
//         name:'path',
//         maxCount:2
//     },
//     {
//         name: 'name', maxCount:1
//     },
//     {
//         name: 'experience', maxCount:1
//     }
// ]),FileController.readFile3),
module.exports = router;
