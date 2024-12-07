const express = require("express");
const bookController = require("../controllers/bookContoller");

const router = express.Router();

router.get("/allBooks", bookController.allWishlist);
router.post("/addToWishlist", bookController.addToWishlist);
router.delete("/removeFromWishlist", bookController.removeFromWishlist);

module.exports = router;
