// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		Lactose: true,
		Nut: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "bread",
		Lactose: true,
		Nut: false,
		Organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		Lactose: true,
		Nut: true,
		Organic: false,
		price: 10.00
	},
	{
		name: "Chocolate Cake",
		Lactose: false,
		Nut: false,
		Organic: false,
		price: 20.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lac, nut, org) {
	let product_names = [];
	prods.sort(function(a,b){return a.price - b.price})
	for (let i=0; i<prods.length; i+=1) {
		if (!(lac && !prods[i].Lactose) && !(nut && !prods[i].Nut) && !(lac && !prods[i].Organic)){
			product_names.push(prods[i].name + "Cost: $" + prods[i].price);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.contains(products[i])){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}