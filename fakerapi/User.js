// we can hard code some users like this
// later on we will want to store users in a database
const { faker } = require('@faker-js/faker');

class User {
    constructor(){
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

module.exports = User;