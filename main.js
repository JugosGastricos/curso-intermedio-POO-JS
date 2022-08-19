//Clase 1:
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