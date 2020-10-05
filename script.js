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
num.innerHTML = "0";
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
function get() {
    var result;
    var selind = document.getElementById("SelectMyLove").options.selectedIndex;
    var val= document.getElementById("SelectMyLove").options[selind].value;
    var num1 = document.getElementById("num").textContent;
    var num2 = Number(document.getElementById("num2").value);

    switch (val) {
      case '+': resultat=(parseInt(num1)+parseInt(num2));break;
      case '-': resultat=(parseInt(num1)-parseInt(num2));break;
      case '*': resultat=(parseInt(num1)*parseInt(num2));break;
      case '/': 
      if (num2) { 
        resultat=(parseInt(num1)/parseInt(num2));
        } else {
          result = '';
        }
        break;
      default:
        result = 'Select operation';
        }

    document.getElementById("resultat").innerHTML = resultat;
  }
