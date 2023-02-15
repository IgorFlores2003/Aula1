var myNodelist = document.getElementsByTagName("LI");
var i;

var list = document.querySelector('ul');


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Save").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Escreva Alguma coisa");
  } else {
    document.getElementById("listinha").appendChild(li);
  }
  document.getElementById("Save").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}