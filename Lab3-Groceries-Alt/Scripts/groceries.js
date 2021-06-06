// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

	{
		name: "Bananas (25% OFF!!) - now $0.75",
		pic: "Bananas",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: false,
		price: 0.75,
	},
	{
		name: "Organic Bananas - $1.25",
		pic: "Organic Bananas",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		Diabetic: false,
		price: 1.25
	},
	{
		name: "Onions - $2.00",
		pic: "Onions",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: true,
		price: 2.00
	},
	{
		name: "Organic Onions - $2.25",
		pic: "Organic Onions",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		Diabetic: true,
		price: 2.25
	},	
	{
		name: "Bread (20% OFF!!) - now $2.40",
		pic: "Bread",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: false,
		price: 2.40
	},
	{
		name: "Black Beans - $2.75",
		pic: "Black Beans",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: true,
		price: 2.75
	},
	{
		name: "Spinach- $3.00",
		pic: "Spinach",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: true,
		price: 3.00
	},
	{
		name: "Organic Spinach (10% OFF!!) - now $3.25",
		pic: "Organic Spinach",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		Diabetic: true,
		price: 3.25
	},
	{
		name: "Squash - $3.50",
		pic: "Squash",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: true,
		price: 3.50
	},
	{
		name: "Eggs (15% OFF!!) - now $3.50",
		pic: "Eggs",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: true,
		price: 3.50
	},
	{
		name: "Milk - $3.75",
		pic: "Milk",
		Lactose: false,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: false,
		price: 3.75
	},
	{
		name: "Almond Milk - $4.00",
		pic: "Almond Milk",
		Lactose: true,
		Nut: false,
		Organic: false,
		None: true,
		Diabetic: true,
		price: 4.00
	},
	{
		name: "Organic Oat Milk (35% OFF!!) - now $4.50",
		pic: "Organic Oat Milk",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		Diabetic: true,
		price: 4.50
	},
	{
		name: "Dragon Fruit - $5.50",
		pic: "Dragon Fruit",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: false,
		price: 5.50
	},
	{
		name: "Organic Tofu - $6.00",
		pic: "Organic Tofu",
		Lactose: true,
		Nut: true,
		Organic: true,
		None: true,
		Diabetic: true,
		price: 6.00
	},
	{
		name: "Salmon - (20% OFF!!) - now $10.00",
		pic: "Salmon",
		Lactose: true,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: true,
		price: 10.00
	},
	{
		name: "Organic Raisin Walnut Cookies - $15.00",
		pic: "Organic Raisin Walnut Cookies",
		Lactose: false,
		Nut: false,
		Organic: true,
		None: true,
		Diabetic: false,
		price: 15.00
	},
	{
		name: "Chocolate Cake (10% OFF!!) - now $18.00",
		pic: "Chocolate Cake",
		Lactose: false,
		Nut: true,
		Organic: false,
		None: true,
		Diabetic: false,
		price: 18.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lac, nut, org, none, diabetic) {
	let product_names = [];
	prods.sort(function(a,b){return a.price - b.price})
	for (let i=0; i<prods.length; i+=1) {
		if (!(lac && !prods[i].Lactose) && !(nut && !prods[i].Nut) && !(org && !prods[i].Organic) && !(none && !prods[i].None) && !(diabetic && !prods[i].Diabetic)){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}


function restrictPictures(prods, lac, nut, org, none, diabetic) {
	let product_names = [];
	prods.sort(function(a,b){return a.price - b.price})
	for (let i=0; i<prods.length; i+=1) {
		if (!(lac && !prods[i].Lactose) && !(nut && !prods[i].Nut) && !(org && !prods[i].Organic) && !(none && !prods[i].None) && !(diabetic && !prods[i].Diabetic)){
			product_names.push(prods[i].pic);
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