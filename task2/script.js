//task 2

//v.1
		let decrement1 = (a) => {
		
			for (let i = a; i > 0; i-- ) {
				
				console.log(i);	
			}
		}
		decrement1(10);

//v.2
		let decrement2 = (a) => {
			if (a > 1) {
				console.log(a);
				return  decrement2(a - 1);
			} else {
				console.log(a);
				
			}
		}

		decrement2(13);


