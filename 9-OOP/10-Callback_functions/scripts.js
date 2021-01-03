//callback function
let val;

function multipleByTwo(a, b, c, callback) {
    let arr = [];

    if (callback && (typeof callback === "function")) {
        for (let i = 0; i < 3; i++) {
            arr[i] = callback(arguments[i] * 2);
        }
    }

    return arr;
}

function addOne(a) {
    return a + 1;
}

function addTwo(a) {
    return a + 2;
}

function addThree(a) {
    return a + 3;
}
val = multipleByTwo(5, 10, 20, addOne);
val = multipleByTwo(5, 10, 20, addTwo);
val = multipleByTwo(5, 10, 20, addThree);

val = multipleByTwo(5, 10, 20, function(a) {
    return a + 15;
});



/*
for (let i = 0; i < val.length; i++) {
    val[i] = addOne(val[i]);
}
*/
console.log(val);