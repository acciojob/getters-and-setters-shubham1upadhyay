//complete this code
class Person {
	constructor(name, age)
	{
		this._name = name;
		this._age = age;
	}
	getName()
	{
		return this._name;
	}
	getAge()
	{
		return this._age;
	}
	setName(newName)
	{
		this._name = newName;
	}
	setAge(newAge)
	{
		this._age = newAge;
	}
}

class Student extends Person {
	study()
	{
		console.log(`${this._name} "is studying"`)
	}
}

class Teacher extends Person {
	teach()
	{
		console.log(`${this._name} "is teaching"`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
