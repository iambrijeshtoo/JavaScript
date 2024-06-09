# Var vs Let vs Const

| var                                     | let                                     | const                                   |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| - Initialize later                      | - Initialize later                      | - Declare & Initialize at the same time |
| - Can be reassign                       | - Can be reassign                       | - Can't be reassign                     |
| - Can be redeclare in same scope        | - Can't be in same scope redeclare      | - Can't be in same scope redeclare      |
| - Can be redeclare with different scope | - Can be redeclare with different scope | - Can be redeclare with different scope |

# NOTE

- You can declare variable without using any of this keyword. But that is not recommend.

# When to Use var, let, or const?

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
