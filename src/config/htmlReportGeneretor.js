const report = require('cucumber-html-report');

var options ={

    brandTitlle: "Scenarios",
    theme: 'bootstrap',
    jsonFile: './reports/cucumber-report.json',
    output: './reports/cucumber-report.html',

    reportSuiteAsScenarios:true,
    scenarioTimestamp:true,
    launchReport:true,
    metadata: {
        "Version":"1.0",
        "test Environment": "test",
        "Platform":"WEB",
        "MVP":"1",
        "Executed":"Remote"
    }
 };
report.generate(options);
