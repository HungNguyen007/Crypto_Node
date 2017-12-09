var mnemonic = require('mnemonic')

/* This test is used for Bitcoin private key */
var prvKey = 'FBB1444AE7BD15127F8D27E8209C7A234756594878069C55F84975753127CD25'
var wlist = mnemonic.encode(prvKey) // => wlist
console.log(wlist)

var seed = mnemonic.decode(wlist) // => 'FBB1444AE7BD15127F8D27E8209C7A234756594878069C55F84975753127CD25'
console.log(seed)