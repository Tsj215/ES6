//Array.from
let temp = {'0': 'hello', '1': 'world', length: 2}
console.log(Array.from(temp))
console.log(Array.of(10))
console.log(Array.of(10, 11))

let arr = [24, 45, 24, 6, 45, 2]
let set = new Set(arr)
console.log(set)
console.log(Array.from(set))
console.log([...set])

//find findIndex
let result = arr.find(item => {
    return item > 40
})
console.log(result)
