// Topic: sort(); method

/*
    # What is sort(); method?
    - It's use to sort element in array.
    
    # How sort(); method work?
    - For ascending sort
        a - b = positive {b, a}
        5 - 3 = 2        {3, 5}
        
    - For descending sort
        a - b = negative {a, b}
        3 - 5 = -2       {5, 3}
         
    # Note:
    - It takes call back function as parameter.
    - If the array has element in numbers form and you use sort method on array. It will treat numbers as string and sort them A to Z. Resole for doing this because of ASCII. Every characters has their own ASCII value which is number.   
*/

// Syntax:
const rollNumber = [1, 5, 3, 4, 2];

// Assenting
rollNumber.sort((a, b) => a - b);
console.log(rollNumber);

// Descending
rollNumber.sort((a, b) => b - a);
console.log(rollNumber);

// Example:
const products = [
  {
    id: 1,
    name: "Phone",
    price: 12000, 
  },
  {
    id: 2,
    name: "Tablet",
    price: 60000,
  },
  {
    id: 3,
    name: "Laptop",
    price: 50000,
  },
];

products.sort((a, b) => a.price - b.price);
console.log(products);

