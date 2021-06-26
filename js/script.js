function getSize (size) {
    if (size === 0) {
        return "Pizza Pie"
   }else if (size === 1) {
        return "Regular"
    }else if (size === 2) {
        return "Medium"
    }else if (size === 3) {
     return "large"
   }
 };

$(document).ready(function(){
    $('#submit').click(function(event){
        event.preventDefault();
        var type = $('#type').val();
        var size = parseInt($("input[name='size']:checked").val());
        var crust = parseInt($("input[name='crust']:checked").val());
        var amount = parseInt($("#number").val());
        var price=[180, 370, 650,950];
        var sumToppings = 0;
        $("input[name='topping']:checked").each(function(){
        sumToppings+= parseInt($(this).val());
    })

    var subTotal = ((price[size]) + crust + sumToppings)* amount;

    if (size =='undefined'|| (price[size]) == 'undefined' || crust == 'NaN' || sumToppings == '' || subTotal == 'NaN'){         
        $("#subtotal").html('Kindly select at least one size, one crust and a topping')
    } else{
        $("#subtotal").html("<strong>Your Pick:</strong>" + "<br/>"+"Type:" + type + "<br/>"+ " Size: " + getSize(size)+ "<br/>"+" No. of Pizzas ordered " + amount+ "<br/>"+ " Price: Kshs " + price[size] + "<br/>" + " crust: Kshs. " + crust + "<br/>"+ " Toppings: Kshs "+ sumToppings + "<br/>"+" <strong> Total: Kshs </strong>" + subTotal);
        $(".deliver").show();
    }
    });

    $("#checkout").click(function(){
        swal("Thank you for shopping with us", "Kindly pick up your order at the counter near by.", "success");
    });
});



$("#delivery").click(function(){
    $(".delivery").show()
  });


  $("#confirm").click(function(){
    event.preventDefault()
    var town=["Town", "Kariobangi North", "Embakasi", "Thika", "Juja", "Dandora", "Kamulu"]
    var charges=[100,70,120,300,210, 70, 180]
    var name = $("#name").val();
    var contact = $("#contact").val();
    var location = town[$("#location").val()];
    var street = $("#street").val();
    var delivery = charges[$("#location").val()];
    if (name == '' || contact == '' || location == ''|| street== '' ){
      swal("Error", "Kindly fill all the fields", "error");        
    } else {
      swal('Hi ' +name + " order receive and delivery to "+ street +' Street, ' + location + " dispatch right away. Delivery charges: Ksh " + delivery);
      
    }
  });