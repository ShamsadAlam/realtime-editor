import express from "express";
const router = express.Router();
import Document from "../models/document.models.js";

// Get a specific document (not directly used by the editor, but could be for other features)
router.get("/:id", async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json(document);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
