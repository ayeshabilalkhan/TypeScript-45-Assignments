"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let whitespaceName = "\n\t Ayesha Bilal \n\t";
console.log(whitespaceName);
let withoutWhitespaceName = whitespaceName.trim();
console.log(withoutWhitespaceName);
