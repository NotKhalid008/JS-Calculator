var add = document.getElementById("add");
var sub = document.getElementById("sub");
var times = document.getElementById("time");
var divide = document.getElementById("divi");
var equals = document.getElementById("submit");
var insert1 = document.getElementById("insert1");
var insert2 = document.getElementById("insert2");
var ans = document.getElementById("answer");
var reset = document.getElementById("reset");
var ans1 = document.getElementById("ans1");

add.addEventListener("click", function() {
    num1 = document.getElementById("myInpt1").value;
    num2 = document.getElementById("myInpt2").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("answer").innerHTML = "Please insert a number.";
    } else {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        addAns = num1 + num2;
        document.getElementById("answer").innerHTML = addAns;
    }
    });
    sub.addEventListener("click", function() {
        num1 = parseFloat(document.getElementById("myInpt1").value);
        num2 = parseFloat(document.getElementById("myInpt2").value);
    
        console.log(num1)
        console.log(num2)
        subAns = num1 - num2;
        document.getElementById("answer").innerHTML = subAns;
    })
    times.addEventListener("click", function() {
        num1 = parseFloat(document.getElementById("myInpt1").value);
        num2 = parseFloat(document.getElementById("myInpt2").value);
    
        console.log(num1)
        console.log(num2)
        mulAns = num1 * num2;
        document.getElementById("answer").innerHTML = mulAns;
    })
    divide.addEventListener("click", function() {
        num1 = parseFloat(document.getElementById("myInpt2").value);
        num2 = parseFloat(document.getElementById("myInpt1").value);
    
        console.log(num1)
        console.log(num2)
        divAns = (num2 / num1).toFixed(5);
        document.getElementById("answer").innerHTML = divAns;
    })
    reset.addEventListener("click", function() {
        document.getElementById("answer").innerHTML = " ";
        document.getElementById("myInpt1").value = "";
        document.getElementById("myInpt2").placeholder = "enter higher num";
        document.getElementById("myInpt2").value = "";
        document.getElementById("myInpt1").placeholder = "enter lower num";
    })
    ans1.addEventListener("click", function() {
        var val1 = document.getElementById("answer").innerHTML;
        document.getElementById("myInpt1").value = val1;
    });

    ans2.addEventListener("click", function() {
        var val2 = document.getElementById("answer").innerHTML;
        document.getElementById("myInpt2").value = val2;
    });


