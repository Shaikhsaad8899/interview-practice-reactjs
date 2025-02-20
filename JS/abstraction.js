function getUserDetails(name, age) {
    secretpassword = "sadasdas"
    return {
        getAge() {
            return console.log(`Your age is ${age}`);  
        }
    }

}

const user = getUserDetails("saad", 23)

user.getAge()
console.log(user.secretpassword);
