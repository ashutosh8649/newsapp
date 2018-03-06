function news(){
alert ("Inside js");
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
        htmlText += '<div class="row">';
        htmlText += '<div class="col-md-8">';
        htmlText += '<p class="p-name"> Author: ' + data.articles[i].author + '</p>';
        htmlText += '<p class="p-loc">Title: ' + data.articles[i].title + '</p>';
        htmlText += '<p class="p-desc"> Description: ' + data.articles[i].description + '</p>';
        htmlText += '<p class="p-created"> Publised at: ' + data.articles[i].publishedAt + '</p>';
        htmlText += '<a href='+data.articles[i].url+'>';
        htmlText += '<input type="button" value="Visit Page" />';
        htmlText += '</a>';
        htmlText += '<input type="button" value="add favourites" onClick="callServlet(this)" title=\"'+data.articles[i].title+'\">';        //htmlText += '<script type="text/javascript" src="function1.js"></script>';
        htmlText += '</div>';
  
        htmlText += '<div class="col-md-4"><img src='+data.articles[i].urlToImage+' width=80px height=100px></div>';
        htmlText += '<hr>';
    }
document.getElementById('result').insertAdjacentHTML('afterend',htmlText);
}


function callServlet(input){
	alert("indide callservlet js");
	var title=input.getAttribute('title')
var xmlhttp = new XMLHttpRequest();

var params = "title="+title;
xmlhttp.open('GET',"http://localhost:8082/newsapp/MyFavourites?"+params, true);
xmlhttp.send();

	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			//document.getElementById("fav_result").innerHTML = xmlhttp.responseText;
			//document.getElementById('fav_result').insertAdjacentHTML('afterend',responseText);

		}
	}
}
function showFav(){
	alert("inside showfav js");
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET',"http://localhost:8082/newsapp/ShowFavourites?", true);
xmlhttp.send();

	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			//document.getElementById("fav_result").innerHTML = xmlhttp.responseText;
			//document.getElementById('fav_result').insertAdjacentHTML('afterend',responseText);
			response=JSON.parse(xmlhttp.responseText);
			alert("below parse")
			//alert(response.titles[2].title.toString());
			json= JSON.stringify(response,null,2);
			alert("below stringify");
			console.log(json);
			var len=response.titles.length;
			var html='<p><h2><b>Your Favourites are</b></h2></p>';
			for(var v=0;v<len;v++){
				html+='<p>'+response.titles[v].title+'</p>'				
			}
			//document.getElementById('fav_result').insertAdjacentHTML('afterend',html);
			document.getElementById('fav_result').innerHTML=html;

		}
	
}
}

