const dataFolder = "./Data";
const fs = require("fs");
//GET
const readDocument = async () => {
  var files = fs.readdirSync(dataFolder);
  console.log(files);
  return files;
};

const readDocumentByName = async (name) => {
  var content = fs.readFileSync(`${dataFolder}/${name}`, "utf-8");
  console.log(`name: ${name} content: ${content}`);
  return { name, content };
};

const generateDocument = async (name,content) => {
 fs.writeFileSync(`${dataFolder}/${name}`,content);
 console.log(`name: ${name} content: ${content}`) 
 return {name, content };
};

const deleteDocument = async (name) => {
  fs.unlinkSync(`${dataFolder}/${name}`);
  console.log(`${name} was delete`)
};

const updateDocument = async (name, content) => {
  
  fs.writeFileSync(`${dataFolder}/${name}`, content);
  return { content };
};

module.exports = {
  readDocument,readDocumentByName,deleteDocument,generateDocument,updateDocument,
};
