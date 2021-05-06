const test = {
    test1:10,
    test2:20,
    test3:30
};

console.log(Object.values(test));
for (x of Object.values(test)){
    console.log(x);
}

// const postalCode = "123-4567";

const postal = {
    postalCode:"123-4567",

    checkPostalCode(){
        const replaced = this.postalCode.replace("-", "");
        const length = replaced.length;
        if(length === 7){
            return true;
        }
        return false;
    }
}

// function checkPostalCode(string){
//     const replaced = string.replace("-", "");
//     const length = replaced.length;
//     if(length === 7){
//         return true;
//     }
//     return false;
// }
console.log(postal.postalCode)
console.log(postal.checkPostalCode(this.postalCode))


