// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.



// Creating a Function with parameters Which return a values in string 
function city_country(city: string, country: string) : string{
    return `${city} , ${country}.`;
}

// Calling a Function and print the returned value
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Dubai", "United Arab Emirates(UAE)"));

console.log(city_country("Paris", "Farance"));
