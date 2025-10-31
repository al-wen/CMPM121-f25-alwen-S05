# Section 5 – Refactoring Code Smells in Practice

1. Unclear Variable Names
   rename variable: variables such as c, a, b, h, bI, bD, bR, and ctr are unclear.
   renamed variables (ie c -> counter) makes the code more readable and clear

2. Duplicated Code
   extract function: moved the repeated ui logic from counter display, document title, and background color to a helper function updateUI

3. Long Method
   extract function: setup is a long method, setup is now broken down into smaller helper functions
