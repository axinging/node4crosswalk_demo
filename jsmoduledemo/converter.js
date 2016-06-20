/*
From http://www.hacksparrow.com/how-to-write-node-js-modules.html
*/
'use strict';
exports.bin = function(input) {
    return input.toString(2);
};

exports.hex = function(input) {
    return input.toString(16);
};
