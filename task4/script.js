//v.1
const increment1 = (symbol, amount) => {
	let sumSymbol = " ";	
	for ( let i = 0; i < amount; i++) {
		sumSymbol += symbol; 
		console.log(sumSymbol);
	}
};

increment1("#", 10);

//v.2
let sumSymbol = " ";
const increment2 = (symbol, amount) => {
				
	if (amount != 0) {
		sumSymbol += symbol;
		console.log(sumSymbol);

		return increment2(symbol, amount - 1);
				
		}
};

increment2("$", 10);

//v.3 


const increment3 = (symbol, amount) => {
	let sumSymbol3 = " ";
	for (var i = 1; i <= amount; i++) {

		for (var j = i-1; j < i; j++) {

		sumSymbol3 += symbol;
		console.log(sumSymbol3)
		}
	}
};

increment3("@", 10);
