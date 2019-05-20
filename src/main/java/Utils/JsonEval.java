package main.java.Utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

	public class JsonEval {

	    String value = "";


	    public String  findInJson(String attributeName, String jsonString) throws Exception {

		value = "";
		findInJsonObject(attributeName, jsonString);
		return value;
	    }


	    private String findInJsonObject(String attributeName, String jsonString) throws Exception {

		JSONParser parser = new JSONParser();
		Object obj = parser.parse(jsonString);
		JSONObject jsonObject = null;
		JSONArray jsonArray = null;
		if (obj instanceof JSONObject) {
		    jsonObject = (JSONObject) obj;
		    Set<String> keys = jsonObject.keySet();
		    for (String key : keys) {
			Object childObject = jsonObject.get(key);
			if (key.equals(attributeName)) {
			    // System.out.println(childObject.toString());
			    value = childObject.toString();
			    return value;
			} else if (childObject instanceof JSONObject) {
			    findInJsonObject(attributeName, ((JSONObject) childObject).toJSONString());
			} else if (childObject instanceof JSONArray) {
			    jsonArray = (JSONArray) childObject;
			    processJsonArray(attributeName, jsonArray);
			}
		    }
		} else if (obj instanceof JSONArray) {
		    jsonArray = (JSONArray) obj;
		    processJsonArray(attributeName, jsonArray);

		} else
		    throw new Exception("Not a valid json string" + jsonString);

		return value;
	    }


	    public ArrayList<String> getJsonArrayInList(String jsonArrayString) throws ParseException {

		ArrayList<String> jsonArrayList = new ArrayList<String>();
		if (jsonArrayString.isEmpty())
		    return jsonArrayList;
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(jsonArrayString);
		if (obj instanceof JSONArray) {
		    JSONArray jsonArray = (JSONArray) obj;
		    for (Object objectArray : jsonArray) {
			jsonArrayList.add(objectArray.toString());
		    }
		}
		return jsonArrayList;
	    }


	    private void processJsonArray(String attributeName, JSONArray jsonArray) throws Exception {

		for (Object objectArray : jsonArray) {
		    if (objectArray instanceof JSONArray) {
			processJsonArray(attributeName, (JSONArray) objectArray);
		    } else if (objectArray instanceof JSONObject) {
			findInJsonObject(attributeName, objectArray.toString());
		    } else if(objectArray instanceof String){
		    	String strObjArray=objectArray.toString();
		    	if(strObjArray.contains("{")||strObjArray.contains("}")||strObjArray.contains("[")||strObjArray.contains("]")) {
		    		throw new Exception("Not a Valid json object as it contains partial json format: " + objectArray.toString());
		    	}
		    }else {
			throw new Exception("Not a Valid json object: " + objectArray.toString());
		    }
		}
	    }


	    public String getPropertyValue(String propertyName, String jsonString) throws ParseException {

		String propertyValue = null;
		Object propertyValueObject = null;

		JSONParser parser = new JSONParser();
		Object obj = parser.parse(jsonString);
		JSONObject jsonObject = null;
		JSONArray jsonArray = null;
		if (obj instanceof JSONObject) {
		    jsonObject = (JSONObject) obj;
		    jsonObject.containsKey(propertyName);
		    propertyValueObject = jsonObject.get(propertyName);
		    if (propertyValueObject != null)
			propertyValue = propertyValueObject.toString();
		}
		return propertyValue;
	    }


	    public boolean isJsonArray(String jsonString) throws ParseException {

		boolean isJsonArrayObject = false;
		try {
		    JSONParser parser = new JSONParser();
		    Object obj = parser.parse(jsonString);
		    if (obj instanceof JSONArray) {
			isJsonArrayObject = true;
		    }
		} catch (Exception e) {
		    System.out.println("Invalid json string: " + jsonString);
		}
		return isJsonArrayObject;
	    }
	    
	    public String findKeyInJson(String key,String jsonString) throws Exception{
	    	String value="";
	    	try{
	    	JSONParser parser = new JSONParser();
	    	Object obj = parser.parse(jsonString);
	    	JSONObject jsonObject = (JSONObject) obj;
	    	Object childObject = jsonObject.get(key);
		    value = childObject.toString();
	    	}
	    	 catch (Exception e) {
	    		    System.out.println("Invalid json string: " + jsonString);
	    		    throw e;
	    		}
	    	return value;	
	    }
	    
	  
	}


