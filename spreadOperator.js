const arr1=[{a:1},{b:2},{c:3}];
const arr2=[3,4];
const obj={d:2};
const arr3=[...arr1, ...arr2, {...obj}];
console.log(arr3);
