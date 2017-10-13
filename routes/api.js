let express = require("express");
let router = express.Router();

// Router
const product = require("./api/v1/product");
const category = require("./api/v1/category");

/**
 * Product Router
 */
router.use("/v1", product);

/**
 * Category Router
 */
router.use("/v1", category);

module.exports = router;
