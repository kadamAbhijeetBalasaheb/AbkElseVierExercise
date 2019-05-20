package main.java.Utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class RestActions {


	public static HttpURLConnection getConnection(String httpMethod, String endpoint, String accessToken) throws Exception {

		String baseUrl  = AppConfigManager.getBaseUrl();		
		String url = baseUrl + endpoint + "?access_token=" + accessToken;

		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		return con;

	}


	public static String getResponse(HttpURLConnection con) throws IOException {

		BufferedReader in = new BufferedReader(
				new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();
		
		return response.toString();

	}

	public static HttpURLConnection getConnectionForLongUrl(String httpMethod, String endpoint, String accessToken,
			String longUrl) throws Exception {
		
		String baseUrl = AppConfigManager.getBaseUrl();		
		String url = baseUrl + endpoint + "?access_token=" + accessToken + "&longUrl="+ longUrl;
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		return con;
		
	}


}
