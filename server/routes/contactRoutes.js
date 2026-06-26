import express from "express";
import {
  sendMessage,
  getMessages,
  markMessageRead,
  deleteMessage
} from "../controllers/contactController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(sendMessage).get(protect, getMessages);
router.route("/:id/read").put(protect, markMessageRead);
router.route("/:id").delete(protect, deleteMessage);

export default router;
