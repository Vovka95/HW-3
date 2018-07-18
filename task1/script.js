//task 1.1
		let convert = (amount, currency) => {
			
			if (currency === "USD") {
				return (amount * 26) + " " + "UAH";
			}else if (currency === "UAH") {
				return (amount / 26) + " " + "USD";
			}else {
				return "Sorry, we don't have this currency"
			}

		}

		console.log(convert(52, "UAH"));



//task 1.2
		
		let minMAX = (arr) => {
			let min = max = arr[0];
			for ( let i = 0; i < arr.length; i++ ){
				
				if ( min > arr[i]) {
				 min = arr[i];
				} else {
				 min;
				};

				if ( max < arr[i]) {
				 max = arr[i];
				} else {
				 max;
				}



			}
			
			return  "max: " + max +", " + "min: " + min;
		}

		console.log(minMAX([1,23,-5,11]));

//task 1.3 

//v.1
		let averageValues1 = (arr) => {
			let sum = 0;

			for ( let i = 0; i < arr.length; i++ ) {

				 sum += arr[i];
   			
			}
			
			return sum / arr.length;
		}

		console.log(averageValues1([10,6,7]));

//v.2
		let averageValues2 = (arr) => {
			let sum = 0;

			for ( let obj of arr) {
				sum += obj;
			}

			return sum / arr.length;
		}

		console.log(averageValues2([1,9,7]));

//v.3		
		

		let averageValues3 = (arr) => {
			let sum = 0;
			arr.forEach(function(valueItem){
			  sum += valueItem;
			});

			return sum / arr.length;
		}

		console.log(averageValues3([47,50,56]));
