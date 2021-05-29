// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli - $1.99",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		price: 1.99
	},
	{
		name: "bread - $2.35",
		Lactose: true,
		Nut: false,
		Organic: false,
		None: true,
		price: 2.35
	},
	{
		name: "salmon - $10.00",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		price: 10.00
	},
	{
		name: "Chocolate Cake - $20.00",
		Lactose: false,
		Nut: false,
		Organic: false,
		None: true,
		price: 20.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lac, nut, org, none) {
	let product_names = [];
	prods.sort(function(a,b){return a.price - b.price})
	for (let i=0; i<prods.length; i+=1) {
		if (!(lac && !prods[i].Lactose) && !(nut && !prods[i].Nut) && !(org && !prods[i].Organic) && !(none && !prods[i].None)){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
		// totalPrice = totalPrice + parseFloat(chosenProducts[i].substring(chosenProducts[i].indexOf("$")+1))
	}
	return totalPrice;
}