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
const form = document.querySelector('form');

//random element from array 
const randomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}


form.addEventListener('submit', e => {
	e.preventDefault();
	// console.log('form submitted')
// once form submits, grab valuse from selected radio inputs.
	const sizeSelected = document.querySelector('input[name=size]:checked').value;
	const priceSelected = document.querySelector('input[name=price]:checked').value;
//  console.log(sizeSelected, priceSelected);

	const sizePizzaList = pizza[sizeSelected];
	console.log(sizePizzaList);

	//filter through array for lower prices/higher prices. pass filter pizza place (each item in list)
	const withinPricePizzaList = sizePizzaList.filter( (pizzaPlace) => {
		console.log('pizza places list: ', pizzaPlace);
		if (pizzaPlace.price === priceSelected) {
			return true;
		} else {
			return false;
		}

	});
	console.log('within price list:', withinPricePizzaList);

	//this is the final pizza place we will reccomend by randomization after filtering
	const finalPizzaPlace = randomElement(withinPricePizzaList);
	console.log('final pizza place object: ', finalPizzaPlace);

})





// once form submits, grab valuse from selected radio inputs.
//use radio input values to look through pizza object
//display the matching pizza joing to user


