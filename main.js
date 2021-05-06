const fruits = [
    "apple", "banana"
];

console.log(fruits);

fruits.push("orange")

console.log(fruits);

// callback（無名関数）
fruits.forEach(function(input){
    console.log(input);
})

console.log("===========================================")

// アロー関数（ES6から）
// 関数名あり
const getItem = () => {console.log("allow")}
getItem()

console.log("===========================================")

// 関数名なし
fruits.forEach(input => console.log(input));

console.log("===========================================")

console.log("<<Array.filter>>")
// Array.filter
const scores = [10,20,30,40];
const newScores = scores.filter(value => value >= 30);
console.log(newScores);

console.log("<<Array.find>>")
// Array.find
const members = ["honda", "kagawa", "nagatomo"];
const member = members.find(value => value === "nagatomo");
console.log(member);

console.log("<<Array.map>>")
// Array.map 配列をもとに新しい配列を作成
const userList = [10,20,30,40];
const userIdList = userList.map(value => `user_${value}`);
console.table(userIdList);

