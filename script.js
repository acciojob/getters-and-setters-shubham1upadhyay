class Person{
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set name(name){
		this._name = name;
	}
}
class Student extends Person{
	study()
	{
		console.log(`${this._name} is studying`);
	}
}
class Teacher extends Person{
	teach(){
		console.log(`${this._name} " is teaching"`)
	}
}

let s = new Student("abc", 12);
let t = new Teacher("def", 12);
s.study()
t.teach()


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
