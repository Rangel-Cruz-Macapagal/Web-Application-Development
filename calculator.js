
var screen =document.getElementById("result").value;


function clear(){
	screen.innerHTML = "";
	document.getElementById('result').innerHTML="";

}
function Seven(){
	screen.innerHTML += "7";
}
function Eight(){
	screen.innerHTML += "8";
	document.getElementById('result').innerHTML="8";
}
function Nine(){
	screen.innerHTML += "9";
	document.getElementById('result').innerHTML="9";
}
function Divide(){
	screen.innerHTML += "/";
	document.getElementById('result').innerHTML="/";
}
function Four(){
	screen.innerHTML += "4";
	document.getElementById('result').innerHTML="4";
}
function Five(){
	screen.innerHTML += "5";
	document.getElementById('result').innerHTML="5";
}
function Six(){
	screen.innerHTML += "6";
	document.getElementById('result').innerHTML="6";
}
function Times(){
	screen.innerHTML += "*";
	document.getElementById('result').innerHTML="*";
}
function One(){
	screen.innerHTML += "1"; 
	document.getElementById('result').innerHTML="1";
}
function Two(){
	screen.innerHTML += "2";
	document.getElementById('result').innerHTML="2";
}
function Three(){
	screen.innerHTML += "3";
	document.getElementById('result').innerHTML="3";
}
function Minus(){
	screen.innerHTML += "-";
	document.getElementById('result').innerHTML="-";
}
function Dot(){
	document.getElementById('result').innerHTML=".";
	if(screen.innerHTML===""){
		screen.innerHTML += "0.";
	}
	else {
		screen.innerHTML += ".";
	}
}
function Zero(){
	screen.innerHTML += "0";
	document.getElementById('result').innerHTML="0";
}
function Equals(){
	document.getElementById('result').innerHTML="=";
	if(screen.innerHTML===""){
		screen.innerHTML += "";
	}
	else {
		screen.innerHTML += "=" +eval(screen.innerHTML);
	}
}
function Plus(){
	screen.innerHTML += "+";
	document.getElementById('result').innerHTML="+";
}
function Del(){
	screen.innerHTML = "";
	document.getElementById('result').innerHTML="";
}
function Percent(){
	screen.innerHTML = "%";
	document.getElementById('result').innerHTML="%";
}
function Answer(){
	document.getElementById('result').innerHTML="ans";
	if(screen.innerHTML===""){
		screen.innerHTML += "";
	}
	else {
		screen.innerHTML += "=" +eval(screen.innerHTML);
	}
}