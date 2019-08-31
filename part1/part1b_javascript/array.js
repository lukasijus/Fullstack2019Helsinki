const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(x => {
  console.log(x)  // numbers 1, -1, 3, 5 are printed, each to own line
})  
