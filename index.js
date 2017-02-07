var groceryList = [{item: "milk", price:3},
{item: "cheese", price:4},
{item:"eggs", price:2}];




for(var i=0; i < groceryList.length; i++) {
  console.log(groceryList[i].item + " is $" + groceryList[i].price.toFixed(2));
}

var total = 0;

groceryList.forEach(function(grocery) {
      total = total+grocery.price;

                }); console.log("Your total is $" +total.toFixed(2));
