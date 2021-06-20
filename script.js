const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};
//VANILLA JAVASCRIPT ONLY (NO JQUERY)
// listen for form submit.
//create variable for html form with document.querySelector
//create event listener
//pass e (event) to prevent default behaviour


//random element from array 
const randomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

//put everything into an init function once done
const pizzaProphetInit = () => {

	const form = document.querySelector('form');

	form.addEventListener('submit', e => {
		e.preventDefault();
		// console.log('form submitted')
	// once form submits, grab valuse from selected radio inputs.
		const sizeSelected = document.querySelector('input[name=size]:checked').value;
		const priceSelected = document.querySelector('input[name=price]:checked').value;
	//  console.log(sizeSelected, priceSelected);
	
		const sizePizzaList = pizza[sizeSelected];
		// console.log(sizePizzaList);
	
		//filter through array for lower prices/higher prices. pass filter pizza place (each item in list)
		const withinPricePizzaList = sizePizzaList.filter( (pizzaPlace) => {
			// console.log('pizza places list: ', pizzaPlace);
			if (pizzaPlace.price === priceSelected) {
				return true;
			} else {
				return false;
			}
	
		});
		console.log('within price list:', withinPricePizzaList);
	
		//this is the final pizza place we will reccomend by randomization after filtering
		const finalPizzaPlace = randomElement(withinPricePizzaList);
		// console.log('final pizza place object: ', finalPizzaPlace);
	
	
		//display the mathcin pizza joint to user
		const pizzaHTML = `
		<h2>Go here!🍕 <span class="restaurant">${finalPizzaPlace.title}</span> </h2>
		`
		document.querySelector('.results').innerHTML = 
		pizzaHTML;
	
	})
}


//javascript doc ready
if (document.readyState === 'complete') {
	//IE 8 SUPPORT
	pizzaProphetInit();
} else {
	//for other modern browsers
	document.addEventListener('DOMContentLoaded', pizzaProphetInit);
}

// once form submits, grab valuse from selected radio inputs.
//use radio input values to look through pizza object
//display the matching pizza joing to user


