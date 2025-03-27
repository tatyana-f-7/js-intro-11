/*
Create a class called Customer
- Create a constructor for this class which takes 4 arguments:
    name
    age
    membershipType
    membershipCost
- Create a method called getDetails() which returns the customer's information in the format:
    {name} is {age} years old and has a {membershipType} membership with ${membershipCost}.
- Create a method called upgradeMembership()
    which upgrades the membership type of the customer to 'Premium' and increases the cost by 20%.
*/

class Customer {
    constructor(name, age, membershipType, membershipCost) {
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with ${this.membershipCost}`
    }

    upgradeMembership() {
        this.membershipType = 'Premium'
        this.membershipCost += this.membershipCost * 0.2
    }
}

/*Create a class called VIPCustomer and inherit the Customer class
- Create a constructor for this class which takes 4 arguments:
    name
    age
    membershipType
    membershipCost
    - Inherit the Customer class constructor and the other methods
- Create a method called applyDiscount() which applies a discount of 10% to the VIP customer's 
membershipCost.
*/

class VIPCustomer extends Customer {
constructor(name, age, membershipType, membershipCost) {
    super(name, age, membershipType, membershipCost)
}

applyDiscount() {
    this.membershipCost -= this.membershipCost * 0.1
}
}


/*
Create a class called BusinessCustomer and inherit the Customer class
1
www.techglobalschool.com
- Create a constructor for this class which takes 5 arguments:
    name
    age
    membershipType
    membershipCost
    duration
    - Inherit the Customer class constructor and the other methods
- Create a method called extendContract() which extends the business customer's contract by 1 year 
and decreases the cost by %15.
*/


class BusinessCustomer extends Customer {
constructor(name, age, membershipType, membershipCost, duration) {
    super(name, age, membershipType, membershipCost)
    this.duration = duration;
}

extendContract() {
    this.duration += 1;
    this.membershipCost -= this.membershipCost * 0.15
}
}

const customer1 = new Customer('John Doe', 30, 'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

const customers = [customer1, vipCustomer, businessCustomer];

for(const customer of customers){
    console.log(customer.getDetails());
}

customer1.upgradeMembership() //updates membership from basic to Premium and adds 20% cost

vipCustomer.applyDiscount() //updates cost to 10% less

businessCustomer.extendContract() //add 1 year duration and substract 15% cost

for(const customer of customers){
    console.log(customer.getDetails());
}
