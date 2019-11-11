// user interface logic

var pizzatitle = document.getElementById("pizzatitle");

function meatlover() {
  pizzatitle.innerText = "Meat Lover";
}
function vegetarian() {
  pizzatitle.innerText = "Vegeterian Heaven";
}
function toni() {
  pizzatitle.innerText = "Toni Pepperoni";
}
















function pizza (name ,size ,toppings,crust,qty){
  this.name= name;
  this.size=size;
  this.toppings=toppings;
  this.crust=crust
  this.qty=qty;

}

function addcart(){
  var pizzaName =pizzatitle.textContent
  var pizzaSize =$(".size:checked").val();
  var pizzaToppings =$(".toppings:checked").val();
  var pizzaCrust = $(".crust:checked").val();
  var PizzaQty= $("#quantity").val();

  let lepizza = new pizza (pizzaName,pizzaSize,pizzaToppings,pizzaCrust,PizzaQty)
  console.log(lepizza)
  pizzatitle.innerText = "Pick another pizza above";


  $(".table").append('<tr>'+'<td>'+lepizza.name+'</td>'+
  '<td>'+lepizza.size+'</td>'+'<td>'+lepizza.toppings+'</td>' + '<td>'+lepizza.crust+'</td>'
  +'<td>'+lepizza.qty+'</td>'   )

  // Pizza cost

    var sizeCost = $(".size:checked").cost()
    console.log(sizeCost)
  
}

function deliver(){
  prompt("Where do you want you pizza deliverd")
  
}





