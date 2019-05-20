$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("elsevierTests.feature");
formatter.feature({
  "line": 2,
  "name": "Validate various endpoints",
  "description": "",
  "id": "validate-various-endpoints",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Bitly"
    },
    {
      "line": 1,
      "name": "@RunAllTestcases"
    }
  ]
});
formatter.before({
  "duration": 1465772,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate user info endpoint",
  "description": "",
  "id": "validate-various-endpoints;validate-user-info-endpoint",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@verifyUserInfo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I try to access user information with correct \"GET\" endpoint \"/v3/user/info\" and correct token \"b7b24e743d645bd3661551dcb02486ca39f555bc\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should get status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I validate the reposnse with following values",
  "rows": [
    {
      "cells": [
        "display_name",
        "full_name"
      ],
      "line": 9
    },
    {
      "cells": [
        "abhijeet kadam",
        "abhijeet kadam"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 47
    },
    {
      "val": "/v3/user/info",
      "offset": 62
    },
    {
      "val": "b7b24e743d645bd3661551dcb02486ca39f555bc",
      "offset": 96
    }
  ],
  "location": "ElsevierStepDefinitions.i_try_to_access_user_information_with_correct_endpoint_and_correct_token(String,String,String)"
});
formatter.result({
  "duration": 948481254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "ElsevierStepDefinitions.i_should_get(String)"
});
formatter.result({
  "duration": 783611749,
  "status": "passed"
});
formatter.match({
  "location": "ElsevierStepDefinitions.i_validate_the_reposnse_with_following_values(DataTable)"
});
formatter.result({
  "duration": 14160066,
  "status": "passed"
});
formatter.before({
  "duration": 3539450,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate user info endpoint",
  "description": "",
  "id": "validate-various-endpoints;validate-user-info-endpoint",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@verifyUserInfoInValidToken"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I try to access user information with correct \"GET\" endpoint \"/v3/user/info\" and incorrect token \"b7b24e764586ca39f555bc\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I should get status code \"403\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 47
    },
    {
      "val": "/v3/user/info",
      "offset": 62
    },
    {
      "val": "b7b24e764586ca39f555bc",
      "offset": 98
    }
  ],
  "location": "ElsevierStepDefinitions.i_try_to_access_user_information_with_correct_endpoint_and_correct_token(String,String,String)"
});
formatter.result({
  "duration": 355682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 26
    }
  ],
  "location": "ElsevierStepDefinitions.i_should_get(String)"
});
formatter.result({
  "duration": 101928158,
  "status": "passed"
});
formatter.before({
  "duration": 2771071,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate url shorten endpoint",
  "description": "",
  "id": "validate-various-endpoints;validate-url-shorten-endpoint",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@ShortenLongUrl"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I try to shorten long url \"https://en.wikipedia.org/wiki/Oblivion_(2013_film)\" with correct \"GET\" endpoint \"/v3/shorten\" and correct token \"b7b24e743d645bd3661551dcb02486ca39f555bc\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I should get status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I validate the reposnse with following values",
  "rows": [
    {
      "cells": [
        "long_url"
      ],
      "line": 22
    },
    {
      "cells": [
        "https://en.wikipedia.org/wiki/Oblivion_(2013_film)"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://en.wikipedia.org/wiki/Oblivion_(2013_film)",
      "offset": 27
    },
    {
      "val": "GET",
      "offset": 93
    },
    {
      "val": "/v3/shorten",
      "offset": 108
    },
    {
      "val": "b7b24e743d645bd3661551dcb02486ca39f555bc",
      "offset": 140
    }
  ],
  "location": "ElsevierStepDefinitions.i_try_to_shorten_long_url_with_correct_endpoint_and_correct_token(String,String,String,String)"
});
formatter.result({
  "duration": 675871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "ElsevierStepDefinitions.i_should_get(String)"
});
formatter.result({
  "duration": 118740736,
  "status": "passed"
});
formatter.match({
  "location": "ElsevierStepDefinitions.i_validate_the_reposnse_with_following_values(DataTable)"
});
formatter.result({
  "duration": 805759,
  "status": "passed"
});
formatter.before({
  "duration": 2391980,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate url shorten endpoint",
  "description": "",
  "id": "validate-various-endpoints;validate-url-shorten-endpoint",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@ShortenLongUrlInvalidToken"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I try to shorten long url \"https://en.wikipedia.org/wiki/Oblivion_(2013_film)\" with correct \"GET\" endpoint \"/v3/shorten\" and incorrect token \"b7b24e743d6451dcb02486ca39f555bc\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I should get status code \"500\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://en.wikipedia.org/wiki/Oblivion_(2013_film)",
      "offset": 27
    },
    {
      "val": "GET",
      "offset": 93
    },
    {
      "val": "/v3/shorten",
      "offset": 108
    },
    {
      "val": "b7b24e743d6451dcb02486ca39f555bc",
      "offset": 142
    }
  ],
  "location": "ElsevierStepDefinitions.i_try_to_shorten_long_url_with_correct_endpoint_and_correct_token(String,String,String,String)"
});
formatter.result({
  "duration": 667187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 26
    }
  ],
  "location": "ElsevierStepDefinitions.i_should_get(String)"
});
formatter.result({
  "duration": 95481330,
  "status": "passed"
});
formatter.before({
  "duration": 1713465,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate user link history endpoint",
  "description": "",
  "id": "validate-various-endpoints;validate-user-link-history-endpoint",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@History"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I try to access user information with correct \"GET\" endpoint \"/v3/user/link_history\" and correct token \"b7b24e743d645bd3661551dcb02486ca39f555bc\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I should get status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I validate the history api reposnse with following values",
  "rows": [
    {
      "cells": [
        "long_url",
        "archived",
        "title"
      ],
      "line": 35
    },
    {
      "cells": [
        "https://en.wikipedia.org/wiki/Oblivion_(2013_film)",
        "false",
        "Oblivion"
      ],
      "line": 36
    },
    {
      "cells": [
        "https://pm2amtrips.com/user/openTrip.action?tripId\u003d236",
        "false",
        "pmtoam"
      ],
      "line": 37
    },
    {
      "cells": [
        "https://www.funda.nl/huur/hilversum/appartement-40187072-binnendoor-18/",
        "false",
        "funda"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 47
    },
    {
      "val": "/v3/user/link_history",
      "offset": 62
    },
    {
      "val": "b7b24e743d645bd3661551dcb02486ca39f555bc",
      "offset": 104
    }
  ],
  "location": "ElsevierStepDefinitions.i_try_to_access_user_information_with_correct_endpoint_and_correct_token(String,String,String)"
});
formatter.result({
  "duration": 285829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "ElsevierStepDefinitions.i_should_get(String)"
});
formatter.result({
  "duration": 213640211,
  "status": "passed"
});
formatter.match({
  "location": "ElsevierStepDefinitions.i_validate_the_history_reposnse_with_following_values(DataTable)"
});
formatter.result({
  "duration": 24630782,
  "status": "passed"
});
formatter.before({
  "duration": 2756346,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate user link history endpoint",
  "description": "",
  "id": "validate-various-endpoints;validate-user-link-history-endpoint",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@HistoryInvalidToken"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I try to access user information with correct \"GET\" endpoint \"/v3/user/link_history\" and incorrect token \"b7b24e743d645bd02486ca39f555bc\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I should get status code \"403\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 47
    },
    {
      "val": "/v3/user/link_history",
      "offset": 62
    },
    {
      "val": "b7b24e743d645bd02486ca39f555bc",
      "offset": 106
    }
  ],
  "location": "ElsevierStepDefinitions.i_try_to_access_user_information_with_correct_endpoint_and_correct_token(String,String,String)"
});
formatter.result({
  "duration": 620367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 26
    }
  ],
  "location": "ElsevierStepDefinitions.i_should_get(String)"
});
formatter.result({
  "duration": 97397179,
  "status": "passed"
});
});