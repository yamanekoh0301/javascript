const person = {

    name : "honda",
    age : 30,

    getName() {
        console.log(this.name);
        return this;
    },

    getAge() {
        console.log(this.age);
        return this;
    }
}

person.getName().getAge();