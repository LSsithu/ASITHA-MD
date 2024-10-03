const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=HMk0zI6L#uvvqYSQuE6UVzWx8ltEt3VuqF0KOlPPOdOoi9ZfxlYc",
MONGODB: process.env.MONGODB || "mongodb://mongo:hIHeNtoAoGDfnZUYiCrIFNZguGRwpTFz@junction.proxy.rlwy.net:58427",//enter mongo db url
};
