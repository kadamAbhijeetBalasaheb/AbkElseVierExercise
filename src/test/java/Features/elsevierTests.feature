@Bitly @RunAllTestcases
Feature: Validate various endpoints

  @verifyUserInfo
  Scenario: Validate user info endpoint
  Given I try to access user information with correct "GET" endpoint "/v3/user/info" and correct token "b7b24e743d645bd3661551dcb02486ca39f555bc"
  Then I should get status code "200"
  And I validate the reposnse with following values
  | display_name   | full_name      |
  | abhijeet kadam | abhijeet kadam |
  
    @verifyUserInfoInValidToken
  Scenario: Validate user info endpoint
  Given I try to access user information with correct "GET" endpoint "/v3/user/info" and incorrect token "b7b24e764586ca39f555bc"
  Then I should get status code "403"
  
      @verifyUserInfoInValidHttpMethod
  Scenario: Validate user info endpoint
  Given I try to access user information with incorrect "POST" endpoint "/v3/user/info" and incorrect token "b7b24e764586ca39f555bc"
  Then I should get status code "405"
  
  @ShortenLongUrl
  Scenario: Validate url shorten endpoint
  Given I try to shorten long url "https://en.wikipedia.org/wiki/Oblivion_(2013_film)" with correct "GET" endpoint "/v3/shorten" and correct token "b7b24e743d645bd3661551dcb02486ca39f555bc"
  Then I should get status code "200"
  And I validate the reposnse with following values
  | long_url                                           |
  | https://en.wikipedia.org/wiki/Oblivion_(2013_film) |
  
    @ShortenLongUrlInvalidToken
  Scenario: Validate url shorten endpoint
  Given I try to shorten long url "https://en.wikipedia.org/wiki/Oblivion_(2013_film)" with correct "GET" endpoint "/v3/shorten" and incorrect token "b7b24e743d6451dcb02486ca39f555bc"
  Then I should get status code "500"
  
      @ShortenLongUrlInvalidHttpMethod
  Scenario: Validate url shorten endpoint
  Given I try to shorten long url "https://en.wikipedia.org/wiki/Oblivion_(2013_film)" with incorrect "POST" endpoint "/v3/shorten" and incorrect token "b7b24e743d6451dcb02486ca39f555bc"
  Then I should get status code "500"

  @History
  Scenario: Validate user link history endpoint
    Given I try to access user information with correct "GET" endpoint "/v3/user/link_history" and correct token "b7b24e743d645bd3661551dcb02486ca39f555bc"
    Then I should get status code "200"
    And I validate the history api reposnse with following values
      | long_url                                                                | archived | title    |
      | https://en.wikipedia.org/wiki/Oblivion_(2013_film)                      | false    | Oblivion |
      | https://pm2amtrips.com/user/openTrip.action?tripId=236                  | false    | pmtoam   |
      | https://www.funda.nl/huur/hilversum/appartement-40187072-binnendoor-18/ | false    | funda    |
      
      
        @HistoryInvalidToken
  Scenario: Validate user link history endpoint
    Given I try to access user information with correct "GET" endpoint "/v3/user/link_history" and incorrect token "b7b24e743d645bd02486ca39f555bc"
    Then I should get status code "403"
    
            @HistoryInvalidHttpMethod
  Scenario: Validate user link history endpoint
    Given I try to access user information with incorrect "POST" endpoint "/v3/user/link_history" and incorrect token "b7b24e743d645bd02486ca39f555bc"
    Then I should get status code "405"
