const fs = require('fs').promises;
const addFile =async (req, res) => {
    try {
        const {name,data} =req.body;
        const resp =await fs.writeFile(name, data);
            console.log("Data written successfully");

    }
    catch (err) {
        console.error(err);
    }
}

const readFile2 = async (req, res) => {
    try
    { 
        const {path} =req.body;
        const resp =await fs.readFile(path);
        res.send(resp);
        console.log("Data read successfully");

    }
    catch (err) {
        console.log(err);

    }
}

const writeFile2 = async (req, res) => {
    try
    { 
    const {source, dest} =req.body;
    const file =await fs.rename(source,dest);
    res.send(file);
    console.log("File written into another file successfully");
    }
    catch (err) {
        console.log(err);
    }

}

module.exports ={addFile,readFile2,writeFile2};
