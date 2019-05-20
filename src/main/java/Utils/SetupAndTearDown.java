package main.java.Utils;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class SetupAndTearDown {
	
	@Before
	public static void initialize(Scenario scenario) throws Exception{
		System.out.println("dafjkhdjkhj");
		AppConfigManager.setup();
	}

}
