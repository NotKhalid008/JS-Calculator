var add = document.getElementById("add");
var sub = document.getElementById("sub");
var times = document.getElementById("time");
var divide = document.getElementById("divi");
var equals = document.getElementById("submit");
var insert1 = document.getElementById("insert1");
var insert2 = document.getElementById("insert2");
var ans = document.getElementById("answer");
var reset = document.getElementById("reset");


add.addEventListener("click", function() {
    num1 = parseFloat(document.getElementById("myInpt1").value);
    num2 = parseFloat(document.getElementById("myInpt2").value);

    console.log(num1)
    console.log(num2)
    addAns = num1+num2;
    document.getElementById("answer").innerHTML = addAns;
})
sub.addEventListener("click", function() {
    num4 = parseFloat(document.getElementById("myInpt1").value);
    num3 = parseFloat(document.getElementById("myInpt2").value);

    console.log(num3)
    console.log(num4)
    subAns = num3 - num4;
    document.getElementById("answer").innerHTML = subAns;
})
times.addEventListener("click", function() {
    num5 = parseFloat(document.getElementById("myInpt1").value);
    num6 = parseFloat(document.getElementById("myInpt2").value);

    console.log(num5)
    console.log(num6)
    mulAns = num5 * num6;
    document.getElementById("answer").innerHTML = mulAns;
})
divide.addEventListener("click", function() {
    num7 = parseFloat(document.getElementById("myInpt2").value);
    num8 = parseFloat(document.getElementById("myInpt1").value);

    console.log(num7)
    console.log(num8)
    divAns = num7 / num8;
    document.getElementById("answer").innerHTML = divAns;
})
reset.addEventListener("click", function() {
    document.getElementById("answer").innerHTML = " ";
    document.getElementById("myInpt1").value = "";
    document.getElementById("myInpt2").placeholder = "enter first num";
    document.getElementById("myInpt2").value = "";
    document.getElementById("myInpt1").placeholder = "enter second num";
})