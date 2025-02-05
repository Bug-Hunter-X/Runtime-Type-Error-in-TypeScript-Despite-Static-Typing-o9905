function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 2); // This line will cause an error at runtime
console.log(result);