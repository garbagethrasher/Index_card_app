
document.addEventListener("click",onLoad);
//Create file
var data = window.localStorage.getItem("dict");
if(data == null){
	window.localStorage.setItem("dict","{}");
	window.location = "settings.html";
}else{
var info = JSON.parse(data);	
}


var shuffle = true;

 function randomKey(obj) {
    var keys = Object.keys(obj);
	var num = keys.length * Math.random() << 0;
    return keys[num];
};
var word = randomKey(info);
var display = false;//Display definition of word



function settings(){
	document.location.href = "./settings.html";
}

function setShuffle(){
	shuffle = !shuffle;
}


function onLoad(){
	var cur = info[word];
	var def = cur["def"];
	var ex = cur["ex"];
	
	display = !display;
	
	
	var shuffle = true; //Randomize words
	//$("#center .primary").text(word);
	document.getElementById("center").getElementsByClassName("primary")[0].innerHTML = word;
	
	if(display == false){
		//$(".secondary").text("");
		document.getElementsByClassName("secondary")[0].innerHTML = "";
		document.getElementsByClassName("secondary")[1].innerHTML = "";
	}else{
		//$("#top .secondary").text(def);
		document.getElementById("top").getElementsByClassName("secondary")[0].innerHTML = def;
		//$("#bottom .secondary").text(ex);
		document.getElementById("bottom").getElementsByClassName("secondary")[0].innerHTML = ex;
		word = randomKey(info);
	}
	
}
