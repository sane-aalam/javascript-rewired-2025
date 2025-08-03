// Array methods

let arr = ["I", "go", "home"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// The element was removed
delete arr;
console.log(arr);
delete arr[1];
delete arr[2];
console.log("second element of array -", arr[2]);

// 1.interview question -
console.log(arr.length == 3);
// The element was removed, but the array still has 3 elements, we can see that arr.length == 3.
// That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of the elements to shift and occupy the freed place. We expect to have a shorter array now.
// The arr.splice method is a Swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// 2.interview question - splice method only resize the original array
let newarr = ["study", "student", "college", "school"];
console.log(newarr);
console.log("before removed element size of array -", newarr.length);
// newarr.push("studentNewAddmission")
newarr.splice(1, 1); // from index 1 to 1 removed element
console.log(newarr);
console.log(newarr == 3);
console.log(newarr.length);
console.log("after removed element size of array -", newarr.length);

// 3. interview question
// from index 4
// delete 0
// then insert "complex" and "language"
newarr.splice(4, 0, "complex", "language");
console.log("update array", newarr);
