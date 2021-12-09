// Call the services to make the process
const documentHandler = require("../services/documents/documentHandler");

// This function does take the raw request

const readDocument = async (req, res, next) => {
  const response = await documentHandler.readDocument();
  res.send(response)
};
const readDocumentByName = async (req, res, next) => {
  const {name} = req.params;
  const response = await documentHandler.readDocumentByName(name);
  res.send(response)
};

const generateDocument = async (req, res, next) => {
  const {name} = req.body;
  const {content} = req.body;
  const response = await documentHandler.generateDocument(name,content);
  res.send(response)
};
const deleteDocument = async (req, res, next) => {
  const {name} = req.params;
  const response = await documentHandler.deleteDocument(name);
  res.send(response)
};
const updateDocument = async (req, res, next) => {
  const {name} = req.params;
  const {content}= req.body;
  const response = await documentHandler.updateDocument(name,content);
  res.send(response)
};


module.exports = { readDocument,readDocumentByName,generateDocument,deleteDocument,updateDocument};