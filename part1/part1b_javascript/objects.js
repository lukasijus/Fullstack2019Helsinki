const arto = {
	name:	 	'Arto Hellass',
	age:		35,
	education:	'Phd',
	greet:		function() {
		console.log('hello , my name is' , this.name)
},
	doAddition: function(a,b) {
		console.log(a + b)
},
}

arto.doAddition(1,4)

const referenceToAddition = arto.doAddition
referenceToAddition(10,15)

const object2 = {
	name: 		'Full Stack web application development',
	level:		'intermediate studies',
	size:		5,
}

const object3 = {
	name:		{
		first:	'Dan',
		last:	'Abramov',
	},
	grades: [2,3,5,3],
	department: 'Stanford University',
}



