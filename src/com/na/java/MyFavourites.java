package com.na.java;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

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
		
		System.out.println("inside doGet of MyFav");
		JSONObject info = new JSONObject();
		JSONArray  titles = new JSONArray();
		JSONObject obj_ar_obj= new JSONObject();
		JSONParser parser=new JSONParser();
		List<String> str_arr=new ArrayList<String>();
		
		
		try {
			obj_ar_obj=(JSONObject)parser.parse(new FileReader("/home/sapient/Documents/stsworkspace/newsapp/src/com/na/java/favourite.json"));
			titles=(JSONArray)obj_ar_obj.get("titles");
			
			/*for(Object jobj:titles) {
				
				JSONObject tit=(JSONObject)jobj;
			    String str = (String)tit.get("title");
			    str_arr.add(str);
			}*/
			String title=request.getParameter("title");
			info.put("title",title);//
			if(titles.size()<10)
			{
				boolean flag=false;
	            Iterator<JSONObject> iterator=titles.iterator();
	            while(iterator.hasNext())
	            {
	            	JSONObject job=(JSONObject)iterator.next();
	            	if(job.get("title").toString().equals(title))
	            	{
	            		System.out.println("Already added: Try to add other news");
	            		flag=true;
	            		break;
	            	}
	            }
	            if(flag==false)
	            {
					titles.add(info);
					obj_ar_obj.put("titles", titles);
					System.out.println("inside try: successfully added new entries to json object");
					System.out.println("number of favourites added: "+titles.size());

	            }

			}
			else{
				//JOptionPane.showMessageDialog(null, "More than 10 entries:oldest entry will be deleted");
				titles.remove(0);
				System.out.println("below remove");
				titles.add(info);
				obj_ar_obj.put("titles", titles);
				//JOptionPane.showMessageDialog(null, "Now add favourites");

			}
			
			
		} catch (Exception e) {e.printStackTrace();}
		try {

			//String title=request.getParameter("title");
			FileWriter jsonFileWriter = new FileWriter("/home/sapient/Documents/stsworkspace/newsapp/src/com/na/java/favourite.json");
			jsonFileWriter.write(obj_ar_obj.toString());
			jsonFileWriter.flush();
			jsonFileWriter.close();
			System.out.println("file flushed in MyFavourites.java");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			//response.setContentType("application/json");
			//response.getWriter().write(info.toString());
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}