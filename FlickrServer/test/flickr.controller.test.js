/**
 * Writing a unit test for flickr service
 */
const assert = require('assert');
const except = require("chai").except;
const should = require('chai').should();

const { index, getFlickrImage } = require("../src/controllers/flickr.controller");

// Call all public available images
describe("index()", () => {
  it("return images", () => {
    index().then((data)=>{
      assert.equal(data,10);
    });
  });
});

// Call all public available images
// describe("getFlickrImage()", () => {
//     it("return images", () => {
//       const tagName = "flowers";
//       getFlickrImage(tagName).then(()=>{
//         assert.equal(data, 10);
//       });
//     });
//   });
