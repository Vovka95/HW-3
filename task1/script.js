//task 1.1
const convert = (amount, currency) => {
			
	if (currency === "USD") {
		return (amount * 26) + " " + "UAH";
	}else if (currency === "UAH") {
		return (amount / 26) + " " + "USD";
	}else {
		return "Sorry, we don't have this currency"
	}
};

console.log(convert(52, "UAH"));



//task 1.2			
const minMax = arr => ({
	max: Math.max(...arr),
	min: Math.min(...arr),
});

console.log(minMax([1,23,-5,11]));

//task 1.3 

//v.1
const averageValues1 = (arr) => {
	let sum = 0;

	for ( let i = 0; i < arr.length; i++ ) {

		sum += arr[i];
   			
	}
	return sum / arr.length;
}

console.log(averageValues1([10,6,7]));

//v.2
const averageValues2 = (arr) => {
	let sum = 0;

	for ( let obj of arr) {
		sum += obj;
	}

	return sum / arr.length;
}

console.log(averageValues2([1,9,7]));

//v.3		
		

const averageValues3 = (arr) => {
	let sum = 0;
	arr.forEach(function(valueItem){
		sum += valueItem;
	});

	return sum / arr.length;
}

console.log(averageValues3([47,50,56]));


//v.4

const averageValue4 = (arr) => {
	const sum = arr.reduce((sum, currentEl) => sum + currentEl);

	return sum / arr.length;
}

console.log(averageValue4([47,50,53]));