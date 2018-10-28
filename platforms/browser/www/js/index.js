
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
	$("#center .primary").text(word);
	
	if(display == false){
		$(".secondary").text("");
	}else{
		$("#top .secondary").text(def);
		$("#bottom .secondary").text(ex);
		word = randomKey(info);
	}
	
}
