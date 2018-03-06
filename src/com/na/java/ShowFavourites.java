package com.na.java;

import java.io.FileReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@WebServlet("/ShowFavourites")
public class ShowFavourites extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public ShowFavourites() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		System.out.println("inside doGet of ShowFav");
		JSONParser parser=new JSONParser();
		JSONObject jobj=new JSONObject();
		try 
		{
			jobj=(JSONObject)parser.parse(new FileReader("/home/sapient/Documents/stsworkspace/newsapp/src/com/na/java/favourite.json"));
			System.out.println("parsed json outer object");
		}catch(Exception e) {e.printStackTrace();}
		finally {
			response.setContentType("application/json");
			response.getWriter().write(jobj.toString());
			System.out.println("Returned to js");
		}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
