const { google } = require('googleapis');
const fs = require('fs');
const { file } = require('googleapis/build/src/apis/file');
const CLIENT_ID='40970623721-s75839795evdb8uv7770hapd2jlssfsb.apps.googleusercontent.com';
const CLIENT_SECRET='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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN='1//04GYj75Xtqax5CgYIARAAGAQSNwF-L9Ir_SkFXsN_iRRGMxj-AgQIYDBjaOoRU3A7UTi6vEkIvxEzYXrPU0HARfSOop5nHo0ZCkw';


const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})


const uploadFile = async (name,filePath) =>{
    try {
        const response = await drive.files.create({
            requestBody:{
                name:name,
                mimeType:'application/pdf'
            },
            media:{
                mimeType:'application/pdf',
                body: fs.createReadStream(filePath)
            }
        });
        return response;

    } catch (error) {
        console.log(error);
    }
}

const deleteFile = async (fileId) =>{
    try {
        const response = await drive.files.delete({
            fileId:fileId
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}


const generatePublicURL = async (fileId) =>{
    try {
        await drive.permissions.create({
            fileId:fileId,
            requestBody:{
                role:'reader',
                type:'anyone'
            }
        })

        const response = await drive.files.get({
            fileId:fileId,
            fields: 'webViewLink,webContentLink',
        })
        return response;

    } catch (error) {
        console.log(error);
    }
}

module.exports = { uploadFile,deleteFile,generatePublicURL }