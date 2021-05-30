// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

	{
		name: "Bananas - $0.99",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		price: 0.99
	},
	{
		name: "Onions - $1.99",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		price: 1.99
	},	
	{
		name: "Bread - $2.49",
		Lactose: true,
		Nut: false,
		Organic: false,
		None: true,
		price: 2.49
	},
	{
		name: "Spinack- $2.99",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		price: 2.99
	},
	{
		name: "Eggs - $3.49",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		price: 3.49
	},
	{
		name: "Almond Milk - $3.99",
		Lactose: false,
		Nut: false,
		Organic: true,
		None: true,
		price: 3.99
	},
	{
		name: "Dragon Fruit - $5.49",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		price: 5.49
	},
	{
		name: "Tofu - $5.99",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		price: 5.99
	},
	{
		name: "Salmon - $11.99",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		price: 11.99
	},
	{
		name: "Chocolate Cake - $19.99",
		Lactose: false,
		Nut: true,
		Organic: false,
		None: true,
		price: 19.99
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