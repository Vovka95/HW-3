//task5
//v.1
		let fib1 = (n) => {
			if (n <= 1){
				return n;
			} else {
				return fib1(n-1) + fib1(n-2);
			}
		}

		console.log(fib1(14));

//v.2

	let fib2 = (n) => {
			let a = 1, b = 1;
			for (let i = 3; i <= n; i++) {
				let c = a + b;
				a = b;
				b = c;
			}
			return b;
		}

		console.log(fib2(78))


