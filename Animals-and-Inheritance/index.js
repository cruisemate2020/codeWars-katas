// Get Coding :)
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }
    
    introduce(){
        this.status = '  Meow meow!';
        return super.introduce() + this.status;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }
    
    greetMaster(){
    return `Hello ${this.master}`;
    }
}