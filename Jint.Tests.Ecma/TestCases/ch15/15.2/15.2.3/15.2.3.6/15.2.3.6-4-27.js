/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-27.js
 * @description Object.defineProperty - 'name' is an inherited accessor property (8.12.9 step 1)
 */


function testcase() {
        var proto = {};
        Object.defineProperty(proto, "property", {
            get: function () {
                return 11;
            },
            configurable: false
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var obj = new ConstructFun();

        Object.defineProperty(obj, "property", {
            get: function () {
                return 12;
            },
            configurable: true
        });
        return obj.hasOwnProperty("property") && obj.property === 12;
    }
runTestCase(testcase);
