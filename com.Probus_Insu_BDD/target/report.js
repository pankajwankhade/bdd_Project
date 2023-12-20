$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Probus Live application",
  "description": "",
  "id": "probus-live-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify login page",
  "description": "",
  "id": "probus-live-application;verify-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User should enter URl",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_enter_URl()"
});
formatter.result({
  "duration": 16454513600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_navigate_to_login_page()"
});
formatter.result({
  "duration": 15000,
  "status": "passed"
});
});