const array = [1,2,3];

const array_2 = [["r","bl","y"],["g","p","bk"]];


console.log(array_2[0][2])


const member = {
    name : "honda",
    height : 180,
    hobby : "soccer"
};

console.log(member.name)


const member_2 = {
    "honda": {
    height : 180,
    hobby : "soccer"
    },
    "kagawa":{
        height : 170,
        hobby : "soccer"
    }
};

console.log(member_2.kagawa.height)


const test_1 =4;
let test_2 =3;

test_2 +=3

const test_3 = test_1 + test_2;

console.log(test_3)