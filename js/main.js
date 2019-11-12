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
















function pizza (name ,size ,toppings,crust,qty,total){
  this.name= name;
  this.size=size;
  this.toppings=toppings;
  this.crust=crust
  this.qty=qty;
  this.total=total;

}

var grandTotal = 0;
function addcart(){
  var pizzaName =pizzatitle.textContent
  var pizzaSize =parseInt($(".size:checked").val());
  var pizzaToppings =parseInt($(".toppings:checked").val());
  var pizzaCrust = parseInt($(".crust:checked").val());
  var PizzaQty= $("#quantity").val();


  if (pizzaSize == 1000){
    var size = "large"
  }
  else if (pizzaSize==800){
    var size = "Medium"
  }
  else if (pizzaSize == 500 ){
    var size = "Small"
  }
  else {
    console.log("something went wrong")
  }


  if (pizzaToppings==150){
    var topin = "Black Olives"
  }
  else if ( pizzaToppings == 100){
    var topin = "Bacon"
  }
  else if ( pizzaToppings == 50){
    var topin = "Green peppers"
  }
  else{
    console.log("something went wrong")
  }


  if (pizzaCrust == 200){
    var crust = "crispy"
  }
  else if ( pizzaCrust == 150){
    var crust = "Stuffed"
  }
 else if(pizzaCrust == 50){
   var crust = "Gluten free"
 }

  var pizzaTotal = pizzaSize+pizzaCrust+pizzaToppings;

  let lepizza = new pizza (pizzaName,size,topin,pizzaCrust,PizzaQty,pizzaTotal)
  console.log(lepizza)
  pizzatitle.innerText = "Pick another pizza above";


  $(".table").append('<tr>'+'<td>'+lepizza.name+'</td>'+
  '<td>'+size+'</td>'+'<td>'+topin+'</td>' + '<td>'+crust+'</td>'
  +'<td>'+lepizza.total+'</td>'   )


  grandTotal = grandTotal + pizzaTotal;
  $(".value").html(grandTotal)

  
  
}

function deliver(){
  var customer = $("#name").val()
  var location =$("#location").val()

  if (location == null){
    window.location.replace("index.html")
  }
  else{
 $(".customer").append(customer)
 $(".location").append(loc)

  }
  
}





