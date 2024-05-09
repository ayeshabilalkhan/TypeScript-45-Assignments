// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "ayesha Bilal";
console.log(PersonName.toLocaleLowerCase());
console.log(PersonName.toUpperCase());
console.log(PersonName.replace(/\b\w/g, function (pr) { return pr.toUpperCase(); }));
