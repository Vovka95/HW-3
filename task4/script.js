//v.1
		let increment1 = (symbol, amount) => {
			let sumSymbol = " ";	
			for ( let i = 0; i < amount; i++) {
				sumSymbol += symbol; 
				console.log(sumSymbol);
			}
	
		}

		increment1("#", 10);

//v.2
		
		let sumSymbol = " ";
		let increment2 = (symbol, amount) => {
				
				if (amount != 0) {
					sumSymbol += symbol;
					console.log(sumSymbol);

					return increment2(symbol, amount - 1);
				
				}
		}

		increment2("$", 10);

