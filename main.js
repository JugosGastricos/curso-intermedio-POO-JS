//Clase 3:
const juan = {
    name: "Juanito",
    age: "18",
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.entries(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.getOwnPropertyDescriptors(juan));
Object.defineProperty(juan, "age", {
    value: 18,
    configurable: false,
    enumerable: true,
    writable: false
});
console.log(Object.getOwnPropertyDescriptors(juan));

console.log(Object.entries(juan)[3][1]);

//Clase 4:
Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    configurable: true,
    enumerable: false
});

Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable: false,
    configurable: true,
    enumerable: true
});

Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    writable: false,
    configurable: false,
    enumerable: false
});

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    configurable: false,
    enumerable: true
});

Object.seal(juan);
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));

//Clase 6:
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd'
    }
};

const obj2 = {};

for (item in obj1) {
    obj2[item] = obj1[item];
}

obj2.e = 'e';
obj2.c.f = 'f';

console.log(obj1, obj2);

const obj3 = Object.assign({}, obj1);
obj3.c.d = 'ddddd'
console.log(obj3);

const obj4 = Object.create(obj1);

console.log(obj4);

const obj5 = {...obj1};

console.log(obj5);

//Clase 7:
const obj6 = JSON.stringify(obj1)

console.log(obj6);

const stringyfiedComplexObj = JSON.stringify(obj1);
const obj7 = JSON.parse(stringyfiedComplexObj);

console.log(obj7);

const obj8 = structuredClone(obj1);

console.log(obj8);