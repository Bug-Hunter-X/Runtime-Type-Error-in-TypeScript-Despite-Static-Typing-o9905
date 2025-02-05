function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Error: Invalid input types";
  }
}

let result1 = addSafe(1, 2); // Correct usage
console.log(result1); // Output: 3

let result2 = addSafe("hello", 2); // Safe handling of incorrect input
console.log(result2); // Output: Error: Invalid input types