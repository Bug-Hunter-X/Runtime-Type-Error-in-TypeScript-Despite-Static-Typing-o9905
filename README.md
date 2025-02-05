# Runtime Type Error in TypeScript Despite Static Typing

This repository demonstrates a scenario where a runtime type error occurs in TypeScript despite the presence of static typing.  The issue arises due to implicit type coercion, which TypeScript allows in certain situations, leading to unexpected behavior during execution. 

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file provides a corrected version.

## Problem

The function `add` is defined to accept two numbers and return their sum. However, the code calls `add` with a string and a number. Although TypeScript will allow this compilation to succeed, it will lead to a runtime error and unexpected output.

## Solution

The solution involves explicitly checking the types of the inputs and either converting them to a common type or throwing an error if they are incompatible.