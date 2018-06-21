var btn = document.querySelector("#btn");
var price = document.querySelector("#price");

//On Page Load Ajax call to display the current Bitcoin rate
window.onload = function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200) {
      var amount = JSON.parse(XHR.responseText).bpi.USD.rate;
      price.innerHTML = amount;
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
};

// On button click, update the current BitCoin rate
btn.addEventListener("click", function(){
  console.log("button pressed");
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200) {
      var amount = JSON.parse(XHR.responseText).bpi.USD.rate;
      price.innerHTML = amount;
    }
  }
  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});