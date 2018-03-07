<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
  <link rel="stylesheet" href="https://v40.pingendo.com/assets/4.0.0/default/theme.css" type="text/css"> </head>
 <!-- mycss -->
 <link rel="stylesheet" href="style.css">
 <script src="main.js" type="text/javascript"></script>
 
</head>
<body>
	
	<div class="container">
		<nav class="nav bg-inverse">
 			<a class="nav-link active" href="#">Active</a>
  			<a class="nav-link" href="#">Link</a>
  			<a class="nav-link" href="#">Link</a>
		</nav>
		<div id="1" style="padding-top: 25px "><h1><b><center>Newspedia</center></b></h1></div>
		<div style="padding-top: 15px "><center><input type="text" id="userinput"></input></center></div>
		<div style="padding-top: 15px ">
			<center>
				<button type="button" onclick="news()">Go</button>
				<button type="button" onclick="showFav()">Show Favourites</button>
			</center>
		</div>

		<div id="result"></div>
		<div id="fav_result"></div>
		<div class="row" style="padding-top: 20px">
		<div class="col-sm-3">contact us</div>
		<div class="col-sm-3">facebook</div>
		<div class="col-sm-3">twitter</div>
		<div class="col-sm-3">instagram</div>
		</div>
		</div>
	
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
</html>