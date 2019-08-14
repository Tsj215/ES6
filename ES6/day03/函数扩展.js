function test(a, b, c, d=1) {

}

// console.log(test.name)
// console.log(test)

function test() {
    console.log(this)
}

let obj = {
    name:'lil',
    age:21,
    test
}

obj.test()