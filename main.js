const axios = require('axios');
const chalk = require('chalk');
const {MissingTokenError} = require('./utils/CheweybotError')
var settings ={
    token : "",
    active: false
};

    async function login(apitoken){
        if (settings.active){
            return new Promise((resolve, reject) => {
                throw reject('The API is already inizialized')
            })
        }else if (typeof apitoken == "string") {
            settings.token = apitoken;
            return new Promise((resolve, reject) => {
                get('endpoints').then(() => {
                    settings.active = true
                }).catch((error) => {
                    reject(error)
                })
            })
        } else {
               throw new MissingTokenError('Token must be a string or not specified')
        }
    }


    async function get(endpoint,token) {
        return new Promise((resolve, reject) => {
            if (!settings.token && !token) {
                throw new MissingTokenError('Token must be a string or not specified')
            }
             axios.get(`https://api.chewey-bot.ga/${endpoint}`, {headers: {"Authorization": token ? token : settings.token }}).then((res) => {
                 resolve(res.data)
            }).catch(error => {

                if (error.response.status === 404) {
                     reject(`${chalk.blue('[Cheweybot-Wrapper]')} ${chalk.red('[Error] No endpoint find')}`);
                } else {
                     reject(`${chalk.blue('[Cheweybot-Wrapper]')} ${chalk.red('[Error]')} Internal error: ${error.toString()} with error code ${error.response.status}`);
                }
            })
        })
    }

module.exports ={
    login,
    get
}