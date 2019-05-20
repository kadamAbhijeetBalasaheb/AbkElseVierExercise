package Utils;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class AppConfigManager {
	
	private static String baseUrl;
	
	  public synchronized static void setup() throws Exception {

			Properties properties = new Properties();
			String appPath = System.getProperty("user.dir");
			File file = new File(appPath + "/Configuration/AppConfig.properties");

			FileInputStream fileInput = new FileInputStream(file);
			properties.load(fileInput);
			baseUrl = properties.getProperty("baseUrl");
	
		
			System.out.println("testEnv " + baseUrl);

}


	public static String getBaseUrl() {
		
		return baseUrl;
	}
}

