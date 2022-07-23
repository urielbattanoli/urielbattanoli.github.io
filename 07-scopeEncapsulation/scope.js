//EXERCICE 1

Object.assign(String.prototype, {
    filter(array) {
        const a = this.split(' ');
        let result = "";
        let dict = {};
        array.forEach(element => {
            dict[element] = 1;
        });
        a.forEach(element => {
            result += dict[element] != 1 ? (element + " ") : "";
        });
        return result;
    }
});
console.log("This house is not nice!".filter(['not']));


//EXERCICE 2

Object.assign(Array.prototype, {
    bubbleSort() {
        for(let i = 0; i < this.length; i++) {
            for(let j = i+1; j < this.length; j++) {
                if(this[i] > this[j]) {
                    const aux = this[i];
                    this[i] = this[j];
                    this[j] = aux;
                }
            }
        }
        return this;
    }
});

console.log([6,4,0, 3,-2,1].bubbleSort());


//EXERCICE 3
function Person(name) {
    this.name = name;
}

class Teacher extends Person {
    subject;

    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    
    teach(subject) {
        this.subject = subject;
        console.log(this.name + " is now teaching " + this.subject)
    }
}

const teacher = new Teacher("Ronaldo", "English");
teacher.teach("Computer Science");

const teacherPro = {
    __proto__: Person,
    subject: "",
    factory: function(name, subject) {
        this.name = name;
        this.subject = subject;
    },
    teach: function(subject) {
        this.subject = subject;
        console.log(this.name + " is now teaching " + this.subject)
    }
}

const t1 = Object.create(teacherPro);
t1.factory("Meci", "Portuguese");
t1.teach("Software engineer");


//EXERCICE 4

class Person4 {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log("Greetings, my name is " + this.name + "and I am " + this.age + " years old.");
    }

    salute() {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

class Student extends Person4 {
    major;

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greeting() {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major + ".");
    }
}

class Professor extends Person4 {
    department;

    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }

    greeting() {
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
    }
}

const p1 = new Professor("Professor", 45, "Department");
p1.greeting();
p1.salute();

const s1 = new Student("Student", 25, "Major");
s1.greeting();
s1.salute();