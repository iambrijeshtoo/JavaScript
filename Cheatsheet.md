## Array VS Object

| Array                                       | Object                                                                                                                                 |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| - It is iterable.                           | - It isn't directly iterable. But you can still iterate.                                                                               |
| - It can store different type data.         | - It can store different type of data. But name must in string format.                                                                 |
| - It can store duplicate value.             | - It can store duplicate value with different key. If you add same key in object it will take the last added key and update the value. |
| - It store data in linear form.             | - It store data in `key : value` form.                                                                                                 |
| - Element can access by using index number. | - Element can't be access using index number.                                                                                          |
| - Order of element is guaranteed.           | - Order of the property isn't guaranteed.                                                                                              |
|                                             | - It has default key.                                                                                                                  |
|                                             | - It doesn't have size property.                                                                                                       |

## Set VS Map

| Set                                 | Map                                                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| - It is iterable.                   | - It is iterable.                                                                                                                      |
| - It can store different type data. | - It can store different type of data and key can be anything in map.                                                                  |
| - It can't store duplicate value.   | - It can store duplicate value with different key. If you add same key in object it will take the last added key and update the value. |
| - It store data in linear form.     | - It store data in `key : value` form.                                                                                                 |
| - It is array like object.          | - It's like Object .                                                                                                                   |
| - Element order isn't guaranteed.   | - Element insertion order is guaranteed.                                                                                               |
|                                     | - It doesn't have default key.                                                                                                         |
|                                     | - It has size property.                                                                                                                |

# Terminology

Property == Attribute == Fields
Function == Method == Operations == Behaviors

1. Property

- In object name pair is known as property.
- JavaScript also has in-built property for example .length (NOTE: This not function/ method)

2. Attribute == Fields

- When we create a class and define variable inside it. That variable is known as Attribute.

3. Element

- When store value in array it known as element.

4. Function Definition

- It is the name of function.

5. State of the Object

- When we assign value to the properties it known as state of the object.
- We can also assign the value to the properties when we are declaring the object. This is possible because of the constructor.
