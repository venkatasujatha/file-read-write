const router = require('express').Router();
const FileController = require('../controller/fileController')
router.post('/addFileContent',FileController.addFile);
router.post('/readFileContent',FileController.readFile2);
router.post('/writeIntoAnotherFile',FileController.writeFile2);
module.exports = router;