const height = 90;

// if (height == "90"){
if (height === "90"){
    console.log("height is " + height);
} else {
    console.log("height is NOT " + height);
}

const signal = "b";

if (signal ==="r"){
    console.log("definitely stop");
} else if (signal === "y"){
    console.log("stop");
} else {
    console.log("walk");
}

const speed = 60;

if (signal ==="b"){
    if (speed >= 60){
        console.log("speed over");
    }
}

const signal_1 = "r";
const signal_2 = "b";

// AND OR
if (signal_1 === "r" && signal_2 === "b"){
    console.log("r and b");
}

if (signal_1 === "r" || signal_2 === "b"){
    console.log("r or b");
}

// 三項演算子　if else
// 条件 ? T : F
const score = 80;

const comment = score > 80 ? "good" : "not good";

console.log(comment);
