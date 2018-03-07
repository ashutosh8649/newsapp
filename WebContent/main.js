/*function news(){
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
        htmlText += '<p> Author: ' + data.articles[i].author + '</p>';
        htmlText += '<p>Title: ' + data.articles[i].title + '</p>';
        htmlText += '<p> Description: ' + data.articles[i].description + '</p>';
        htmlText += '<p> Publised at: ' + data.articles[i].publishedAt + '</p>';
        htmlText += '<a href='+data.articles[i].url+'>';
        htmlText += '<input type="button" value="Visit Page" />';
        htmlText += '</a>';
        //htmlText += '<input type="button" value="add favourites" onClick="callServlet(this)" title=\"'+data.articles[i].title+'\">';        //htmlText += '<script type="text/javascript" src="function1.js"></script>';
        htmlText += '<input type="button" value="add favourites" onClick="callServlet('+data.articles[i].title+')">';        //htmlText += '<script type="text/javascript" src="function1.js"></script>';
        htmlText += '</div>';
  
        htmlText += '<div class="col-md-4"><img src='+data.articles[i].urlToImage+' width=80px height=100px></div>';
        htmlText += '<hr>';
    }
document.getElementById('result').insertAdjacentHTML('afterend',htmlText);
}
*/
function news() {
	var xmlHttp = new XMLHttpRequest();
	var api = 'https://newsapi.org/v2/everything?';
	var apikey = '0e8cc5ab21834bab8fe426640b727965';
	var input = document.getElementById('userinput').value;
    var url = api + 'q=' +input+'&'+'apiKey='+apikey;
	xmlHttp.onreadystatechange = function() {
		
		if (this.status == 404) {
			document.getElementById('input').innerHTML = "404 news not found";
		} else if (this.readyState == 4 && this.status == 200) {
			
			var myArr = JSON.parse(this.responseText);
			data = myArr;
			var htmlText = '';
			   for ( var i=0;i<20;i++ ) {
			  	 console.log(data.articles[i].title);
			       htmlText += '<div class="div-conatiner">';
			       htmlText += '<div class="col_sm_4">';
			       htmlText += '<p> Author: ' + data.articles[i].author + '</p>';
			       htmlText += '<p>Title: ' + data.articles[i].title + '</p>';
			       htmlText += '<p> Description: ' + data.articles[i].description + '</p>';
			       htmlText += '<p> Publised at: ' + data.articles[i].publishedAt + '</p>';
			       htmlText += '</div>';
			       
			       htmlText += '<div id="images"><img src='+data.articles[i].urlToImage+' height=500px width=500px></div>';
			       htmlText += '<a href='+data.articles[i].url+'>';
			       htmlText += '<input type="button" value="Visit Page" />';
			       htmlText += '</a>';
			       htmlText += '<input type="button" value="Add to Favourite" id="'+i+'" onClick=callServlet('+i+')></input>';
			       htmlText += '<hr>';
			   }
			document.getElementById('result').insertAdjacentHTML('afterend',htmlText);
		}
	};
	xmlHttp.open("GET", url, true);
	xmlHttp.send();

}


function callServlet(i){
	//alert("inside callservlet js");
	/*var title=input.getAttribute('title')*/
	var title=data.articles[i].title;
	alert(title);
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

