// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * RegularExpressionFirstChar :: LineTerminator is incorrect
 *
 * @path ch07/7.8/7.8.5/S7.8.5_A1.3_T5.js
 * @description Line separator, with eval
 */

//CHECK#1
try {
   eval("/\u2028/").source;
   $ERROR('#1.1: RegularExpressionFirstChar :: Line separator is incorrect. Actual: ' + (eval("/\u2028/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionFirstChar :: Line separator is incorrect. Actual: ' + (e));
  }
}     

