const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.controller");

// Routes
router.post("/addMany", reviewController.CreateManyReviews);
router.get("/", reviewController.getAllReviews);
router.get("/:id", reviewController.getReviewById);
router.post("/", reviewController.createReview);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
