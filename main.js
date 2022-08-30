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

//Clase 8:
// function recursiva () {
//     if () {

//     } else {

//     }
// }
const numeritos = [0,1,2,5,5,6,58,4,26,56,456,3,6,645]

numeritos.forEach((value, index) => console.log(`${index}: ${value}`));

for (let numerito = 0; numerito < numeritos.length; numerito ++){
    console.log(`${numerito}: ${numeritos[numerito]}`);
}

let numerito = 0;
function recursiva (parametro) {
    if (parametro.length != 0) {
        const firstNum = parametro[0];
        numerito ++;
        console.log(`${numerito}: ${firstNum}`);
        parametro.shift(); 
        return recursiva(parametro);
    } else {
        return numerito = 0;
    }
}

recursiva(numeritos)

//Clase 9

function isObject(subject){
    return typeof(subject) == 'Object';
}

function isArray(subject){
    return typeof(subject) == 'Array';
}

function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject){
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    
    return copySubject;
}

// Clase 10

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

const elJuan = deepCopy(studentBase);

Object.defineProperty(elJuan, 'name', {
    value: 'Juan',
    configurable: false,
});

Object.seal(elJuan);

//Clase 11:

function createStudent({
    name,
    age,
    email,
    twitter,
    facebook,
    instagram,
    approvedCourses,
    learningPaths
}) {

    return {
        name: name ?? console.error('Necesitas proporcionar tu nombre'),
        age,
        email: email ?? console.error('Necesitas proporcionar un email'),
        approvedCourses: approvedCourses ?? 'No tienes cursos aprovados',
        learningPaths: learningPaths ?? 'No haz elegido rutas de aprendizaje',
        socialMedia: {
            twitter,
            instagram,
            facebook,
        }
    };
}

const juanete = createStudent({
    // name: 'Juanito',
    // age: 18,
    // email: 'juanito@frijolitos.com',
    // twitter: 'fjuandc'
});

// Clase 12:

function createStudent2({
    name,
    age,
    email,
    twitter,
    facebook,
    instagram,
    approvedCourses,
    learningPaths
}) {
    const private = {
        _name: name ?? console.error('Necesitas proporcionar tu nombre'),
        _email: email ?? console.error('Necesitas proporcionar un email'),
    };
    const public = {
        age,
        approvedCourses: approvedCourses ?? 'No tienes cursos aprovados',
        learningPaths: learningPaths ?? 'No haz elegido rutas de aprendizaje',
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get _name(){
            return private._name;
        },
        set _name(newName){
            newName.length == 0 ? console.warn('Tu nombre debe contener algún carácter') : newName.split(' ').length > 1 ? console.warn('Tu nombre no puede tener espacios') : private._name = newName;
        }
        // readName(){
        //     return private._name;
        // },
        // changeName(newName){
        //     private._name = newName;
        // },
    };

    // Object.defineProperties(public, { 
    //     readName: {
    //     writable: false,
    //     configurable: false
    // },
    //     changeName: {
    //     writable: false,
    //     configurable: false
    // }});
    
    return public;
}

const juanetete = createStudent2({
    name: 'Juanito',
    age: 18,
    email: 'juanito@frijolitos.com',
    twitter: 'fjuandc'
});

// Clase 13:

//Usando getters y setters en la clase 12 :3