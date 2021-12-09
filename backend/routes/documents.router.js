const express = require("express");
const router = express.Router();
const ctrlDocuments = require("../controllers/documents.controllers");

// When a request hits to /document/, controller will respond with its function correspondent

router.get("/", ctrlDocuments.readDocument);
router.get("/:name", ctrlDocuments.readDocumentByName);
router.post("/", ctrlDocuments.generateDocument);
router.delete("/:name", ctrlDocuments.deleteDocument);
router.put("/:name", ctrlDocuments.updateDocument);

module.exports = router;