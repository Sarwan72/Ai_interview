


require('dotenv').config();

const { google } = require('googleapis');
const http = require('http');
const url = require('url');

const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

const SCOPES = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
];

const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
});

console.log('Authorize this app by visiting this URL:', authUrl);

const server = http.createServer(async (req, res) => {
    if (req.url.startsWith('/oauth2callback')) {
        const query = url.parse(req.url, true).query;

        if (query.code) {
            try {
                const { tokens } = await oAuth2Client.getToken(query.code);
                oAuth2Client.setCredentials(tokens);

                console.log('Tokens acquired:', tokens);

                res.end('Authorization successful!');
                server.close();
            } catch (err) {
                console.error(err);
                res.end('Error retrieving tokens');
            }
        }
    }
});

server.listen(5200, () => {
    console.log('Listening on http://localhost:5200/oauth2callback');
});