const express = require("express");
const router = express.Router();

const userModel = require("../../models/User");

//--------------------------------------    USERS   --------------------------------------
// Delete user
router.post("/deleteuser", (req, res) => {
  const email = req.body.email;
  userModel.findOneAndUpdate(
    { email: email, is_deleted: false },
    { is_deleted: true },
    (err, doc) => {
      if (err) {
        return res.status(400).json({
          error: true,
          message: err.message,
        });
      } else {
        // return res.status(200).json({
        //     error: false,
        //     message: 'Soft delete successful!'
        // })
        reviewModel.updateMany(
          { author: doc._id },
          { is_deleted: true },
          (err, reviews) => {
            if (err) {
              return res.status(400).json({
                error: true,
                message: err.message,
              });
            } else {
              return res.status(200).json({
                error: false,
                message: "Soft delete successful!",
              });
            }
          }
        );
      }
    }
  );
});

// Edit user points
router.post("/editpoints", (req, res) => {
  const email = req.body.email;
  const rewardPoints = req.body.rewardPoints;
  userModel.findOneAndUpdate(
    { email: email, is_deleted: false },
    { rewardPoints: rewardPoints },
    (err, doc) => {
      if (err) {
        return res.status(400).json({
          error: true,
          message: err.message,
        });
      } else {
        return res.status(200).json({
          error: false,
          message: "User Reward Points Updated",
        });
      }
    }
  );
});

// Restore user
router.post("/restoreuser", (req, res) => {
  const email = req.body.email;
  userModel.findOneAndUpdate(
    { email: email, is_deleted: true },
    { is_deleted: false },
    (err, doc) => {
      if (err) {
        return res.status(400).json({
          error: true,
          message: err.message,
        });
      } else {
        return res.status(200).json({
          error: false,
          message: "User restoration successful!",
        });
      }
    }
  );
});

// Get all users
router.get("/usersall", (req, res) => {
  userModel.find({ is_deleted: false }, (err, docs) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: err.message,
      });
    } else if (docs.length == 0) {
      return res.status(200).json({
        error: false,
        message: "No users found!",
      });
    } else {
      return res.status(200).json({
        error: false,
        message: "Found registered users!",
        data: docs,
      });
    }
  });
});

// Get deleted users
router.get("/getdeletedusers", (req, res) => {
  userModel.find({ is_deleted: true }, (err, docs) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err.message,
      });
    } else {
      res.status(200).json({
        error: false,
        message: "Found deleted users!",
        data: docs,
      });
    }
  });
});


module.exports = router;
