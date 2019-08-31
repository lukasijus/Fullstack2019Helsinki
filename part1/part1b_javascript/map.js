const t = [1,2,3]

const m1 = t.map(value => value * 2)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

const a = [1,2,3,4,5]
const [first, second, ...rest] = a
console.log(first,second)
console.log(rest)
