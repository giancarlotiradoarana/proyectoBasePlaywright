const axios = require("axios");
const assert = require("assert");
const file = require("fs");
const https = require("https");

const jiraUrl = 'Aqui agregar la URL principal';
const apiXrayImportCucumberResult = 'rest/raven/1.0/import/execution/cucumber';
const cucumberJsonFile = 'reports/cucumber-report.json';
const jiraUser = process.env.npm_config_jira_user || "usuario";
const jiraPassword = process.env.npm_config_jira_password || "password";


async function readCucumberJson() {
    try {
        const data = file.readFileSync(cucumberJsonFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        throw error;
        
    }
}

async function importCucumberResult() {
    const data = await readCucumberJson();

    const request = await axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized:false
        })
    });

    const response = await request.post(jiraUrl+apiXrayImportCucumberResult, data,{
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            username : jiraUser,
            password : jiraPassword
        }
    });

    await assert(response.status == 200, 'Expected status code 200');
    console.log(response.data);
}
 importCucumberResult();