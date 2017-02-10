/*var groceryList =
[{item: "milk", price:3},
{item: "cheese", price:4},
{item:"eggs", price:2}];


for(var i=0; i < groceryList.length; i++) {
  console.log(groceryList[i].item + " is $" + groceryList[i].price.toFixed(2));
}

var total = 0;*/
//start of DOM lab8
//line 14 down will start new edits
var total = 0;

var dairy = {
name: "milk",
price: 3
};
var grains = {
name: "cereal",
price: 3
};
var meats = {
  name: "ground turkey",
  price: 10
};

var shoppingCart = [dairy, grains, meats];

var receiptPaper = document.createElement("div");

receiptPaper.id = "receiptContainer";
document.body.appendChild(receiptPaper);

receiptContainer.style = "background-color: rgba(233, 245, 238, 0.7);"
receiptContainer.style= "textAlign: center";
//var receiptContent = document.getElementById("receiptContainer");
var shoppingList = document.createElement("ul");
receiptContainer.appendChild(shoppingList);


shoppingList.style = "background-color: blue;"

shoppingCart.forEach(function(items) {
    var shoppingListItem = document.createElement("li");
    shoppingListItem.textContent ="nameSpan" + "priceSpan"
     //total = total+groceryList.price;})

//console.log("Your total is $" +total.toFixed(2));

total += items.price;

var itemName= document.createElement("TABLE")
//var itemName = document.createElement("span");
    itemName.textContent = items.name;
    receiptContainer.appendChild(itemName);
    itemName.className = "nameSpan";
 /*var groceryItem = document.createElement("span");
 shoppingList.appendChild(groceryItem);
  groceryItem.textContent = grocery.item;
  receiptContainer.appendChild(groceryItem);
  groceryName.className = "nameSpan";*/


var itemPrice= document.createElement("TABLE")
//var itemPrice = document.createElement("span");
  itemPrice.textContent = "$" + items.price.toFixed(2);
  receiptContainer.appendChild(itemPrice);
  itemPrice.className = "priceSpan";


  });

/*  var groceryPrice = document.createElement("span");
  groceryPrice.textContent = "$" + grocery.price;
  receiptContainer.appendChild(groceryPrice);
  groceryPrice.className = "priceSpan";
*/

var displayTotal = document.createElement("p");

displayTotal.textContent = "Your total is $" + total;

receiptContainer.appendChild(displayTotal);

console.log(" Your total is $ " +total.toFixed(2));
