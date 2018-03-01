package com.na.java;

import java.io.FileWriter;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.json.JSONException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * Servlet implementation class MyFavourites
 */
@WebServlet("/MyFavourites")
public class MyFavourites extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public MyFavourites() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		/*String author = request.getParameter("author");
		PrintWriter out=response.getWriter();
		out.println(movie);*/
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		System.out.println("entered get");

		JSONObject info = new JSONObject();
		JSONArray  Titles = new JSONArray();
		try {
			//System.out.println(request.getParameter("title"));
			info.put("title",request.getParameter("title"));
			Titles.add(info);
		} catch (Exception e) {e.printStackTrace();
		}
		try {
			String title=request.getParameter("title");
			
			/*FileWriter jsonFileWriter = new FileWriter("/home/sapient/Documents/stsworkspace/newsapp/src/com/na/java/favourite.json");
			jsonFileWriter.write(info.toString());
			jsonFileWriter.flush();
			jsonFileWriter.close();*/
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			response.setContentType("application/json");
			response.getWriter().write(info.toString());
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
