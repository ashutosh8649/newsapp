function news(){
alert ("Hello world!");
var api = 'https://newsapi.org/v2/top-headlines?';
//var city = '';
var apikey = '00d47b890c504caf86f78448eca5c872';
var input = document.getElementById('userinput').value;
console.log(input);

var url = api + 'country=' +input+'&'+'apiKey='+apikey;
var req = new Request(url);
fetch(req)
	.then(result=>result.json())
	.then((data)=>{
		document.getElementById('result').innerHTML=printData(data);

	})
	
	let printData=function(data){
	var html="";
	html+=""
	html+=""
}
    }
