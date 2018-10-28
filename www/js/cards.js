
function addCard(){
	//Get Exisiting JSON
	var data = window.localStorage.getItem("dict");
	var jData = JSON.parse(data);
	//Read form
	var key = document.getElementById("key").value;
	var def = document.getElementById("def").value;
	var ex = document.getElementById("ex").value;
	//Organize info to be inserted into JSON
	var tmpJson = '{"def":"'+def+'", "ex":"'+ex+'"}';
	jData[key] = JSON.parse(tmpJson);
	//Store and submit
	window.localStorage.setItem("dict",JSON.stringify(jData));
	document.getElementById("add").submit();
}

function remCard(){
	//Get exisiting JSON
	var data = window.localStorage.getItem("dict");
	var jData = JSON.parse(data);
	//Read form
	var key = document.getElementById("key").value;
	//Remove from JSON
	delete jData[key];
	//Store and submit
	window.localStorage.setItem("dict",JSON.stringify(jData));
	document.getElementById("removal").submit();
}

function remList(){
	var sel = document.getElementById('key');
	
	//Get exisiting JSON
	var data = window.localStorage.getItem("dict");
	var jData = JSON.parse(data);
	
	for (var key in jData){
		opt = document.createElement('option');
		opt.value = key;
		opt.innerHTML=key;
		sel.add(opt);
	}
	
}