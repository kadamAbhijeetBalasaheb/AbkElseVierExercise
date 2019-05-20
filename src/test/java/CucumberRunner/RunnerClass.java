package test.java.CucumberRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"C:/Users/akada2/Documents/AbkElseVierExercise/src/test/java/Features"},   
        	plugin = {"pretty" ,"html:output" ,
                        "json:target/cucumber-report/cucumber.json" ,
                        "junit:output/cucumber.xml"}, 
        monochrome = true,
        tags = {"@RunAllTestcases"},
        glue = {"test.java.StepDefinitions","main.java.Utils"})
public class RunnerClass {
	

	

    
}


