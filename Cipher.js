var crypto = require('crypto');
var assert = require('assert');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('GVUQSRFFLUBDSPJMWGVFIPIQQCSPBSAJGQIMOISKNRNUVZPCREAHFRJXJOLVGXQSPNSD9VKGWHVMNCWZH', 'utf8', 'hex')
mystr += mykey.final('hex');

console.log(mystr); //2559bba4797d70ac3d472f99bdd63dac0ec48cfb3e24d5cb1845187280ed942d37d409e90626c0a62e63eaeece3b8ec29a6a5f1c5de0ae45521adfc485fa36bca48755a947b635f7f32f74b2d8f17b173bb1ebede97bbc08ffe60eb67cf90d56

var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('2559bba4797d70ac3d472f99bdd63dac0ec48cfb3e24d5cb1845187280ed942d37d409e90626c0a62e63eaeece3b8ec29a6a5f1c5de0ae45521adfc485fa36bca48755a947b635f7f32f74b2d8f17b173bb1ebede97bbc08ffe60eb67cf90d56', 'hex', 'utf8')
mystr += mykey.final('utf8');

assert.equal(mystr, 'GVUQSRFFLUBDSPJMWGVFIPIQQCSPBSAJGQIMOISKNRNUVZPCREAHFRJXJOLVGXQSPNSD9VKGWHVMNCWZH');


// const ciphers = crypto.getCiphers();
// console.log(ciphers); // ['aes-128-cbc', 'aes-128-ccm', ...]