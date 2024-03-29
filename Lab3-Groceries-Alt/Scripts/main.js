// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
document.getElementById("openByDefault").click();

populateListProductChoices();

function openInfo(evt, tabName) {

	selectedItems();

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {

    var s1 = document.getElementById("Lactose");
	var s2 = document.getElementById("Nut");
	var s3 = document.getElementById("Organic");
	var s4 = document.getElementById("None");
	var s5 = document.getElementById("Diabetic");

    var sp = document.getElementById("displayProduct");
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    sp.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.checked, s2.checked, s3.checked, s4.checked, s5.checked);
	var optionPics = restrictPictures(products, s1.checked, s2.checked, s3.checked, s4.checked, s5.checked);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		sp.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		sp.appendChild(label);
		
		//adding in the pictures
		var pic = new Image();
		pic.src = "Pictures/" + optionPics[i] + ".jpg";
		sp.appendChild(document.createElement("br"));  
		sp.appendChild(pic);
		sp.appendChild(document.createElement("br"));

		// create a breakline node and add in HTML DOM
		sp.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You Selected: ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
	// var subtot = document.createTextNode("Sub-Total: $" + getTotalPrice(chosenProducts));
	// var tax = document.createTextNode("Tax (13%): $" + getTotalPrice(chosenProducts)*0.13);
	// var tot = document.createTextNode("Total: $" + Math.Round((subtot + tax)*100)/100);
	// var br = document.createElement("br");
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Sub-Total: $" + Math.round(getTotalPrice(chosenProducts)*100) / 100));
	c.appendChild(document.createElement("br"));
	c.appendChild(document.createTextNode("HST (13%): $" + Math.round((getTotalPrice(chosenProducts)*0.13)*100) / 100));
	c.appendChild(document.createElement("br"));
	c.appendChild(document.createElement("br"));
	c.appendChild(document.createTextNode("TOTAL: $" + Math.round((getTotalPrice(chosenProducts) + getTotalPrice(chosenProducts)*0.13)*100) / 100));

}

//new code below for the new navigator
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
	document.getElementById("main").style.marginLeft = "300px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }