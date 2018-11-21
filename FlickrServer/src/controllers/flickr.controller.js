/**
 * Flickr Controller to process the received request
 */
const axios = require("axios");
const flickrModel = require("./../models/flickr.model");

// configuring api url
const flickrApi =
  "https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&nojsoncallback=1";
const flickrTagApi =
  "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&nojsoncallback=1";

// controller implementation
module.exports = {
  index: async (req, res, next) => {
    const images = await axios.get(`${flickrApi}`);
    res.status(200).json(images.data.items);
  },

  getFlickrImage: async (req, res, next) => {
    var url = flickrApi + "&tags=" + req.params.name;
    console.log(url);
    axios.get(`${url}`).then(images => {
        // console.log(images.data.items[0]);
        res.status(200).json(images.data);
    })
    .catch((error)=>{
        res.status(500).send(error);
    });    
  }
};
