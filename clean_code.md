- [Variable](#variable)
  - [How to name a variable?](#how-to-name-a-variable)
  - [Example](#example)
  - [Add Unit In Your Variable Name](#add-unit-in-your-variable-name)
  - [Example](#example-1)
- [Global Variables](#global-variables)
  - [How to name a global variable?](#how-to-name-a-global-variable)
  - [Example](#example-2)
- [Private Variables](#private-variables)
  - [How to name a private variable?](#how-to-name-a-private-variable)
  - [Example](#example-3)
- [Constant](#constant)
  - [How to name a constant?](#how-to-name-a-constant)
  - [Example](#example-4)
- [Global Constant](#global-constant)
  - [How to name a Global Constant?](#how-to-name-a-global-constant)
  - [Example](#example-5)
- [Private Constant](#private-constant)
  - [How to name a private constant?](#how-to-name-a-private-constant)
  - [Example](#example-6)
- [Boolean](#boolean)
  - [How to name a boolean?](#how-to-name-a-boolean)
  - [Example](#example-7)
- [Function](#function)
  - [How to write better function name?](#how-to-write-better-function-name)
- [Array](#array)
  - [How to write better array name?](#how-to-write-better-array-name)
  - [Example](#example-8)
- [Object](#object)
  - [How to write better object name?](#how-to-write-better-object-name)
  - [Example](#example-9)

# Variable

## How to name a variable?

- Use camelCase for variable name.
- Variable name should be noun.

## Example

```javascript
let productPrice;
let customerName;
let bookTitle;
let carMake;
let employeeID;
```

## Add Unit In Your Variable Name

- The practice of adding units to your variable names is a good coding convention that helps improve code readability and maintainability.

## Example

```javascript
// Weight
let weightInKilograms;
let weightInPounds;

// Length
let lengthInMeters;
let lengthInCentimeters;
let lengthInInches;

// Temperature
let temperatureInCelsius;
let temperatureInFahrenheit;

// Volume
let volumeInLiters;
let volumeInGallons;

// Speed
let speedInKilometersPerHour;
let speedInMilesPerHour;

// Time
let timeInSeconds;
let timeInMinutes;
let timeInHours;

// Money
let moneyInDollars;
let moneyInEuros;
```

# Global Variables

## How to name a global variable?

- Use prefix `global` at start.
- Use camelCase for variable name.

## Example

```javascript
let globalProductPrice;
let globalCustomerName;
let globalBookTitle;
let globalCarMake;
let globalEmployeeID;
```

# Private Variables

## How to name a private variable?

- Use prefix `private` at start.
- Use camelCase for variable name.

## Example

```javascript
class MyClass {
  constructor() {
    this._privateProductPrice = 0;
    this._privateCustomerName = "";
    this._privateBookTitle = "";
    this._privateCarMake = "";
    this._privateEmployeeID = "";
  }
}
```

# Constant

## How to name a constant?

- Use UPPER_CLASS for constant names.
- Use `_` Underscore for space between constant names.

## Example

```javascript
const MAX_VALUE = 100;
const PI = 3.14159;
const API_ENDPOINT = "https://api.example.com/data";
const DEFAULT_TIMEOUT = 5000;
const COPYRIGHT_YEAR = 2022;
```

# Global Constant

## How to name a Global Constant?

- Use `GLOBAL` as prefix at start.
- Use UPPER_CLASS for constant names.
- Use `_` Underscore for space between constant names.

## Example

```javascript
const GLOBAL_API_KEY = "your_api_key_here";
const GLOBAL_BASE_URL = "https://api.example.com";
const GLOBAL_TIMEOUT_DURATION = 5000;
const GLOBAL_MAX_RETRY_ATTEMPTS = 3;
const GLOBAL_APP_VERSION = "1.0.0";
```

# Private Constant

## How to name a private constant?

- Use `_PRIVATE` as prefix at start.
- Use UPPER_CLASS for constant names.
- Use `_` Underscore for space between constant names.

## Example

```javascript
const _PRIVATE_MAX_VALUE = 100;
const _PRIVATE_PI = 3.14159;
const _PRIVATE_API_ENDPOINT = "https://api.example.com/data";
const _PRIVATE_DEFAULT_TIMEOUT = 5000;
const _PRIVATE_MAX_RETRY_ATTEMPTS = 3;
```

# Boolean

## How to name a boolean?

- Use a clear and concise name that describes the variable's purpose or meaning.
- Start the variable name with a verb (e.g., "is", "has", "can", "should") to indicate its boolean nature.
- Use camelCase for variable names.
- Avoid using generic names like "flag" or "status" unless they provide additional context.
- Avoid using names that are already used for other types of variables.

## Example

```javascript
// Example 1: Describing the variable's purpose
let isNumberEven;

// Example 2: Using "is" to indicate a condition or state
let isUserLoggedIn;

// Example 3: Using "has" to indicate the presence or existence of something
let hasValidEmail;

// Example 4: Using "can" to indicate the ability or possibility of something
let canEditProfile;

// Example 5: Using "should" to indicate a recommendation or expectation
let shouldDisplayWarning;
```

# Function

[Resource](https://dev.to/winstonpuckett/function-etymology-24f5)

## How to write better function name?

- Use nouns (plural): Arrays typically store collections of related data.
- Start with a verb (optional): If the array undergoes transformations.

# Array

## How to write better array name?

## Example

```javascript
const shoppingCartItems = ["apple", "banana", "milk"];
const productPrices = [1.99, 2.5, 3.99];
const customerReviews = [
  { name: "Alice", rating: 5, comment: "Great product!" },
];
const monthlySalesData = [1000, 1200, 1500];
const filteredSearchResults = ["shirt", "jeans", "jacket"];
```

# Object

## How to write better object name?

1. Context-Specific

- Consider the object's usage within your application.
- Example: `const product = { id: 123, name: "T-Shirt", price: 19.99 };`

2. Singular Nouns (for Single Objects)

- Use singular nouns to represent a single entity.
- Example: `const user = { username: "bob", email: "bob@example.com" };`

3. Plural Nouns (for Collections)

- Use plural nouns for objects that represent collections of similar items.
- Example: `const customers = [{ name: "Alice", id: 1 }, { name: "Bob", id: 2 }];`

## Example

```javascript
const shoppingCart = {
  items: [],
  totalPrice: 0,
  addItem(item) {
    this.items.push(item);
    this.totalPrice += item.price;
  },
  removeItem(itemId) {},
};

const product = {
  id: 123,
  name: "T-Shirt",
  price: 19.99,
  description: "A comfortable and stylish T-shirt",
  stock: 10,
  addReview(review) {},
};

const user = {
  username: "alice",
  email: "alice@example.com",
  firstName: "Alice",
  lastName: "Smith",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const customer = {
  id: 456,
  userId: 123,
  shippingAddress: {},
  billingAddress: {},
};

const post = {
  id: 789,
  userId: 345,
  content: "This is a social media post!",
  createdAt: new Date(),
  comments: [],
  addComment(comment) {
    this.comments.push(comment);
  },
};
```
