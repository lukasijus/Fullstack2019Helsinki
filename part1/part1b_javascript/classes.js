class Person {
	constructor(name,age) {
		this.name = name
		this.age = age
	}
	greet() {
		console.log('hello, my name is', this.name, 
				'and I am', this.age, 'years old')
	}
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
