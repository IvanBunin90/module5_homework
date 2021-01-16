const arr = [1,2,3,4,5, 'r', 'r']
let isDup = false;
arr.map(x => (arr.indexOf(x)!== arr.lastIndexOf(x))? isDup = true: isDup)
console.log(isDup)



