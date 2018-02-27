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
		
		 document.getElementById('result').innerHTML=printdata(data);
			
		
	})
	}

let printdata=function(data){
	 var htmlText = '';
    for ( var i=0;i<20;i++ ) {
   	 //console.log(data.results[i].title);
        htmlText += '<div class="div-conatiner">';
        htmlText += '<div class="col_sm_4">';
        htmlText += '<p class="p-name"> Author: ' + data.articles[i].author + '</p>';
        htmlText += '<p class="p-loc">Title: ' + data.articles[i].title + '</p>';
        htmlText += '<p class="p-desc"> Description: ' + data.articles[i].description + '</p>';
        htmlText += '<p class="p-created"> Publised at: ' + data.articles[i].publishedAt + '</p>';
        htmlText += '</div>';
        
        htmlText += '<div><img src='+data.articles[i].urlToImage+'></div>';
        htmlText += '<a href='+data.articles[i].url+'>';
        htmlText += '<input type="button" value="Visit Page" />';
        htmlText += '</a>';
       
        //htmlText += '<a href="trial.html">';
        htmlText += '<input type="button" value="Add to Favourites list" />';
        //htmlText += '</a>';
        htmlText += '<button id="addfav" onClick=incount() >Add to favourites</button>';
        //htmlText += '<script type="text/javascript" src="function1.js"></script>';
        htmlText += '<hr>';
    }
document.getElementById('result').insertAdjacentHTML('afterend',htmlText);
}
function onClick(){
	callServletByAjax();
}

function callServletByAjax(){
	var http=new XMLHttpRequest();
	http.onreadystatechange=function(){
		if (http.readyState==4 && http.status==200){
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	}
}





