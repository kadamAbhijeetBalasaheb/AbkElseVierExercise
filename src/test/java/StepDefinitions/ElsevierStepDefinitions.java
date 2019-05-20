package test.java.StepDefinitions;


import java.net.HttpURLConnection;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.JSONArray;
import org.json.JSONObject;
import org.testng.Assert;


import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import main.java.Utils.JsonEval;
import main.java.Utils.RestActions;

public class ElsevierStepDefinitions {
	
	String response = null;
	HttpURLConnection con = null;

@Given("^I try to access user information with correct \"([^\"]*)\" endpoint \"([^\"]*)\" and (?:correct|incorrect) token \"([^\"]*)\"$")
public void i_try_to_access_user_information_with_correct_endpoint_and_correct_token
	(String httpMethod,String endpoint, String accessToken) throws Throwable {
	
	con = RestActions.getConnection(httpMethod, endpoint, accessToken);
}

@Given("^I try to shorten long url \"([^\"]*)\" with correct \"([^\"]*)\" endpoint \"([^\"]*)\" and (?:correct|incorrect) token \"([^\"]*)\"$")
public void i_try_to_shorten_long_url_with_correct_endpoint_and_correct_token(String longUrl, String httpMethod, String endpoint, String accessToken) throws Throwable {
    
	con = RestActions.getConnectionForLongUrl(httpMethod, endpoint, accessToken, longUrl);
	
	
}

@Then("^I should get status code \"([^\"]*)\"$")
public void i_should_get(String expectedStatusCode) throws Throwable {

	  
	response = RestActions.getResponse(con);
	JsonEval jsoneval = new JsonEval();
	String actualResponseCode = jsoneval.findInJson("status_code", response.toString());	
	Assert.assertEquals(actualResponseCode, expectedStatusCode);
		
}

@Then("^I validate the reposnse with following values$")
public void i_validate_the_reposnse_with_following_values(DataTable dataTable) throws Exception {
	
	
	List<Map<String,String>> inputDataMapList = dataTable.asMaps(String.class, String.class);	
	
	Set<String> inputDataTableKeys = new HashSet<String>();
	
	inputDataTableKeys = inputDataMapList.get(0).keySet();
	JsonEval jsoneval = new JsonEval();
	Map<String,String> responseMap = new HashMap<String,String>();
	for(String inputDataTableKey : inputDataTableKeys){
	String value = jsoneval.findInJson(inputDataTableKey, response.toString());	
	responseMap.put(inputDataTableKey, value);
	}
	
	if(inputDataMapList.get(0).equals(responseMap)){
		System.out.println("ALL GOOD");
	}else{
		throw new Exception("Input and Output dont match");
	}
	
}



@Then("^I validate the history api reposnse with following values$")
public void i_validate_the_history_reposnse_with_following_values(DataTable dataTable) 
		throws Throwable {
	
	List<Map<String,String>> inputDataTable = dataTable.asMaps(String.class, String.class);
	
	Set<String> inputDataKeys = new HashSet<String>();
	inputDataKeys = inputDataTable.get(0).keySet();
	JSONObject jsonObj = new JSONObject(response);	
	JSONObject jsonObj1 = jsonObj.getJSONObject("data");		
	JSONArray jsonArrayObj = jsonObj1.getJSONArray("link_history");

	List<Map<String,String>> arrayData = new ArrayList<Map<String,String>>();
			
	for(int i = 0 ; i < jsonArrayObj.length();i++){
		
		Map<String,String> jsonArrayMap = new HashMap<String,String>();	
		
		for(String inputDataKey : inputDataKeys){
		
		JSONObject jObj = jsonArrayObj.getJSONObject(i);
		
		jsonArrayMap.put(inputDataKey, String.valueOf( jObj.get(inputDataKey)));
	}
		
		arrayData.add(jsonArrayMap);
	}
	if(	inputDataTable.equals(arrayData)){
		System.out.println("ALL GREAT");
	
	}else{
		throw new Exception("Input and Output dont match");
	}
}
}


	



