import {getEnv} from "../env/env";

const axios = require("axios");
const assert = require("assert");
const fs = require("fs");
const https = require("https");
const FormData = require("form-data");

async function addConfluenceAttachment() {
    getEnv();

    var date = new Date();
    var day = date.getDate().toString();
    var month = (date.getMonth()+1).toString();
    var year = date.getFullYear().toString();
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var currentDate = day + month + year + hours + minutes ;
    const reportFileName = process.env.npm_config_report_filename || "";
    const oldName = 'reports/cucumber-reports.html'
    const newName = 'reports/cucumber-reports_' + reportFileName +'_'+ currentDate + '.html'

    fs.renameSync(oldName, newName)

    const confluenceUrl = 'Aqui agregarbla URL principal';
    const confluencePage = process.env.CONFLUENCE_PAGE;
    const apiConfluenceAddAttachment = 'rest/api/content/'+ confluencePage + '/child/attachmnet';
    const fileToAttach = newName;
    const jiraUser = process.env.npm_config_jira_user || "usuario";
    const jiraPassword = process.env.npm_config_jira_password || "password";
    const formData = new FormData();

    formData.append('file',fs.createReadStream(fileToAttach));

    const request = await axios.create ({
        httpsAgent: new https.Agent({
              rejectUnauthorized:false
        })
    });

    const response = await request.post(confluenceUrl + apiConfluenceAddAttachment, formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-Atlassian-Token': 'no-check'
        },
        auth: {
            username : jiraUser,
            password : jiraPassword
        }
    });

    console.log(response.data);
    await assert(response.status == 200, 'Expected status code 200');
    console.log("File upload to confluence succesfully");
    
}

addConfluenceAttachment();