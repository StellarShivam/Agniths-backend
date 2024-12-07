const Book = require("../models/book");
const User = require("../models/userModel");

exports.allWishlist = async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await User.findById(userId).populate("myWishlist");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.myWishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToWishlist = async (req, res) => {
  const { userId } = req.user;
  try {
    const { bookId } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the book is already in the wishlist
    if (user.myWishlist.includes(bookId)) {
      return res.status(400).json({ message: "Book already in the wishlist" });
    }

    // Add the book to the wishlist
    user.myWishlist.push(bookId);
    await user.save();

    res.status(200).json({ message: "Book added to the wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { userId } = req.user;
  try {
    const { bookId } = req.body;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the book is in the wishlist
    const index = user.myWishlist.indexOf(bookId);
    if (index === -1) {
      return res
        .status(400)
        .json({ message: "Book not found in the wishlist" });
    }

    // Remove the book from the wishlist
    user.myWishlist.splice(index, 1);
    await user.save();

    res.status(200).json({ message: "Book removed from the wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
