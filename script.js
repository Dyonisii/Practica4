// div №2
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const res = document.getElementById("reset");
const num = document.getElementById("num");

inc.addEventListener("click", () => {
num.innerHTML++;
});

dec.addEventListener("click", () => {
num.innerHTML--;
});

res.addEventListener("click", () => {
num.innerHTML = "1";
});


// div №3
const red = document.getElementById("Red");
const gre = document.getElementById("Green");
const blu = document.getElementById("Blue");

red.addEventListener("click", () => {
num.style ="color:red;";
});
gre.addEventListener("click", () => {
num.style ="color:green;";
});
blu.addEventListener("click", () => {
num.style ="color:Blue;";
});
// div №4


//document.addEventListener("DOMContentLoaded", function() {
 // document.getElementById("elem").onclick = function() {
  //  alert(document.getElementById("SelectMyLove").value);
 // };
//});

function get() {
    var result;
    var selind = document.getElementById("SelectMyLove").options.selectedIndex;
    var val= document.getElementById("SelectMyLove").options[selind].value;
   // document.addEventListener("DOMContentLoaded", function() {
    //document.getElementById("elem").onclick = function(){
    //alert(document.getElementById("SelectMyLove").value);
    //var sel = document.getElementById("SelectMyLove"); // Получаем наш список
    //var val = sel.options[sel.selectedIndex].value; // Получаем значение выделенного элемента (в нашем случае fruit2).

    var num1 = Number(document.getElementById("num").value);
    var num2 = Number(document.getElementById("num2").value);

    switch (val) {
      //case '+': resultat=(num1+num2);break;
      //case '-': resultat=(num1-num2);break;
      case '+': resultat=(parseInt(num1)+parseInt(num2));break;
      case '-': resultat=(parseInt(num1)-parseInt(num2));break;
      case '*': resultat=(parseInt(num1)*parseInt(num2));break;
      case '/': 
      if (num2) { 
        resultat=(parseInt(num1)/parseInt(num2));
        } else {
          result = ' p  ';
        }
        break;
      default:
        result = 'выберите операцию';
        }

    document.getElementById("result").innerHTML = result;
  }


  
