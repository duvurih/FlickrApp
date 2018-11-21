/**
 * Flick Router to configure the all related routs of flickr api
 */
const router = require("express-promise-router")();

const { index, getFlickrImage } = require("./../controllers/flickr.controller");

router.get("/", index);
router.get("/:name", getFlickrImage);

module.exports = router;
